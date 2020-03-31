function showNormals(mesh, size, color, sc) {
    var normals = mesh.getVerticesData(BABYLON.VertexBuffer.NormalKind);
    var positions = mesh.getVerticesData(BABYLON.VertexBuffer.PositionKind);
    color = color || BABYLON.Color3.White();
    sc = sc || scene;
    size = size || 1;

    var lines = [];
    for (var i = 0; i < normals.length; i += 3) {
        var v1 = BABYLON.Vector3.FromArray(positions, i);
        var v2 = v1.add(BABYLON.Vector3.FromArray(normals, i).scaleInPlace(size));
        lines.push([v1.add(mesh.position), v2.add(mesh.position)]);
    }
    var normalLines = BABYLON.MeshBuilder.CreateLineSystem("normalLines", {lines: lines}, sc);
    normalLines.color = color;
    return normalLines;
}

createScene = function(canvas,engine) {

    // Create the scene space
    var scene = new BABYLON.Scene(engine);

    // Add a camera to the scene and attach it to the canvas
    var camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 5, new BABYLON.Vector3(0,0,0), scene);
    camera.attachControl(canvas, true);

    // Add lights to the scene
    var light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);
    //var light2 = new BABYLON.PointLight("light2", new BABYLON.Vector3(0, 1, -1), scene);

    // Add and manipulate meshes in the scene
    var s0 = SPACEGL.MeshFactory.CreateEllipsoid({}, 1.0, {rows:64});
    var s1 = SPACEGL.MeshFactory.Tessellate({},{level:5});

    var sphere0 = new SPACEGL.BabylonMeshExporter().exportMesh( s0, new BABYLON.Mesh("sphere0",scene));
    var sphere1 = new SPACEGL.BabylonMeshExporter().exportMesh( s1, new BABYLON.Mesh("sphere1",scene));
    var sphere2 = BABYLON.MeshBuilder.CreateSphere("sphere2", {diameter:2}, scene);
 
    sphere0.position.x = -2;
    sphere1.position.x =  2;

    showNormals(sphere0,.1,BABYLON.Color3.Blue(),scene);
    showNormals(sphere1,.1,BABYLON.Color3.Red(),scene);
    showNormals(sphere2,.1,BABYLON.Color3.Green(),scene);
    
    return scene;
};

