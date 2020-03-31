import { AbstractRange } from "./Math";

export interface IUnitConverter {
    accept(u: Unit): boolean;
    convert(v: number, u: Unit): number;
}

export class Unit {
    public constructor(public name: string, public symbol: string, public value: number = 0, public converter: IUnitConverter = null) {
    }
}

const _defaultDecimalPrecision: number = 6;

export abstract class Quantity {
    public value: number;
    private _unit: Unit;

    static round(value: number, decimalPrecision: number = _defaultDecimalPrecision): number {
        var dp: number = decimalPrecision || _defaultDecimalPrecision;
        return Math.round(value * Math.pow(10, dp)) / Math.pow(10, dp);
    }

    public constructor(value: number | Quantity, unit?: Unit) {
        if (value instanceof Quantity) {
            var q: Quantity = value;
            this.value = q.value;
            this._unit = q._unit;
        } else {
            this.value = value;
            this._unit = unit;
        }
    }

    public get unit(): Unit {
        return this._unit;
    }

    public set unit(target: Unit) {
        if( this._unit !== target ) {
            this.tryConvert(target);
        }
    }

    public tryConvert(targetUnit: Unit): boolean {

        if (this._unit.converter) {
            if (this._unit.converter.accept(this.unit) === false) {
                return false;
            }
            this.value = this._unit.converter.convert(this.value, targetUnit);
            this._unit = targetUnit;
            return true;
        }

        if (targetUnit.value && targetUnit.symbol !== this._unit.symbol) {
            this.value *= (this._unit.value / targetUnit.value);
            this._unit = targetUnit;
            return true;
        }

        return false;
    }

    public clone(unit?: Unit): Quantity {
        var n: Quantity = new (<any>this.constructor(this.value, this._unit));
        if (unit) {
            n.tryConvert(unit);
        }
        return n;
    }

    public getValue(unit?: Unit):number {
        if(unit && unit !== this._unit) {
            if (this._unit.converter) {
                if (this._unit.converter.accept(unit)) {
                    return this._unit.converter.convert(this.value, unit);
                }
            }
            if (unit.value && unit.symbol !== this._unit.symbol) {
                return this.value * (this._unit.value / unit.value);
            }
        }
        return this.value;
    }

    public equals(v: Quantity): boolean {
        if (v._unit === this._unit) {
            return this.value === v.value;
        }
        return this.value === v.getValue(this._unit);
    }

    public subtract(v: Quantity): number {
        return this.value - ( (v._unit === this._unit) ? v.value : v.getValue(this._unit));
    }

    public add(v: Quantity): number {
        return this.value + ( (v._unit === this._unit) ? v.value : v.getValue(this._unit));
    }

    public UnitForSymbol(str: string): Unit {
        return null;
    }

    public tryParse(str: string): boolean {
        if (str) {
            var parts: string[] = str.split(" ");
            var v: number = parseFloat(str);
            if (v === NaN) {
                return false;
            }
            this.value = v;
            if (parts.length > 1) {
                this._unit = this.UnitForSymbol(parts[1]);
            } else {
                this._unit = null;
            }
            return true;
        }
        return false;
    }
}

export class QuantityRange<T extends Quantity> extends AbstractRange<T> {
    protected computeDelta(a:T,b:T): number {
        return b && a ? b.subtract(a) : 0;
    }
}


export class Timespan extends Quantity {

    public static ForParameter(value:Timespan|number, defaultValue:number, defaultUnit:Unit ):Timespan {
        return value ? new Timespan(value, defaultUnit) : new Timespan(defaultValue, defaultUnit);
    }

    public static Units :{[key:string]: Unit} = {
          ys: new Unit("yoctosecond", "ys", 10E-24)
        , zs: new Unit("zeptosecond", "zs", 10E-21)
        , as: new Unit("attosecond", "as", 10E-18)
        , fs: new Unit("femtosecond", "fs", 10E-15)
        , ps: new Unit("picosecond", "ps", 10E-12)
        , ns: new Unit("nanosecond", "ns", 10E-9)
        , tick: new Unit("tick", "ns", 10E-7)
        , mis: new Unit("microsecond", "mis", 10E-6)
        , ms: new Unit("millisecond", "ms", 10E-3)
        , s: new Unit("second", "s", 1)
        , Min: new Unit("minute", "m", 60)
        , Hour: new Unit("hour", "h", 3600)
        , Day: new Unit("day", "d", 86400)
        , Week: new Unit("week", "w", 86400 * 7)
        , Yr: new Unit("year", "y", 86400 * 365.25)
        , Cy: new Unit("century", "c", 86400 * 36525)
    };

