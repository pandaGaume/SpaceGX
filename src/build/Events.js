export class EventEmitter {
    constructor() {
        this._events = new Map();
        this._maxListeners = null;
    }
    addListener(eventName, listener, closure) {
        this._registerEvent(eventName, listener, closure);
        return this;
    }
    on(eventName, listener, closure) {
        this._registerEvent(eventName, listener, closure);
        return this;
    }
    once(eventName, listener, closure) {
        var l = this._createOnceListener(listener, eventName, closure);
        this._registerEvent(eventName, l, closure);
        return this;
    }
    emit(eventName, ...args) {
        let listeners = this._events.get(eventName);
        if (listeners) {
            let i = 0;
            let l = listeners.length;
            if (i < l) {
                do {
                    var listener = listeners[i++];
                    var object = listeners[i++] || this;
                    if (listener) {
                        listener.call(object, ...args);
                    }
                } while (i < l);
                return true;
            }
        }
        return false;
    }
    eventNames() {
        return Array.from(this._events.keys());
    }
    get maxListeners() {
        return this._maxListeners === null ? EventEmitter.defaultMaxListeners : this._maxListeners;
    }
    set maxListeners(limit) {
        this._maxListeners = limit;
    }
    *listeners(eventName, closure) {
        let listeners = this._events.get(eventName);
        if (listeners) {
            if (!closure) {
                return listeners;
            }
            let i = 0;
            let l = listeners.length;
            if (i < l) {
                do {
                    var listener = listeners[i++];
                    if (listeners[i++] === closure) {
                        return yield listener;
                    }
                } while (i < l);
            }
        }
        return [];
    }
    listenerCount(eventName) {
        let listeners = this._events.get(eventName);
        return listeners ? listeners.length / 2 : 0;
    }
    removeAllListeners(eventNames, closure) {
        if (!eventNames) {
            eventNames = Array.from(this._events.keys());
        }
        eventNames.forEach(eventName => this._removeAllListeners(eventName, closure));
        return this;
    }
    _removeAllListeners(eventName, closure) {
        let listeners = this._events.get(eventName);
        if (listeners) {
            if (!closure) {
                this._events.delete(eventName);
                return;
            }
            let i = 0;
            let l = listeners.length;
            let count = 0;
            if (i < l) {
                do {
                    var listener = listeners[i];
                    if (listeners[i + 1] === closure) {
                        // we remove the items.
                        listeners.splice(i, 2);
                        continue;
                    }
                    i += 2;
                } while (i < l);
            }
        }
    }
    removeListener(eventName, listener, closure) {
        let listeners = this._events.get(eventName);
        if (listeners) {
            let i = 0;
            let l = listeners.length;
            let count = 0;
            if (i < l) {
                do {
                    var tmp = listeners[i];
                    if (tmp === listener) {
                        if (!closure || listeners[i + 1] === closure) {
                            // we remove the items.
                            listeners.splice(i, 2);
                            continue;
                        }
                    }
                    i += 2;
                } while (i < l);
                if (listeners.length === 0) {
                    this._events.delete(eventName);
                }
            }
        }
        return this;
    }
    prependListener(eventName, listener, closure) {
        if (this._ListenerLimitReached(eventName)) {
            console.log("Maximum listener reached, new Listener not added");
            return;
        }
        let listeners = this._events.get(eventName);
        if (!listeners) {
            listeners = [listener, closure];
            this._events.set(eventName, listeners);
            return this;
        }
        listeners.unshift(listener, closure);
    }
    prependOnceListener(eventName, listener, closure) {
        var l = this._createOnceListener(listener, eventName, closure);
        this.prependListener(eventName, l, closure);
        return this;
    }
    _registerEvent(eventName, listener, closure) {
        if (this._ListenerLimitReached(eventName)) {
            console.log("Maximum listener reached, new Listener not added");
            return;
        }
        let listeners = this._events.get(eventName);
        if (!listeners) {
            listeners = [listener, closure];
            this._events.set(eventName, listeners);
            return;
        }
        listeners.push(listener, closure);
    }
    _createOnceListener(listener, eventName, closure) {
        let newListener = (...args) => {
            this.removeListener(eventName, listener);
            return listener(...args);
        };
        return newListener;
    }
    _ListenerLimitReached(eventName) {
        return this.listenerCount(eventName) === this.maxListeners ? true : false;
    }
}
EventEmitter.defaultMaxListeners = 10;
//# sourceMappingURL=Events.js.map