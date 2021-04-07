import { Scalar } from './../Math';
export class MeshProcessor {
    static DivideEdge(shape, p0, p1, a, radius, map) {
        if (map) {
            var key = p0 + '_' + p1;
            var list = map[key];
            if (list) {
                return list;
            }
            var inversedkey = p1 + '_' + p0;
            list = map[inversedkey];
            if (list) {
                return list.slice().reverse();
            }
            list = MeshProcessor._divideEdge0(shape, p0, p1, a, radius);
            map[key] = list;
            return list;
        }
        return MeshProcessor._divideEdge0(shape, p0, p1, a, radius);
    }
    static _divideEdge0(shape, p0, p1, a, radius) {
        let list = [p0];
        if (a != 0 && p0 != p1) {
            if (a > 1) {
                let vertices = shape.vertices;
                let normals = shape.normals;
                let uvs = shape.uvs[0];
                let i0x = p0 * 3;
                let i0y = i0x + 1;
                let i0z = i0x + 2;
                let i1x = p1 * 3;
                let i1y = i1x + 1;
                let i1z = i1x + 2;
                let dx = (vertices[i1x] - vertices[i0x]) / a;
                let dy = (vertices[i1y] - vertices[i0y]) / a;
                let dz = (vertices[i1z] - vertices[i0z]) / a;
                let n = vertices.length / 3;
                for (let i = 1; i != a; i++) {
                    let x = vertices[i0x] + dx * i;
                    let y = vertices[i0y] + dy * i;
                    let z = vertices[i0z] + dz * i;
                    let l = Math.sqrt(x * x + y * y + z * z);
                    x /= l;
                    y /= l;
                    z /= l;
                    list.push(n++);
                    vertices.push(x * radius, y * radius, z * radius);
                    normals.push(x, y, z);
                    /*
                        vertices are NOT distributed evenly across longitude and latitude then we MUST compute the uv with formula
                        theta is from [-PI  ,PI  ]
                        phi   is from [-PI/2,PI/2]
                    */
                    let theta = Math.atan2(z, x) - Math.PI;
                    let phi = Math.acos(y);
                    let v = 1 - phi / Math.PI; // normalize 
                    v = Scalar.WithinEpsilon(v, 0) ? 0 : v; // avoid artifact
                    v = Scalar.WithinEpsilon(v, 1) ? 1 : v; // avoid artifact
                    let u = theta / (2 * Math.PI); // normalize
                    u = theta >= 0 ? u : 1 + u;
                    u = Scalar.WithinEpsilon(u, 0) ? 0 : u; // avoid artifact 
                    u = Scalar.WithinEpsilon(u, 1) ? 1 : u; // avoid artifact 
                    //avoid zip effect : 
                    let u1 = uvs[p0 * 2];
                    let u2 = uvs[p1 * 2];
                    let d1 = u1 - u;
                    let d2 = u2 - u;
                    if (Math.abs(d1) > .5 || Math.abs(d2) > .5) {
                        u += 1;
                    }
                    uvs.push(u, v);
                }
            }
            list.push(p1);
        }
        return list;
    }
}
//# sourceMappingURL=MeshProcessor.js.map