import { IMesh } from "./Mesh";

export interface ITessellation {

}

export class QuadrilateralTessellation implements ITessellation {
    public static DefaultSlice:number = 36;

    rows:number;
    columns?:number;
}

export enum PlatonicSolids {
    tetrahedron,
    hexaedron,
    octahedron,
    dodecahedron,
    icosahedron
}

export enum SubdivisionMethod {
    CatmullClark,
    DooSabin,
    Loop4
}

export class PolyhedronTessellation implements ITessellation {
    public static DefaultMethod:SubdivisionMethod = SubdivisionMethod.Loop4;
    public static DefaultBase:PlatonicSolids = PlatonicSolids.icosahedron;
    public static DefaultLevel:number = 4;

    level:number;
    base?:PlatonicSolids;
    method?:SubdivisionMethod;
}

export interface IGeometryOption {

}

export interface IEllipsoidOptions extends IGeometryOption {
    rx:number;
    ry?:number;
    rz?:number;
}

export class MeshFactory {

    public static DefaultRadius:number = 1.0;


    /* The following mesh is based on the treatment in Geometric Tools for Computer Graphics (Morgan Kaufmann 2003) chapter 9.3.6 p 346-350
       The following subsections provide vertex-face tables for the Platonic solids. The
       polyhedron is centered at the origin and the vertices are all unit length. The face
       connectivity is provided as a list of indices into the vertex array. The vertices of a face
       are counterclockwise ordered as you look at the face from outside the polyhedron.
       The faces for the tetrahedron, octahedron, and icosahedron are already triangles. The
       faces for the hexahedron are squares, and the faces for the dodecahedron are pentagons.
       In these two cases, a vertex-triangle table is also provided for those renderers
       that support only triangle faces.*/

    public static CreateTetrahedron(shape: IMesh): IMesh{

        let a = Math.sqrt(2)/3;
        let b = Math.sqrt(6)/3;
        let c = -1/3;
        
        shape.vertices = [0,0,1, -a,b,c, 2*a,0,c, -a,-b,c];
        shape.indices =[0,1,2,0,2,3,0,3,1,1,3,2];
        return shape;
    }    
 
    public static CreateHexahedron(shape: IMesh): IMesh{

        let i:number=1/Math.sqrt(3);

        shape.vertices = [-i,-i,-i, i,-i,-i, i,i,-i, -i,i,-i, -i,-i,i, i,-i,i, i,i,i, -i,i,i ];
        shape.indices =[0,3,2,0,2,1,0,1,5,0,5,4,0,4,7,0,7,3,6,5,1,6,1,2,6,2,3,6,3,7,6,7,4,6,4,5];
        return shape;
    }   

    public static CreateOctahedron(shape: IMesh): IMesh{

        shape.vertices = [1,0,0, -1,0,0, 0,1,0, 0,-1,0, 0,0,1,0,0,-1];
        shape.indices =[4,0,2, 4,2,1, 4,1,3, 4,3,0, 5,2,0, 5,1,2, 5,3,1, 5,0,3];
        return shape;
    }   

    public static CreateDodecahedron(shape: IMesh): IMesh{

        let a:number=1/Math.sqrt(3);
        let b:number = Math.sqrt((3-Math.sqrt(5))/6);
        let c:number = Math.sqrt((3+Math.sqrt(5))/6);

        shape.vertices = [a,a,a,a,a,-a,a,-a,a,a,-a,-a,-a,a,a,-a,a,-a,-a,-a,a,-a,-a,-a,b,c,0,-b,c,0,b,-c,0,-b,-c,0,c,0,b,c,0,-b,-c,0,b,-c,0,-b,0,b,c,0,-b,c,0,b,-c,0,-b,-c];
        shape.indices =[0,8,9,0,12,13,0,16,17,8,1,18,12,2,10,16,4,14,9,5,15,6,11,10,3,19,18,7,15,5,7,11,6,7,19,3,0,9,4,0,13,1,0,17,2,8,18,5,12,10,3,
                        16,14,6,9,15,14,6,10,2,3,18,1,7,5,18,7,6,14,7,3,10,0,4,16,0,1,8,0,2,12,9,5,9,12,3,13,16,6,17,9,14,4,6,2,17,3,1,13,7,18,19,7,14,15,7,10,11];
        return shape;
    }    
 
    public static CreateIcosahedron(shape: IMesh): IMesh{

        let a:number=(1+Math.sqrt(5))/2;
        let b:number = Math.sqrt(1+a*a);
        let t:number = a/b;
        let i:number = 1/b;

        shape.vertices = [t,i,0, -t,i,0, t,-i,0, -t,-i,0, i,0,t, i,0,-t, -i,0,t, -i,0,-t, 0,t,i, 0,-t,i, 0,t,-i, 0,-t,-i];
        shape.indices = [4, 8, 0, 10, 5, 0, 9, 4, 2, 5, 11, 2, 8, 6, 1, 7, 10, 1, 6, 9, 3, 11, 7, 3, 8, 10, 0, 10, 8, 1, 11, 9, 2, 3, 9, 11, 0, 2, 4, 2, 0, 5, 3, 1, 6, 1, 3, 7, 4, 6, 8, 6, 4, 9, 7, 5, 10, 5, 7, 11];
        return shape;
    }

