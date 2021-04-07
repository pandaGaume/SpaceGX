import { IMeshExporter, IMesh } from "./../Geometry/Mesh";
export declare class BabylonMeshExporter implements IMeshExporter<BABYLON.Mesh> {
    private static UVKinds;
    exportMesh(shape: IMesh, target: BABYLON.Mesh): BABYLON.Mesh;
}
