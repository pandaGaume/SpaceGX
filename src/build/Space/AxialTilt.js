import { Angle, Timespan } from "./../Units";
export class AxialTilt {
    constructor(obliquity, period) {
        this._obliquity = new Angle(obliquity, AxialTilt.defaultAngleUnit);
        this._period = new Timespan(period, AxialTilt.defaultPeriodUnit);
    }
    get obliquity() {
        return this._obliquity;
    }
    get period() {
        return this._period;
    }
    get meanAngularSpeed() {
        return 360.0 / this._period.value;
    }
}
AxialTilt.defaultAngleUnit = Angle.Units.d;
AxialTilt.defaultPeriodUnit = Timespan.Units.s;
//# sourceMappingURL=AxialTilt.js.map