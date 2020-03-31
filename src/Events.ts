    export type EventListener = (...arg: any[]) => any;
    export type Listeners = Array<EventListener>;
    export type EventName = string|symbol;

    export interface IEventEmitter {

        addListener(eventName: EventName, listener: EventListener, closure?:any):this;
        on(eventName: EventName, listener: EventListener, closure?:any): this;
        once(eventName: EventName, listener: EventListener, closure?:any): this;
        removeListener(eventName: EventName, listener: EventListener, closure?:any): this;
        removeAllListeners(eventNames?: Array<EventName>, closure?:any): this;
        maxListeners: number;
        listeners(eventName: EventName, closure?:any): Iterable<EventListener> ;
        emit(eventName: EventName, ...args: any[]): boolean;
        listenerCount(eventName: EventName): number;

        prependListener(eventName: EventName, listener: EventListener, closure?:any): this;
        prependOnceListener(eventName: EventName, listener: EventListener, closure?:any): this;
        eventNames(): EventName[];
    }

    export class EventEmitter implements IEventEmitter {

        public static defaultMaxListeners: number = 10;

        private _events = new Map<EventName, any[]>();
        private _maxListeners: number = null;

        public addListener(eventName: EventName, listener: EventListener, closure?:any): this {
            this._registerEvent(eventName, listener, closure);
            return this;
       }

        public on(eventName: EventName, listener: EventListener, closure?:any): this {
            this._registerEvent(eventName, listener, closure);
            return this;
        }

        public once(eventName: EventName, listener: EventListener, closure?:any): this {
            var l:EventListener = this._createOnceListener(listener, eventName, closure);
            this._registerEvent(eventName, l, closure);
            return this;
        }

        public emit(eventName: EventName, ...args: any[]): boolean {
            let listeners: EventListener[] = this._events.get(eventName);
            if (listeners) {
                let i:number = 0;
                let l:number = listeners.length;
                if( i<l) {
                    do {
                        var listener:EventListener  = listeners[i++] ;
                        var object:any = listeners[i++] || this ;
                        if(listener) {
                            listener.call(object,...args);
                        }
                    } while (i<l);
                    return true;
                }
            }
            return false ;
        }

        public eventNames(): EventName[] {
            return Array.from(this._events.keys());
        }

        public get maxListeners(): number {
            return this._maxListeners === null ? EventEmitter.defaultMaxListeners : this._maxListeners;
        }

        public set maxListeners(limit: number) {
            this._maxListeners = limit;
        }

        public *listeners(eventName: EventName, closure?:any): Iterable<EventListener> {
            let listeners:any[] = this._events.get(eventName);
            if(listeners) {
                if( !closure ) {
                    return listeners;
                }
                let i:number = 0;
                let l:number = listeners.length;
                if( i<l) {
                    do {
                        var listener:EventListener  = listeners[i++] ;
                        if( listeners[i++]===closure ) {
                            return yield listener;
                        }
                    } while (i<l);
                }
            }
            return [];
        }

        public listenerCount(eventName: EventName): number {
            let listeners:any[] = this._events.get(eventName);
            return listeners?listeners.length/2:0;
        }

        public removeAllListeners(eventNames?: Array<EventName>, closure?:any): this {
            if (!eventNames) {
                eventNames = Array.from(this._events.keys());
            }
            eventNames.forEach(eventName => this._removeAllListeners(eventName,closure));
            return this;
        }

        private _removeAllListeners(eventName: EventName, closure:any): void {
            let listeners:any[] = this._events.get(eventName);
            if(listeners) {
                if( !closure ) {
                    this._events.delete(eventName);
                    return;
                }
                let i:number = 0;
                let l:number = listeners.length;
                let count:number = 0;
                if( i<l) {
                    do {
                        var listener:EventListener  = listeners[i] ;
                        if( listeners[i+1]===closure ) {
                            // we remove the items.
                            listeners.splice(i,2);
                            continue;
                        }
                        i+=2;
                    } while (i<l);
                }
            }
        }

        public removeListener(eventName: EventName, listener: EventListener, closure?:any): this {
            let listeners:any[] = this._events.get(eventName);
            if(listeners) {
                let i:number = 0;
                let l:number = listeners.length;
                let count:number = 0;
                if( i<l) {
                    do {
                        var tmp:EventListener  = listeners[i] ;
                        if(tmp === listener ) {
                            if( !closure || listeners[i+1]===closure ) {
                                // we remove the items.
                                listeners.splice(i,2);
                                continue;
                            }
                        }
                        i+=2;
                    } while (i<l);

                    if(listeners.length === 0 ) {
                        this._events.delete(eventName);
                    }
                }
            }
            return this;
        }

        prependListener(eventName: EventName, listener: EventListener, closure?:any): this {
            if (this._ListenerLimitReached(eventName)) {
                console.log("Maximum listener reached, new Listener not added");
                return;
            }
            let listeners:any[] = this._events.get(eventName);
            if( !listeners) {
                listeners = [listener,closure];
                this._events.set(eventName,listeners);
                return this;
            }
            listeners.unshift(listener,closure);
        }

        prependOnceListener(eventName: EventName, listener: EventListener, closure?:any): this {
            var l:EventListener = this._createOnceListener(listener, eventName, closure);
            this.prependListener(eventName, l, closure);
            return this;
        }

        private _registerEvent(eventName: EventName, listener: EventListener, closure?:any): void {
            if (this._ListenerLimitReached(eventName)) {
                console.log("Maximum listener reached, new Listener not added");
                return;
            }
            let listeners:any[] = this._events.get(eventName);
            if( !listeners) {
                listeners = [listener,closure];
                this._events.set(eventName,listeners);
                return;
            }
            listeners.push(listener,closure);
        }

        private _createOnceListener(listener: EventListener, eventName: EventName, closure?:any): EventListener {
            let newListener: EventListener = (...args: any[]) => {
                this.removeListener(eventName, listener);
                return listener(...args);
            };
            return newListener;
        }

        private _ListenerLimitReached(eventName: EventName): boolean {
            return this.listenerCount(eventName) === this.maxListeners ? true : false;
        }
    }
