export var PlatonicSolids;
(function (PlatonicSolids) {
    PlatonicSolids[PlatonicSolids["tetrahedron"] = 0] = "tetrahedron";
    PlatonicSolids[PlatonicSolids["hexaedron"] = 1] = "hexaedron";
    PlatonicSolids[PlatonicSolids["octahedron"] = 2] = "octahedron";
    PlatonicSolids[PlatonicSolids["dodecahedron"] = 3] = "dodecahedron";
    PlatonicSolids[PlatonicSolids["icosahedron"] = 4] = "icosahedron";
})(PlatonicSolids || (PlatonicSolids = {}));
export class MeshFactory {
    /* The following mesh is based on the treatment in Geometric Tools for Computer Graphics (Morgan Kaufmann 2003) chapter 9.3.6 p 346-350
       The following subsections provide vertex-face tables for the Platonic solids. The
       polyhedron is centered at the origin and the vertices are all unit length. The face
       connectivity is provided as a list of indices into the vertex array. The vertices of a face
       are counterclockwise ordered as you look at the face from outside the polyhedron.
       The faces for the tetrahedron, octahedron, and icosahedron are already triangles. The
       faces for the hexahedron are squares, and the faces for the dodecahedron are pentagons.
       In these two cases, a vertex-triangle table is also provided for those renderers
       that support only triangle faces.*/
    static CreateTetrahedron(shape) {
        let a = Math.sqrt(2) / 3;
        let b = Math.sqrt(6) / 3;
        let c = -1 / 3;
        shape.vertices = [0, 1, 0, b, c, -a, 0, c, 2 * a, -b, c, -a];
        shape.indices = [0, 1, 2, 0, 2, 3, 0, 3, 1, 1, 3, 2];
        return shape;
    }
    static CreateHexahedron(shape) {
        let i = 1 / Math.sqrt(3);
        shape.vertices = [-i, -i, -i, -i, -i, i, i, -i, i, i, -i, -i, -i, i, -i, -i, i, i, i, i, i, i, i, -i];
        shape.indices = [0, 3, 2, 0, 2, 1, 0, 1, 5, 0, 5, 4, 0, 4, 7, 0, 7, 3, 6, 5, 1, 6, 1, 2, 6, 2, 3, 6, 3, 7, 6, 7, 4, 6, 4, 5];
        return shape;
    }
    static CreateOctahedron(shape) {
        shape.vertices = [0, 0, 1, 0, 0, -1, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0];
        shape.indices = [4, 0, 2, 4, 2, 1, 4, 1, 3, 4, 3, 0, 5, 2, 0, 5, 1, 2, 5, 3, 1, 5, 0, 3];
        return shape;
    }
    static CreateDodecahedron(shape) {
        let a = 1 / Math.sqrt(3);
        let b = Math.sqrt((3 - Math.sqrt(5)) / 6);
        let c = Math.sqrt((3 + Math.sqrt(5)) / 6);
        shape.vertices = [a, a, a, a, -a, a, -a, a, a, -a, -a, a, a, a, -a, a, -a, -a, -a, a, -a, -a, -a, -a, c, 0, b, c, 0, -b, -c, 0, b, -c, 0, -b, 0, b, c, 0, -b, c, 0, b, -c, 0, -b, -c, b, c, 0, -b, c, 0, b, -c, 0, -b, -c, 0];
        shape.indices = [0, 8, 9, 0, 12, 13, 0, 16, 17, 8, 1, 18, 12, 2, 10, 16, 4, 14, 9, 5, 15, 6, 11, 10, 3, 19, 18, 7, 15, 5, 7, 11, 6, 7, 19, 3, 0, 9, 4, 0, 13, 1, 0, 17, 2, 8, 18, 5, 12, 10, 3,
            16, 14, 6, 9, 15, 14, 6, 10, 2, 3, 18, 1, 7, 5, 18, 7, 6, 14, 7, 3, 10, 0, 4, 16, 0, 1, 8, 0, 2, 12, 9, 5, 9, 12, 3, 13, 16, 6, 17, 9, 14, 4, 6, 2, 17, 3, 1, 13, 7, 18, 19, 7, 14, 15, 7, 10, 11];
        return shape;
    }
    static CreateIcosahedron(shape) {
        let a = (1 + Math.sqrt(5)) / 2;
        let b = Math.sqrt(1 + a * a);
        let t = a / b;
        let i = 1 / b;
        shape.vertices = [i, 0, t, i, 0, -t, -i, 0, t, -i, 0, -t, 0, t, i, 0, -t, i, 0, t, -i, 0, -t, -i, t, i, 0, -t, i, 0, t, -i, 0, -t, -i, 0];
        shape.indices = [4, 8, 0, 10, 5, 0, 9, 4, 2, 5, 11, 2, 8, 6, 1, 7, 10, 1, 6, 9, 3, 11, 7, 3, 8, 10, 0, 10, 8, 1, 11, 9, 2, 3, 9, 11, 0, 2, 4, 2, 0, 5, 3, 1, 6, 1, 3, 7, 4, 6, 8, 6, 4, 9, 7, 5, 10, 5, 7, 11];
        return shape;
    }
    /* create dedicated icosahedron on left handed coordinate, Y up, with pole vertice (North and South) on the Y axis.*/
    static _createIcosphereBase(shape, radius) {
        // constants
        const H_ANGLE = (Math.PI / 180) * 72; // 72 degree = 360 / 5
        const V_ANGLE = Math.atan(.5); // elevation = 26.565 degree
        const y = radius * Math.sin(V_ANGLE);
        const xz = radius * Math.cos(V_ANGLE);
        let v = []; // array of 12 vertices (x,y,z)
        var hAngle1 = 0; // start from 0 deg at 1st row
        var hAngle2 = H_ANGLE / 2; // start from +36 deg at 2nd row
        /* the first top vertex at (0, r, 0).
           we use 5 vertices in order to isolate uv's coordinate for quad image texture */
        for (var i = 0; i < 5; i++) {
            v.push(0, radius, 0);
        }
        /* the last five bottom vertex at (0, -r, 0) */
        for (; i < 10; i++) {
            v.push(0, -radius, 0);
        }
        /* compute 12 vertices at 1st and 2nd rows */
        for (; i < 16; i++) {
            /* rows 1 and 2 indexes */
            let i1 = i * 3;
            let i2 = i1 + 18;
            let s = i * H_ANGLE;
            let h1 = hAngle1 + s;
            let h2 = hAngle2 + s;
            /*x*/
            v[i1++] = xz * Math.cos(h1);
            v[i2++] = xz * Math.cos(h2);
            /*y*/
            v[i1++] = y;
            v[i2++] = -y;
            /*z*/
            v[i1] = xz * Math.sin(h1);
            v[i2] = xz * Math.sin(h2);
        }
        shape.vertices = v;
        shape.indices = [0, 10, 11, 1, 11, 12, 2, 12, 13, 3, 13, 14, 4, 14, 15,
            10, 16, 11, 11, 16, 17, 11, 17, 12, 12, 17, 18, 12, 18, 13, 13, 18, 19, 13, 19, 14, 14, 19, 20, 14, 20, 15, 15, 20, 21,
            16, 5, 17, 17, 6, 18, 18, 7, 19, 19, 8, 20, 20, 9, 21];
        return shape;
    }
    /*
        icosphere is a particular simple tesselation method where we project subdivided points to the sphere surface.
        the we DO NOT relay on memory/compute intensive subdivision method.
        TODO : because of incremental error propagation, we might consider to find analytic approach for vertex coordinate generation instead as parametric subdivision methods.
    */
    static CreateIcosphere(shape, radius, subdivisionLevel = MeshFactory.DefaultSubdivisionLevel, pattern = MeshFactory.DefaultLoopPattern) {
        radius = Math.abs(radius || MeshFactory.DefaultRadius);
        shape = shape = MeshFactory._createIcosphereBase(shape || {}, radius);
        subdivisionLevel = subdivisionLevel === undefined ? MeshFactory.DefaultSubdivisionLevel : Math.abs(subdivisionLevel);
        pattern = pattern == undefined ? MeshFactory.DefaultLoopPattern : pattern != 4 && pattern != 9 ? MeshFactory.DefaultLoopPattern : pattern; /* ensure patternn is 4 OR 9 */
        for (let i = 0; i != subdivisionLevel; i++) {
            let map = {};
            let newFaces = [];
            let n = shape.indices.length;
            for (let f = 0; f !== n;) {
                let p0 = shape.indices[f++];
                let p1 = shape.indices[f++];
                let p2 = shape.indices[f++];
                switch (pattern) {
                    case (9):
                        {
                            /* 0
                              / \
                             /   \
                            a --- g
                           / \   / \
                          /   \ /   \
                         d --- c --- f
                        / \   / \   / \
                       /   \ /   \ /   \
                      1 --- e --- b --- 2 */
                            let t13 = 1.0 / 3;
                            let t23 = 2.0 / 3;
                            let t12 = .5;
                            let a = MeshFactory._getParametricPoint(shape, p0, p1, t13, radius, map);
                            let b = MeshFactory._getParametricPoint(shape, p1, p2, t23, radius, map);
                            let c = MeshFactory._getParametricPoint(shape, a, b, t12, radius, map);
                            let d = MeshFactory._getParametricPoint(shape, p0, p1, t23, radius, map);
                            let e = MeshFactory._getParametricPoint(shape, p1, p2, t13, radius, map);
                            let f = MeshFactory._getParametricPoint(shape, p2, p0, t13, radius, map);
                            let g = MeshFactory._getParametricPoint(shape, p2, p0, t23, radius, map);
                            newFaces.push(p0, a, g, a, d, c, a, c, g, g, c, f, d, p1, e, d, e, c, c, e, b, c, b, f, f, b, p2);
                            break;
                        }
                    case (4):
                    default: {
                        /* 0
                          / \
                         /   \
                        a --- c
                       / \   / \
                      /   \ /   \
                     1 --- b --- 2 */
                        let t = 0.5;
                        let a = MeshFactory._getParametricPoint(shape, p0, p1, t, radius, map);
                        let b = MeshFactory._getParametricPoint(shape, p1, p2, t, radius, map);
                        let c = MeshFactory._getParametricPoint(shape, p2, p0, t, radius, map);
                        newFaces.push(p0, a, c, a, p1, b, a, b, c, c, b, p2);
                    }
                }
            }
            shape.indices = newFaces;
        }
        return shape;
    }
    static _getParametricPoint(shape, p1, p2, t, radius, map) {
        var key = (p1 < p2 ? "" + p1 + "-" + p2 : "" + p2 + "-" + p1) + "_" + t;
        var i = map[key];
        if (i) {
            delete map[key]; /* avoid too many key */
            return i;
        }
        let i1 = p1 * 3;
        let i2 = p2 * 3;
        /* compute odd using parametric segment only */
        let x = shape.vertices[i1] + (shape.vertices[i2++] - shape.vertices[i1++]) * t;
        let y = shape.vertices[i1] + (shape.vertices[i2++] - shape.vertices[i1++]) * t;
        let z = shape.vertices[i1] + (shape.vertices[i2] - shape.vertices[i1]) * t;
        let l = Math.sqrt(x * x + y * y + z * z) / radius;
        i = shape.vertices.length / 3;
        shape.vertices.push(x / l, y / l, z / l);
        map[key] = i;
        return i;
    }
}
MeshFactory.DefaultRadius = 1.0;
MeshFactory.DefaultSubdivisionLevel = 4;
MeshFactory.DefaultLoopPattern = 4;
//# sourceMappingURL=MeshFactory.js.map