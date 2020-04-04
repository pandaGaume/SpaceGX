import { MKLuminosity } from './SpectralClass';
import { Temperature } from './../Units';
import { RGBAColor } from './../Color';
export declare class StarColor {
    private static ColorTable;
    private static _buildIndex;
    private static _SelectByLuminosity;
    private static Matrix;
    private static _lookup;
    private static _lookupIndexes;
    static lookupRgb(luminosity: MKLuminosity, temperature: Temperature | number): RGBAColor;
}