    public static UnitForSymbol(str: string): Unit {
        return Timespan.Units[str] || null ;
    }
}

// tslint:disable: no-use-before-declare
class KConverter implements IUnitConverter {
    public accept(unit: Unit): boolean { return unit === Temperature.Units.c || unit === Temperature.Units.f; }
    public convert(value: number, unit: Unit): number {
        switch (unit) {
            case (Temperature.Units.c): return value - Temperature.Units.k.value;
            case (Temperature.Units.f): return (value - Temperature.Units.k.value) * 1.8 + 32.;
            default : return value ;
        }
    }
}

class CConverter implements IUnitConverter {
    public accept(unit: Unit): boolean { return unit === Temperature.Units.k || unit === Temperature.Units.f; }
    public convert(value: number, unit: Unit): number {
        switch (unit) {
            case (Temperature.Units.k): return value + Temperature.Units.k.value;
            case (Temperature.Units.f): return value * 1.8 + 32;
            default : return value ;
        }
    }
}

class FConverter implements IUnitConverter {
    public accept(unit: Unit): boolean { return unit === Temperature.Units.k || unit === Temperature.Units.c; }
    public convert(value: number, unit: Unit): number {
        switch (unit) {
            case (Temperature.Units.k): return ((value - 32) / 1.8) + Temperature.Units.k.value;
            case (Temperature.Units.c): return (value - 32) / 1.8;
            default : return value ;
        }
    }
}

export class Temperature extends Quantity {

    public static ForParameter(value:Temperature|number, defaultValue:number, defaultUnit:Unit ):Temperature {
        return value ? new Temperature(value, defaultUnit) : new Temperature(defaultValue, defaultUnit);
    }

    public static Units :{[key:string]: Unit} = {
        k: new Unit("kelvin", "k", -273.15, new KConverter())
        , c: new Unit("celsius", "c", 1, new CConverter())
        , f: new Unit("fahrenheit", "f", 33.8, new FConverter())
    };

    public static UnitForSymbol(str: string): Unit {
        return Temperature.Units[str] || null;
    }
}

export class Mass extends Quantity {

    public static ForParameter(value:Mass|number, defaultValue:number, defaultUnit:Unit ):Mass {
        return value ? new Mass(value, defaultUnit) : new Mass(defaultValue, defaultUnit);
    }

    public static Units :{[key:string]: Unit} = {
        u: new Unit("atomic mass unit", "u", 1.66E-27)
        , pm: new Unit("plank mass", "pm", 1E-8)
        , mg: new Unit("microgram", "µg", 1E-6)
        , g: new Unit("gram", "g", 1E-3)
        , pound: new Unit("pound", "lb", 0.45359237)
        , kg: new Unit("kilogram", "kg", 1)
        , T: new Unit("Ton", "T", 1000)
        , Sm: new Unit("solar mass", "Sm", 1.98855E30)
    };

    public static UnitForSymbol(str: string): Unit {
        return Mass.Units[str] || null;
    }
}

export class Power extends Quantity {

    public static ForParameter(value:Power|number, defaultValue:number, defaultUnit:Unit ):Power {
        return value ? new Power(value, defaultUnit) : new Power(defaultValue, defaultUnit);
    }
    public static Units:{[key:string]: Unit} = {
        watt: new Unit("watt", "w", 1),
        Kwatt: new Unit("Kwatt", "kw", 1000)
    };

    public static UnitForSymbol(str: string): Unit {
        return Power.Units[str] || null;
    }
}

export class Voltage extends Quantity {

    public static ForParameter(value:Voltage|number, defaultValue:number, defaultUnit:Unit ):Voltage {
        return value ? new Voltage(value, defaultUnit) : new Voltage(defaultValue, defaultUnit);
    }

    public static Units:{[key:string]: Unit} = {
        volt: new Unit("volt", "v", 1)
    };

    public static UnitForSymbol(str: string): Unit {
        return Voltage.Units[str] || null;
    }
}

export class Current extends Quantity {

    public static ForParameter(value:Current|number, defaultValue:number, defaultUnit:Unit ):Current {
        return value ? new Current(value, defaultUnit) : new Current(defaultValue, defaultUnit);
    }

