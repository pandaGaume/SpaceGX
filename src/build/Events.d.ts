export declare type EventListener = (...arg: any[]) => any;
export declare type Listeners = Array<EventListener>;
export declare type EventName = string | symbol;
export interface IEventEmitter {
    addListener(eventName: EventName, listener: EventListener, closure?: any): this;
    on(eventName: EventName, listener: EventListener, closure?: any): this;
    once(eventName: EventName, listener: EventListener, closure?: any): this;
    removeListener(eventName: EventName, listener: EventListener, closure?: any): this;
    removeAllListeners(eventNames?: Array<EventName>, closure?: any): this;
    maxListeners: number;
    listeners(eventName: EventName, closure?: any): Iterable<EventListener>;
    emit(eventName: EventName, ...args: any[]): boolean;
    listenerCount(eventName: EventName): number;
    prependListener(eventName: EventName, listener: EventListener, closure?: any): this;
    prependOnceListener(eventName: EventName, listener: EventListener, closure?: any): this;
    eventNames(): EventName[];
}
export declare class EventEmitter implements IEventEmitter {
    static defaultMaxListeners: number;
    private _events;
    private _maxListeners;
    addListener(eventName: EventName, listener: EventListener, closure?: any): this;
    on(eventName: EventName, listener: EventListener, closure?: any): this;
    once(eventName: EventName, listener: EventListener, closure?: any): this;
    emit(eventName: EventName, ...args: any[]): boolean;
    eventNames(): EventName[];
    get maxListeners(): number;
    set maxListeners(limit: number);
    listeners(eventName: EventName, closure?: any): Iterable<EventListener>;
    listenerCount(eventName: EventName): number;
    removeAllListeners(eventNames?: Array<EventName>, closure?: any): this;
    private _removeAllListeners;
    removeListener(eventName: EventName, listener: EventListener, closure?: any): this;
    prependListener(eventName: EventName, listener: EventListener, closure?: any): this;
    prependOnceListener(eventName: EventName, listener: EventListener, closure?: any): this;
    private _registerEvent;
    private _createOnceListener;
    private _ListenerLimitReached;
}
