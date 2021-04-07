import { IMesh } from "./Mesh";
export declare class MeshProcessor {
    static DivideEdge(shape: IMesh, p0: number, p1: number, a: number, radius: number, map: {
        [key in string]: number[];
    }): number[];
    private static _divideEdge0;
}
