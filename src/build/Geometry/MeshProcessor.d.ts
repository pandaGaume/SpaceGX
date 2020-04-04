import { IMesh } from "./Mesh";
export declare class MeshProcessor {
    static DefaultSubdivisionLevel: number;
    static LoopSubdivision(shape: IMesh, level: number): IMesh;
    private static _pushSingle;
    private static _splitSegment;
    private static _computeEvens;
}
