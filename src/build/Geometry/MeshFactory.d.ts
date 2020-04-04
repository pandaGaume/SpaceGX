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
    static CreateTetrahedron(shape: IMesh): IMesh;
    static CreateHexahedron(shape: IMesh): IMesh;
    static CreateOctahedron(shape: IMesh): IMesh;
    static CreateDodecahedron(shape: IMesh): IMesh;
    static CreateIcosahedron(shape: IMesh): IMesh;
    private static _createIcosphereBase;
    static CreateIcosphere(shape: IMesh, radius: number, subdivisionLevel?: number, pattern?: SubdivisionPattern): IMesh;
    private static _getParametricPoint;
}
