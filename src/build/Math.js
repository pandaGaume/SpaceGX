export class Scalar {
    static WithinEpsilon(a, b, epsilon = Scalar.EPSILON) {
        let num = a - b;
        return -epsilon <= num && num <= epsilon;
    }
    ;
}
Scalar.EPSILON = 1.401298E-45;
Scalar.Sign = function (value) {
    return value > 0 ? 1 : -1;
};
Scalar.Clamp = function (value, min, max) {
    if (min === void 0) {
        min = 0;
    }
    if (max === void 0) {
        max = 1;
    }
    return Math.min(max, Math.max(min, value));
};
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