export interface IMesh {
    vertices : Array<number> ;  /* array of x,y,z tupple */
    indices : Array<number> ;   /* array of a,b,c tupple designing index as (i*3) into vertices table  */
    uvs? : Array<number[]> ;      /* array of vertices tangent space coordinate u,v tupple. Used for texturing.  */
    normals? : Array<number> ;  /*  array of normal to the triangles based on indices and vertices */
}

export interface IMeshExporter<T>{
    exportMesh(mesh:IMesh, target:T): T;
}