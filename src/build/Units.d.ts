import { AbstractRange } from "./Math";
export interface IUnitConverter {
    accept(u: Unit): boolean;
    convert(v: number, u: Unit): number;
}
export declare class Unit {
    name: string;
    symbol: string;
    value: number;
    converter: IUnitConverter;
    constructor(name: string, symbol: string, value?: number, converter?: IUnitConverter);
}
export declare abstract class Quantity {
    value: number;
    private _unit;
    static round(value: number, decimalPrecision?: number): number;
    constructor(value: number | Quantity, unit?: Unit);
    get unit(): Unit;
    set unit(target: Unit);
    tryConvert(targetUnit: Unit): boolean;
    clone(unit?: Unit): Quantity;
    getValue(unit?: Unit): number;
    equals(v: Quantity): boolean;
    subtract(v: Quantity): number;
    add(v: Quantity): number;
    UnitForSymbol(str: string): Unit;
    tryParse(str: string): boolean;
}
export declare class QuantityRange<T extends Quantity> extends AbstractRange<T> {
    protected computeDelta(a: T, b: T): number;
}
export declare class Timespan extends Quantity {
    static ForParameter(value: Timespan | number, defaultValue: number, defaultUnit: Unit): Timespan;
    static Units: {
        [key: string]: Unit;
    };
    static UnitForSymbol(str: string): Unit;
}
export declare class Temperature extends Quantity {
    static ForParameter(value: Temperature | number, defaultValue: number, defaultUnit: Unit): Temperature;
    static Units: {
        [key: string]: Unit;
    };
    static UnitForSymbol(str: string): Unit;
}
export declare class Mass extends Quantity {
    static ForParameter(value: Mass | number, defaultValue: number, defaultUnit: Unit): Mass;
    static Units: {
        [key: string]: Unit;
    };
    static UnitForSymbol(str: string): Unit;
}
export declare class Power extends Quantity {
    static ForParameter(value: Power | number, defaultValue: number, defaultUnit: Unit): Power;
    static Units: {
        [key: string]: Unit;
    };
    static UnitForSymbol(str: string): Unit;
}
export declare class Voltage extends Quantity {
    static ForParameter(value: Voltage | number, defaultValue: number, defaultUnit: Unit): Voltage;
    static Units: {
        [key: string]: Unit;
    };
    static UnitForSymbol(str: string): Unit;
}
export declare class Current extends Quantity {
    static ForParameter(value: Current | number, defaultValue: number, defaultUnit: Unit): Current;
    static Units: {
        [key: string]: Unit;
    };
    static UnitForSymbol(str: string): Unit;
}
export declare class Luminosity extends Quantity {
    static ForParameter(value: Luminosity | number, defaultValue: number, defaultUnit: Unit): Luminosity;
    static Units: {
        [key: string]: Unit;
    };
    static UnitForSymbol(str: string): Unit;
}
export declare class Volume extends Quantity {
    static ForParameter(value: Volume | number, defaultValue: number, defaultUnit: Unit): Volume;
    static Units: {
        [key: string]: Unit;
    };
    static UnitForSymbol(str: string): Unit;
}
export declare class Angle extends Quantity {
    static ForParameter(value: Angle | number, defaultValue: number, defaultUnit: Unit): Angle;
    static PIBY2: number;
    static PIBY4: number;
    static DE2RA: number;
    static RA2DE: number;
    static DE2RABY2: number;
    static Units: {
        [key: string]: Unit;
    };
    static UnitForSymbol(str: string): Unit;
}
export declare class Distance extends Quantity {
    static ForParameter(value: Distance | number, defaultValue: number, defaultUnit: Unit): Distance;
    static Units: {
        [key: string]: Unit;
    };
    UnitForSymbol(str: string): Unit;
}
