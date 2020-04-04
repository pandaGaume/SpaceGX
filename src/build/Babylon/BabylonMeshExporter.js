export class BabylonMeshExporter {
    exportMesh(shape, target) {
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
//# sourceMappingURL=BabylonMeshExporter.js.map