    public static Units:{[key:string]: Unit} = {
        amp: new Unit("amp", "a", 1)
    };

    public static UnitForSymbol(str: string): Unit {
        return Current.Units[str] || null;
    }
}

export class Luminosity extends Quantity {

    public static ForParameter(value:Luminosity|number, defaultValue:number, defaultUnit:Unit ):Luminosity {
        return value ? new Luminosity(value, defaultUnit) : new Luminosity(defaultValue, defaultUnit);
    }

    public static Units:{[key:string]: Unit} = {
        watt: new Unit("watt", "w", 1)
        , Lsun: new Unit("solar luminosity", "Lsun", 3.846E26)
    };

    public static UnitForSymbol(str: string): Unit {
        return Luminosity.Units[str] || null;
    }
}

export class Volume extends Quantity {

    public static ForParameter(value:Volume|number, defaultValue:number, defaultUnit:Unit ):Volume {
        return value ? new Volume(value, defaultUnit) : new Volume(defaultValue, defaultUnit);
    }

    public static Units:{[key:string]: Unit} = {
        m3: new Unit("cubic meter", "m3", 1)
    };

    public static UnitForSymbol(str: string): Unit {
        return Volume.Units[str] || null;
    }
}

export class Angle extends Quantity {

    public static ForParameter(value:Angle|number, defaultValue:number, defaultUnit:Unit ):Angle {
        return value ? new Angle(value, defaultUnit) : new Angle(defaultValue, defaultUnit);
    }

    public static PIBY2 = Math.PI / 2.;
    public static PIBY4 = Math.PI / 4.;
    public static DE2RA = Math.PI / 180.;
    public static RA2DE = 180. / Math.PI;
    public static DE2RABY2 = Math.PI / 360.;

    public static Units:{[key:string]: Unit} = {
        d: new Unit("degre", "d", 1)
        , r: new Unit("radian", "r", Angle.RA2DE)
    };

    public static UnitForSymbol(str: string): Unit {
        return Angle.Units[str] || null;
    }
}

export class Distance extends Quantity {

    public static ForParameter(value:Distance|number, defaultValue:number, defaultUnit:Unit ):Distance {
        return value ? new Distance(value, defaultUnit) : new Distance(defaultValue, defaultUnit);
    }

    public static Units:{[key:string]: Unit} = {
        ym: new Unit("yoctometer", "ym", 10E-24)
        , zm: new Unit("zeptometer", "zm", 10E-21)
        , am: new Unit("attometer", "am", 10E-18)
        , fm: new Unit("femtometer", "fm", 10E-15)
        , pm: new Unit("picometer", "pm", 10E-12)
        , nm: new Unit("nanometer", "nm", 10E-9)
        , mim: new Unit("micrometer", "mim", 10E-6)
        , mm: new Unit("millimeter", "mm", 10E-3)
        , cm: new Unit("centimeter", "cm", 10E-2)
        , dm: new Unit("decimeter", "dm", 10E-1)
        , m: new Unit("meter", "m", 1)
        , Mi: new Unit("mile", "Mi", 1.609343502101154)
        , Nmi: new Unit("nmile", "Nmi", 1.8519994270282407189)
        , Dam: new Unit("decameter", "Dm", 10)
        , Hm: new Unit("hectometer", "Hm", 100)
        , Km: new Unit("kilometer", "Km", 1000)
        , Sr: new Unit("solar radius", "Sr", 6957E5)
        , Mm: new Unit("megameter", "Mn", 10E6)
        , Ls: new Unit("light second", "Ls", 299792458)
        , Gm: new Unit("gigameter", "Gm", 10E9)
        , Au: new Unit("astronomical unit", "Au", 1.4960E11)
        , Tm: new Unit("terameter", "Tm", 10E12)
        , Pm: new Unit("petameter", "Pm", 10E15)
        , Ly: new Unit("light year", "Ly", 9.4607E15)
        , Pc: new Unit("parsec", "Pc", 3.0857E16)
        , Em: new Unit("exameter", "Em", 10E18)
        , Zm: new Unit("zettameter", "Zm", 10E21)
        , Ym: new Unit("yottameter", "Ym", 10E24)
    };

    public UnitForSymbol(str: string): Unit {
        return Distance.Units[str] || null;
    }

}