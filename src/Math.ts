
export type ParametricValue = number ;

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
