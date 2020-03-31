import {Unit,Angle,Timespan} from "./../Units"

export class AxialTilt {

        public static defaultAngleUnit:Unit = Angle.Units.d ;
        public static defaultPeriodUnit:Unit = Timespan.Units.s ;

        private _obliquity:Angle;
        private _period:Timespan;

        public constructor(obliquity:Angle|number, period:Timespan|number) {
            this._obliquity = new Angle(obliquity,AxialTilt.defaultAngleUnit);
            this._period = new Timespan(period,AxialTilt.defaultPeriodUnit);
        }

        public get obliquity(): Angle {
            return this._obliquity;
        }

        public get period(): Timespan {
            return this._period;
        }

        public get meanAngularSpeed(): number {
            return 360.0 / this._period.value;
        }
}