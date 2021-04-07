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

function  makeTextPlane(text, color, size, scene) {
    var dynamicTexture = new BABYLON.DynamicTexture("DynamicTexture", 50, scene, true);
    dynamicTexture.hasAlpha = true;
    dynamicTexture.drawText(text, 5, 40, "bold 36px Arial", color , "transparent", true);
    var plane = BABYLON.Mesh.CreatePlane("TextPlane", size, scene, true);
    plane.material = new BABYLON.StandardMaterial("TextPlaneMaterial", scene);
    plane.material.backFaceCulling = false;
    plane.material.specularColor = new BABYLON.Color3(0, 0, 0);
    plane.material.diffuseTexture = dynamicTexture;
    return plane;
};

function  makeOrientedTextPlane(text, color, height, width, origin, normal, scene) {
    var dynamicTexture = new BABYLON.DynamicTexture("DynamicTexture", 50, scene, true);
    dynamicTexture.hasAlpha = true;
    dynamicTexture.drawText(text, 5, 40, "bold 8px Arial", color , "transparent", true);
    var sourcePlane = BABYLON.Plane.FromPositionAndNormal(origin,normal);
    var plane = BABYLON.MeshBuilder.CreatePlane("plane", {height:height, width: width, sourcePlane: sourcePlane, sideOrientation: BABYLON.Mesh.DOUBLESIDE}, scene);
    plane.material = new BABYLON.StandardMaterial("TextPlaneMaterial", scene);
    plane.material.backFaceCulling = false;
    plane.material.specularColor = new BABYLON.Color3(0, 0, 0);
    plane.material.diffuseTexture = dynamicTexture;
    return plane;
};

function showWorldAxis(size,scene) {
    
    var axisX = BABYLON.Mesh.CreateLines("axisX", [ 
      BABYLON.Vector3.Zero(), new BABYLON.Vector3(size, 0, 0), new BABYLON.Vector3(size * 0.95, 0.05 * size, 0), 
      new BABYLON.Vector3(size, 0, 0), new BABYLON.Vector3(size * 0.95, -0.05 * size, 0)
      ], scene);
    axisX.color = new BABYLON.Color3(1, 0, 0);
    var xChar = makeTextPlane("X", "red", size / 10,scene);
    xChar.position = new BABYLON.Vector3(0.9 * size, -0.05 * size, 0);
    
    var axisY = BABYLON.Mesh.CreateLines("axisY", [
        BABYLON.Vector3.Zero(), new BABYLON.Vector3(0, size, 0), new BABYLON.Vector3( -0.05 * size, size * 0.95, 0), 
        new BABYLON.Vector3(0, size, 0), new BABYLON.Vector3( 0.05 * size, size * 0.95, 0)
        ], scene);
    axisY.color = new BABYLON.Color3(0, 1, 0);
    var yChar = makeTextPlane("Y", "green", size / 10,scene);
    yChar.position = new BABYLON.Vector3(0, 0.9 * size, -0.05 * size);
    
    var axisZ = BABYLON.Mesh.CreateLines("axisZ", [
        BABYLON.Vector3.Zero(), new BABYLON.Vector3(0, 0, size), new BABYLON.Vector3( 0 , -0.05 * size, size * 0.95),
        new BABYLON.Vector3(0, 0, size), new BABYLON.Vector3( 0, 0.05 * size, size * 0.95)
        ], scene);
    axisZ.color = new BABYLON.Color3(0, 0, 1);
    var zChar = makeTextPlane("Z", "blue", size / 10,scene);
    zChar.position = new BABYLON.Vector3(0, 0.05 * size, 0.9 * size);
};

function showVertexIndices(mesh, color, size, scene) {
 
    var positions = mesh.getVerticesData(BABYLON.VertexBuffer.PositionKind);
    for (var i = 0; i < positions.length; i += 3) {
        var position = BABYLON.Vector3.FromArray(positions, i);
        var normal = position.clone(); 
        var txt = makeOrientedTextPlane(i/3,color,size,size,position,normal,scene);
    }
}

function showUVIndices(mesh, color, size, scene) {
 
    var positions = mesh.getVerticesData(BABYLON.VertexBuffer.PositionKind);
    var uvs = mesh.getVerticesData(BABYLON.VertexBuffer.UVKind);
    for (var i = 0, j = 0; i < positions.length; i += 3, j+=2) {
        var position = BABYLON.Vector3.FromArray(positions, i);
        var normal = position.clone(); 

        var uv = BABYLON.Vector2.FromArray(uvs, j);
        var txt = i/3 < 5 ? "0" : i/3 < 10 ? "5" : "" + uv.x; 
        makeOrientedTextPlane(txt,color,size,size,position,normal,scene);
    }
}

function showTriangleIndices(mesh, color, size, scene) {
 
    var indices = mesh.getIndices();
    var positions = mesh.getVerticesData(BABYLON.VertexBuffer.PositionKind);
    var d = new BABYLON.Vector3(3,3,3);
    for (var i = 0; i < indices.length; i += 3) {

        var p0 = BABYLON.Vector3.FromArray(positions,  indices[i]   *3 );
        var p1 = BABYLON.Vector3.FromArray(positions,  indices[i+1] *3 );
        var p2 = BABYLON.Vector3.FromArray(positions,  indices[i+2] *3 );

        var position = p0.add(p1).add(p2).divide(d);
        var normal = position.clone(); 
 
        var txt = makeOrientedTextPlane(i/3,color,size,size,position,normal,scene);
    }
}

function createScene(canvas,engine){

    // Create the scene space
    var scene = new BABYLON.Scene(engine);
    // Add a camera to the scene and attach it to the canvas
    var camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 30, new BABYLON.Vector3(0,0,0), scene);
    camera.attachControl(canvas, true);

    // Add lights to the scene
    var light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);
    var light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(-1, 1, 0), scene);
 
    showWorldAxis(1,scene);

    // Add and manipulate meshes in the scene
    
    var polyhedre = SPACEGL.MeshFactory.GreateGeodesicGrid({},10,8);
    //var polyhedre = SPACEGL.MeshFactory.CreateIcosphere({},10,6);
    var isocahedre = new SPACEGL.BabylonMeshExporter().exportMesh( polyhedre, new BABYLON.Mesh("isocahedre",scene));
    //var isocahedre = new BABYLON.MeshBuilder.CreateSphere("isocahedre",{diameter  : 10},scene);
    isocahedre.material = new BABYLON.StandardMaterial("texture",scene);
    //isocahedre.material.wireframe = true;
    //isocahedre.material.diffuseTexture = new BABYLON.Texture("./../../../images/space/moons/moon/2k/moon_map.jpg", scene);
    //isocahedre.material.bumpTexture = new BABYLON.Texture("./../../../images/space/moons/moon/2k/moon_normal_map.jpg", scene);
    isocahedre.material.diffuseTexture = new BABYLON.Texture("./../../../images/space/planets/earth/2k/earth_map.jpg", scene);
    //isocahedre.enableEdgesRendering(.9999);    
    //isocahedre.edgesWidth = 8.0;
    //isocahedre.edgesColor = new BABYLON.Color4(1, 0, 0, 1);
    //showUVIndices(isocahedre,"black",1,scene);
    //showVertexIndices(isocahedre,"black",.3,scene);
    //showTriangleIndices(isocahedre,"black",.4,scene);
    //showNormals(isocahedre,.1,BABYLON.Color3.Blue(),scene);
    return scene;
};

