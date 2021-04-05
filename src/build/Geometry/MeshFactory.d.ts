import { IMesh } from "./Mesh";
export declare enum PlatonicSolids {
    tetrahedron = 0,
    hexaedron = 1,
    octahedron = 2,
    dodecahedron = 3,
    icosahedron = 4
}
export declare type SubdivisionPattern = 4 | 9;
export declare class MeshFactory {
    static DefaultRadius: number;
    static DefaultSubdivisionLevel: number;
    static DefaultLoopPattern: SubdivisionPattern;
    static DefaultSubdivisionLevelA: number;
    static CreateTetrahedron(shape: IMesh): IMesh;
    static CreateHexahedron(shape: IMesh): IMesh;
    static CreateOctahedron(shape: IMesh): IMesh;
    static CreateDodecahedron(shape: IMesh): IMesh;
    static CreateIcosahedron(shape: IMesh): IMesh;
    private static _createIcosphereBase;
    static GreateGeodesicGrid(shape: IMesh, radius: number, a?: number): IMesh;
    private static _pushFace;
    private static _divideEdge;
    private static _divideEdge0;
    static CreateIcosphere(shape: IMesh, radius: number, subdivisionLevel?: number, pattern?: SubdivisionPattern): IMesh;
    private static _getParametricPoint;
}
