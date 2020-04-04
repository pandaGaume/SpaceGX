export class AbstractRange {
    constructor(min, max = undefined) {
        this.min = min;
        this.max = max;
    }
    get min() {
        return this._min;
    }
    get max() {
        return this._max;
    }
    set min(m) {
        this._min = m;
        this._d = undefined;
    }
    set max(m) {
        this._max = m;
        this._d = undefined;
    }
    get delta() {
        if (this._d === undefined) {
            this._d = this.computeDelta(this._min, this._max);
        }
        return this._d;
    }
}
export class Range extends AbstractRange {
    computeDelta(a, b) {
        return a && b ? b - a : 0;
    }
}
//# sourceMappingURL=Math.js.map