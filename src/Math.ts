
export type ParametricValue = number ;


export class Scalar {
    
    public static EPSILON = 1.401298E-45;
 
    public static WithinEpsilon(a:number, b:number, epsilon:number = Scalar.EPSILON  ) {
        let num = a - b;
        return -epsilon <= num && num <= epsilon;
    };

    public static Sign = function (value:number) {
        return value > 0 ? 1 : -1;
    };

    public static Clamp = function (value:number, min:number, max:number) {
        if (min === void 0) { min = 0; }
        if (max === void 0) { max = 1; }
        return Math.min(max, Math.max(min, value));
    }

} 


export abstract class AbstractRange<T> {

    private _min:T;
    private _max:T;
    private _d:number;

    public constructor(min: T, max:T = undefined) {
        this.min = min;
        this.max = max;
    }

    public get min(): T {
        return this._min;
    }

    public get max(): T {
        return this._max;
    }

    public set min(m:T) {
        this._min = m;
        this._d = undefined;
    }

    public set max(m:T) {
        this._max = m;
        this._d = undefined;
    }

    public get delta(): number {
        if( this._d === undefined) {
            this._d = this.computeDelta(this._min,this._max);
        }
        return this._d ;
    }

    protected abstract computeDelta(a:T,b:T): number ;
}

export class Range extends AbstractRange<number> {
    
    protected computeDelta(a:number,b:number): number {
        return a && b ? b-a : 0 ;
    }
}
