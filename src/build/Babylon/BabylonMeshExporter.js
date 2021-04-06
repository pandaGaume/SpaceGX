export class BabylonMeshExporter {
    exportMesh(shape, target) {
        var normals = shape.normals || [];
        if (!normals || !normals.length) {
            BABYLON.VertexData.ComputeNormals(shape.vertices, shape.indices, normals);
        }
        target.setVerticesData(BABYLON.VertexBuffer.PositionKind, shape.vertices, true);
        target.setVerticesData(BABYLON.VertexBuffer.NormalKind, normals, true);
        if (shape.uvs && shape.uvs.length > 0) {
            for (let i = 0; i != shape.uvs.length && i < BabylonMeshExporter.UVKinds.length; i++) {
                if (shape.uvs[i]) {
                    target.setVerticesData(BabylonMeshExporter.UVKinds[i], shape.uvs[i], true);
                }
            }
        }
        target.setIndices(shape.indices);
        return target;
    }
}
BabylonMeshExporter.UVKinds = [BABYLON.VertexBuffer.UVKind, BABYLON.VertexBuffer.UV2Kind, BABYLON.VertexBuffer.UV3Kind, BABYLON.VertexBuffer.UV4Kind, BABYLON.VertexBuffer.UV5Kind, BABYLON.VertexBuffer.UV6Kind];
//# sourceMappingURL=BabylonMeshExporter.js.map