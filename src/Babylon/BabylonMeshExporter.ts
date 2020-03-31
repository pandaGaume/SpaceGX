import { IMeshExporter, IMesh } from "./../Geometry/Mesh";

export class BabylonMeshExporter implements IMeshExporter<BABYLON.Mesh> {

    public exportMesh(shape:IMesh, target:BABYLON.Mesh):BABYLON.Mesh {

        var normals = shape.normals || [];
        if (!normals || !normals.length) {
            BABYLON.VertexData.ComputeNormals(shape.vertices, shape.indices, normals);
        }
        target.setVerticesData(BABYLON.VertexBuffer.PositionKind, shape.vertices, true);
        target.setVerticesData(BABYLON.VertexBuffer.NormalKind, normals, true);
        target.setVerticesData(BABYLON.VertexBuffer.UVKind, shape.uvs, true);
        target.setIndices(shape.indices);
        return target;
    }
}