    public static Tessellate(shape: IMesh, tessellation:PolyhedronTessellation ): IMesh {

       shape = shape || <IMesh>{};

       /* first create the base. */
       let base:PlatonicSolids = tessellation ? tessellation.base ||  PolyhedronTessellation.DefaultBase : PolyhedronTessellation.DefaultBase ;
       switch(base){
            case(PlatonicSolids.tetrahedron):{
                shape = MeshFactory.CreateTetrahedron(shape);
                break;
            }
            case(PlatonicSolids.hexaedron):{
                shape = MeshFactory.CreateHexahedron(shape);
                break;
            }
            case(PlatonicSolids.octahedron):{
                shape = MeshFactory.CreateOctahedron(shape);
                break;
            }
            case(PlatonicSolids.dodecahedron):{
                shape = MeshFactory.CreateDodecahedron(shape);
                break;
            }
            case(PlatonicSolids.icosahedron):{
                shape = MeshFactory.CreateIcosahedron(shape);
                break;
            }
        }
        
        /* refine */
        let level = tessellation ? tessellation.level !== undefined ? tessellation.level : PolyhedronTessellation.DefaultLevel  : PolyhedronTessellation.DefaultLevel;
        let method = tessellation ? tessellation.method ||  PolyhedronTessellation.DefaultMethod : PolyhedronTessellation.DefaultMethod;
        
        for(let i=0;i!= level;i++) {
            
            let map :{[key in string]:number} = {}
            let newFaces: number[] = []
            let n = shape.indices.length;
            
            for(let f=0; f !== n;) {

                let p0 = shape.indices[f++];
                let p1 = shape.indices[f++];
                let p2 = shape.indices[f++];

                switch(method){
                    case(SubdivisionMethod.CatmullClark):
                    case(SubdivisionMethod.DooSabin):
                    case(SubdivisionMethod.Loop4):{
                        /* segment p0-p1 */
                        let mp01 = MeshFactory._getMiddlePoint(shape,p0,p1,map);
                        /* segment p1-p2 */
                        let mp12 = MeshFactory._getMiddlePoint(shape,p1,p2,map);
                        /* segment p2-p0 */
                        let mp20 = MeshFactory._getMiddlePoint(shape,p2,p0,map);
                        newFaces.push(p0, mp01, mp20, mp01, p1, mp12, mp01, mp12, mp20, mp20, mp12, p2);
                     }
                }
            }
            shape.indices = newFaces;
        }

        return shape;
    }

    private static _getMiddlePoint(shape: IMesh, p1:number, p2:number, map :{[key in string]:number}) : number {
        var key:string = p1<p2? "" + p1 + "-" + p2 : "" + p2 + "-" + p1 ;
        var i = map[key];
        if( i ) {
            delete map[key]; /* avoid too many key */
            return i;
        }
        let i1 = p1*3;
        let i2 = p2*3;
        let t = 0.5;
        let x:number = shape.vertices[i1] + (shape.vertices[i2++] - shape.vertices[i1++]) * t ;
        let y:number = shape.vertices[i1] + (shape.vertices[i2++] - shape.vertices[i1++]) * t ; 
        let z:number = shape.vertices[i1] + (shape.vertices[i2  ] - shape.vertices[i1  ]) * t ;
        
        let l:number = Math.sqrt(x*x+y*y+z*z);
        i = shape.vertices.length/3;
        shape.vertices.push(x/l,y/l,z/l);
        map[key] = i;
        return i;
    }

    public static CreateEllipsoid(shape: IMesh, options: any, tessellation:QuadrilateralTessellation): IMesh {

        shape = shape || <IMesh>{};

        shape.vertices = shape.vertices || [];
        shape.indices = shape.indices || [];
        shape.uvs = shape.uvs || [];
    
        let rx=0,ry=0,rz=0;

        if( !options) {
            rx = ry = rz = MeshFactory.DefaultRadius;
            ry = rx;
            rz = rx;
        } else {
            if(!isNaN(options)) {
                rx = ry = rz = options;
            } else {
                rx = options.rx || MeshFactory.DefaultRadius;
                ry = options.ry || rx;
                rz = options.rz || rx;
            }
        }
    
        var rows    = tessellation ? tessellation.rows || QuadrilateralTessellation.DefaultSlice :  QuadrilateralTessellation.DefaultSlice;
        var columns = tessellation ? tessellation.columns ||  rows : rows ;

        /*   create the elipsoid with the equatorial plans as x,y. 
            - horizontal counter clockwize, starting on x axis (1,0,0).
            - vertical counter clockwize, starting on z axis (0,0,1). */
        var fv = 1.0 / rows;
        var fh = 1.0 / columns;
        var dalpha = Math.PI * 2.0 * fh;     /* the angle delta over each horizontal segment */
        var dtheta = Math.PI * fv;           /* the angle delta over each vertical segment */
        var i = 0;                           /* the indice start */
        var w = columns + 1;                 /* the vertices count per row */
   
        for (var row = 0; row <= rows ; row++) {
            var v = 1.0- (row * fv);
            var theta = row * dtheta;
            var sintheta = row && row != rows ? Math.sin(theta) : 0.0 ;         /* avoid floating point calculation approximation on limits */
            var costheta = row ? row != rows ? Math.cos(theta) : -1.0 : 1.0;    /* avoid floating point calculation approximation on limits */

            var y = ry * costheta;

            for (var column = 0; column <= columns ; column++) {
                /*uvs*/
                var u = column * fh;
                shape.uvs.push(u, v);

                /*vertices*/
                var alpha = column * dalpha;
                var bounds = column && column != columns 
                var cosalpha = bounds ? Math.cos(alpha) : 1.0;    /* avoid floating point calculation approximation on limits */
                var sinalpha = bounds ? Math.sin(alpha) : 0.0;    /* avoid floating point calculation approximation on limits */
                var z = rz * sintheta * cosalpha;
                var x = rx * sintheta * sinalpha;
                
                shape.vertices.push(x, y, z);

                /*indices*/
                if (row != rows && column != columns) {
                    var b = i+1;
                    var c = i+w;
                    shape.indices.push(c, i, b, b, c + 1, c);
               }
                i++;
            }
        }
        return shape;
    }
}
