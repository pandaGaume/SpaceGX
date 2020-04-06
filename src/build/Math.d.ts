export declare type ParametricValue = number;
export declare class Scalar {
    static EPSILON: number;
    static WithinEpsilon(a: number, b: number, epsilon?: number): boolean;
    static Sign: (value: number) => 1 | -1;
    static Clamp: (value: number, min: number, max: number) => number;
}
export declare abstract class AbstractRange<T> {
    private _min;
    private _max;
    private _d;
    constructor(min: T, max?: T);
    get min(): T;
    get max(): T;
    set min(m: T);
    set max(m: T);
    get delta(): number;
    protected abstract computeDelta(a: T, b: T): number;
}
export declare class Range extends AbstractRange<number> {
    protected computeDelta(a: number, b: number): number;
}
