export interface IMesh {
    vertices: Array<number>;
    indices: Array<number>;
    uvs?: Array<number>;
    normals?: Array<number>;
}
export interface IMeshExporter<T> {
    exportMesh(mesh: IMesh, target: T): T;
}
