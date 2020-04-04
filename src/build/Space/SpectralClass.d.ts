import { Temperature, Distance, Mass, Luminosity, QuantityRange as QR } from "./../Units";
export declare type MKMajor = "O" | "B" | "A" | "F" | "G" | "K" | "M";
export declare type MKMinor = number;
export declare type MKLuminosity = "Ia+" | "I" | "II" | "III" | "IV" | "V" | "sd" | "D";
export declare type MorganKeenanName = string;
export declare class MorganKeenanClass {
    private static pattern;
    static LuminosityNames: MKLuminosity[];
    static Parse(str: string): MorganKeenanClass;
    _major: MKMajor;
    _minor: MKMinor;
    _lum: MKLuminosity;
    constructor(major: MKMajor, minor: MKMinor, luminosity?: MKLuminosity);
    get major(): MKMajor;
    get minor(): MKMinor;
    get luminosity(): MKLuminosity;
    get fullName(): string;
}
export declare class SpectralClass {
    name: MKMajor;
    effectiveTemperature: QR<Temperature>;
    VegaRelativeColorLabel: string;
    chromacityLabel: string;
    mass: QR<Mass>;
    radius: QR<Distance>;
    luminosity: QR<Luminosity>;
    hydrogenLine: string;
    fractionOfStars: number;
    static O: SpectralClass;
    static B: SpectralClass;
    static A: SpectralClass;
    static F: SpectralClass;
    static G: SpectralClass;
    static K: SpectralClass;
    static M: SpectralClass;
    static HarwardClassificationIndex: {
        [k in MKMajor]: SpectralClass;
    };
    static HarwardClassification: SpectralClass[];
    static TemperatureRange: QR<Temperature>;
    static ClassFromTemperature(temperature: Temperature | number): SpectralClass;
    constructor(name: MKMajor, effectiveTemperature: QR<Temperature>, VegaRelativeColorLabel: string, chromacityLabel: string, mass: QR<Mass>, radius: QR<Distance>, luminosity: QR<Luminosity>, hydrogenLine: string, fractionOfStars: number);
}
