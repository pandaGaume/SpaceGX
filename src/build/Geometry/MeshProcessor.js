export class MeshProcessor {
    static LoopSubdivision(shape, level) {
        level = level === undefined ? MeshProcessor.DefaultSubdivisionLevel : Math.abs(level);
        for (let i = 0; i != level; i++) {
            let oddcache = {};
            let newFaces = [];
            let n = shape.indices.length;
            let v = shape.vertices;
            let l = v.length / 3;
            let evencache = [...Array(l)].map(a => []);
            /* compute odd */
            for (let f = 0; f !== n;) {
                let tmp = f;
                let p0 = shape.indices[f++];
                let p1 = shape.indices[f++];
                let p2 = shape.indices[f++];
                /* 0
                  / \
                 /   \
                a --- c
               / \   / \
              /   \ /   \
             1 --- b --- 2 */
                let a = MeshProcessor._splitSegment(shape, tmp, p0, p1, p2, oddcache);
                let b = MeshProcessor._splitSegment(shape, tmp, p1, p2, p0, oddcache);
                let c = MeshProcessor._splitSegment(shape, tmp, p2, p0, p1, oddcache);
                newFaces.push(p0, a, c, a, p1, b, a, b, c, c, b, p2);
                /* prepare even cache */
                MeshProcessor._pushSingle(evencache[p0], p1, p2);
                MeshProcessor._pushSingle(evencache[p1], p0, p2);
                MeshProcessor._pushSingle(evencache[p2], p0, p1);
            }
            /* compute remain odd on bounds bounds
                         0
                        / \
                       /   \
                      /     \
                    1/2--X--1/2 */
            let bounds = Object.keys(oddcache).map(key => oddcache[key]);
            for (var j = 0; j != bounds.length; j++) {
                let odd = bounds[j];
                let i = odd[0] * 3;
                let a = odd[1] * 3;
                let b = odd[2] * 3;
                v[i++] = (v[a++] + v[b++]) / 2;
                v[i++] = (v[a++] + v[b++]) / 2;
                v[i] = (v[a] + v[b]) / 2;
            }
            /* compute even */
            MeshProcessor._computeEvens(shape, evencache);
            shape.indices = newFaces;
        }
        return shape;
    }
    static _pushSingle(array, ...params) {
        for (let i = 0; i != params.length; i++) {
            let value = params[i];
            let found = false;
            if (array.length) {
                let j = 0;
                do {
                    found = array[j] === value;
                } while (!found && ++j < array.length);
            }
            if (!found) {
                array.push(value);
            }
        }
    }
    ;
    static _splitSegment(shape, fi, a, b, c0, map) {
        var key = (a < b ? "" + a + "-" + b : "" + b + "-" + a);
        var cached = map[key];
        let v = shape.vertices;
        if (cached) {
            /* compute odd with 2 faces :
                        1/8
                        / \
                       /   \
                      /     \
                    3/8--X--3/8
                     \      /
                      \    /
                       \  /
                        1/8 */
            let i = cached[0] * 3;
            let a = cached[1] * 3;
            let b = cached[2] * 3;
            let c = cached[3] * 3;
            let d = c0 * 3;
            let k3 = 3 / 8;
            let k1 = 1 / 8;
            v[i++] = k3 * (v[a++] + v[b++]) + k1 * (v[c++] + v[d++]);
            v[i++] = k3 * (v[a++] + v[b++]) + k1 * (v[c++] + v[d++]);
            v[i] = k3 * (v[a] + v[b]) + k1 * (v[c] + v[d]);
            delete map[key]; /* avoid too many key */
            return cached[0];
        }
        let faces = shape.indices;
        let i = shape.vertices.length / 3;
        v.push(0, 0, 0); /* reserve the slot */
        map[key] = [i, a, b, c0];
        return i;
    }
    static _computeEvens(shape, evencache) {
        for (let i = 0; i != evencache.length; i++) {
            /* get surrounding vertices */
            let connected = evencache[i];
            let a = i * 3;
            let n = connected.length;
            let v = shape.vertices;
            let u = 0;
            /* Joe Warren proposed using the simplified weights for u (1995):
                        u-------u
                       / \     / \
                      /   \   /   \
                     /     \ /     \
                    u-----1-n*u-----u
                     \     / \     /
                      \   /   \   /
                       \ /     \ /
                        u-------u */
            if (n > 3) {
                u = 3 / (8 * n);
            }
            else if (n === 3) {
                u = 3 / 16;
            }
            else if (n === 2) {
                /* this append when face are not triangle
                   3/4--X--3/4 */
                let k = 3 / 4;
                let p0 = connected[0] * 3;
                let p1 = connected[1] * 3;
                v[a] = v[a++] * k + (v[p0++] + v[p1++]) / 2;
                v[a] = v[a++] * k + (v[p0++] + v[p1++]) / 2;
                v[a] = v[a] * k + (v[p0] + v[p1]) / 2;
                return;
            }
            else {
                /* nothing to do with degenerated mesh */
                return;
            }
            let k = 1 - n * u;
            v[a] = v[a++] * k + connected.map(a => v[a * 3]).reduce((a, b) => a + b, 0) * u;
            v[a] = v[a++] * k + connected.map(a => v[a * 3 + 1]).reduce((a, b) => a + b, 0) * u;
            v[a] = v[a] * k + connected.map(a => v[a * 3 + 2]).reduce((a, b) => a + b, 0) * u;
        }
    }
}
MeshProcessor.DefaultSubdivisionLevel = 4;
//# sourceMappingURL=MeshProcessor.js.map