import { IMesh } from "./Mesh";
export declare enum PlatonicSolids {
    tetrahedron = 0,
    hexaedron = 1,
    octahedron = 2,
    dodecahedron = 3,
    icosahedron = 4
}
export declare class MeshFactory {
    static DefaultRadius: number;
    static DefaultSubdivisionLevelA: number;
    static CreateTetrahedron(shape: IMesh): IMesh;
    static CreateHexahedron(shape: IMesh): IMesh;
    static CreateOctahedron(shape: IMesh): IMesh;
    static CreateDodecahedron(shape: IMesh): IMesh;
    static CreateIcosahedron(shape: IMesh): IMesh;
    private static _createIcosphereBase;
    static GreateGeodesicGrid(shape: IMesh, radius: number, a?: number): IMesh;
}
