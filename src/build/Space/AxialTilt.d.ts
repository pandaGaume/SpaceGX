import { Unit, Angle, Timespan } from "./../Units";
export declare class AxialTilt {
    static defaultAngleUnit: Unit;
    static defaultPeriodUnit: Unit;
    private _obliquity;
    private _period;
    constructor(obliquity: Angle | number, period: Timespan | number);
    get obliquity(): Angle;
    get period(): Timespan;
    get meanAngularSpeed(): number;
}
