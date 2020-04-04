import { ParametricValue } from "./Math";
export declare class RGBAColor {
    r: number;
    g: number;
    b: number;
    a: number;
    constructor(r: number, g: number, b: number, a?: number);
    toHSL(): HSLColor;
    interpolate(color: RGBAColor, t: ParametricValue, keepAlpha?: boolean): RGBAColor;
    interpolateInPlace(color: RGBAColor, t: ParametricValue, keepAlpha?: boolean): RGBAColor;
}
export declare class HSLColor {
    h: number;
    s: number;
    l: number;
    private static hue2rgb;
    constructor(h: number, s: number, l: number);
    toRGB(): RGBAColor;
}
