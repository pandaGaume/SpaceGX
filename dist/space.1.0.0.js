var SPACEGL =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/build/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/build/Babylon/BabylonMeshExporter.js":
/*!**************************************************!*\
  !*** ./src/build/Babylon/BabylonMeshExporter.js ***!
  \**************************************************/
/*! exports provided: BabylonMeshExporter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BabylonMeshExporter", function() { return BabylonMeshExporter; });
class BabylonMeshExporter {
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

/***/ }),

/***/ "./src/build/Babylon/index.js":
/*!************************************!*\
  !*** ./src/build/Babylon/index.js ***!
  \************************************/
/*! exports provided: BabylonMeshExporter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BabylonMeshExporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BabylonMeshExporter */ "./src/build/Babylon/BabylonMeshExporter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BabylonMeshExporter", function() { return _BabylonMeshExporter__WEBPACK_IMPORTED_MODULE_0__["BabylonMeshExporter"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/build/Color.js":
/*!****************************!*\
  !*** ./src/build/Color.js ***!
  \****************************/
/*! exports provided: RGBAColor, HSLColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RGBAColor", function() { return RGBAColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HSLColor", function() { return HSLColor; });
class RGBAColor {
    constructor(r, g, b, a = 1) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
    toHSL() {
        var r = this.r / 255;
        var g = this.g / 255;
        var b = this.b / 255;
        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h, s, l = (max + min) / 2;
        if (max == min) {
            h = s = 0; // achromatic
        }
        else {
            var d = max - min;
            s = (l > 0.5 ? d / (2 - max - min) : d / (max + min));
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
            }
            h /= 6;
        }
        return new HSLColor(h, s, l);
    }
    interpolate(color, t, keepAlpha = true) {
        t = t || .5;
        let r = Math.round(this.r + t * (color.r - this.r));
        let g = Math.round(this.g + t * (color.g - this.g));
        let b = Math.round(this.b + t * (color.b - this.b));
        let a = keepAlpha ? this.a : Math.round(this.a + t * (color.a - this.a));
        return new RGBAColor(r, g, b, a);
    }
    interpolateInPlace(color, t, keepAlpha = true) {
        t = t || .5;
        this.r = Math.round(this.r + t * (color.r - this.r));
        this.g = Math.round(this.g + t * (color.g - this.g));
        this.b = Math.round(this.b + t * (color.b - this.b));
        this.a = keepAlpha ? this.a : Math.round(this.a + t * (color.a - this.a));
        return this;
    }
}
class HSLColor {
    constructor(h, s, l) {
        this.h = h;
        this.s = s;
        this.l = l;
    }
    static hue2rgb(p, q, t) {
        if (t < 0)
            t += 1;
        if (t > 1)
            t -= 1;
        if (t < 1 / 6)
            return p + (q - p) * 6 * t;
        if (t < 1 / 2)
            return q;
        if (t < 2 / 3)
            return p + (q - p) * (2 / 3 - t) * 6;
        return p;
    }
    toRGB() {
        var l = this.l;
        if (this.s === 0) {
            l = Math.round(l * 255);
            return new RGBAColor(l, l, l);
        }
        var s = this.s;
        var q = (l < 0.5 ? l * (1 + s) : l + s - l * s);
        var p = 2 * l - q;
        var r = HSLColor.hue2rgb(p, q, this.h + 1 / 3);
        var g = HSLColor.hue2rgb(p, q, this.h);
        var b = HSLColor.hue2rgb(p, q, this.h - 1 / 3);
        return new RGBAColor(Math.round(r * 255), Math.round(g * 255), Math.round(b * 255));
    }
    ;
}
//# sourceMappingURL=Color.js.map

/***/ }),

/***/ "./src/build/Events.js":
/*!*****************************!*\
  !*** ./src/build/Events.js ***!
  \*****************************/
/*! exports provided: EventEmitter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventEmitter", function() { return EventEmitter; });
class EventEmitter {
    constructor() {
        this._events = new Map();
        this._maxListeners = null;
    }
    addListener(eventName, listener, closure) {
        this._registerEvent(eventName, listener, closure);
        return this;
    }
    on(eventName, listener, closure) {
        this._registerEvent(eventName, listener, closure);
        return this;
    }
    once(eventName, listener, closure) {
        var l = this._createOnceListener(listener, eventName, closure);
        this._registerEvent(eventName, l, closure);
        return this;
    }
    emit(eventName, ...args) {
        let listeners = this._events.get(eventName);
        if (listeners) {
            let i = 0;
            let l = listeners.length;
            if (i < l) {
                do {
                    var listener = listeners[i++];
                    var object = listeners[i++] || this;
                    if (listener) {
                        listener.call(object, ...args);
                    }
                } while (i < l);
                return true;
            }
        }
        return false;
    }
    eventNames() {
        return Array.from(this._events.keys());
    }
    get maxListeners() {
        return this._maxListeners === null ? EventEmitter.defaultMaxListeners : this._maxListeners;
    }
    set maxListeners(limit) {
        this._maxListeners = limit;
    }
    *listeners(eventName, closure) {
        let listeners = this._events.get(eventName);
        if (listeners) {
            if (!closure) {
                return listeners;
            }
            let i = 0;
            let l = listeners.length;
            if (i < l) {
                do {
                    var listener = listeners[i++];
                    if (listeners[i++] === closure) {
                        return yield listener;
                    }
                } while (i < l);
            }
        }
        return [];
    }
    listenerCount(eventName) {
        let listeners = this._events.get(eventName);
        return listeners ? listeners.length / 2 : 0;
    }
    removeAllListeners(eventNames, closure) {
        if (!eventNames) {
            eventNames = Array.from(this._events.keys());
        }
        eventNames.forEach(eventName => this._removeAllListeners(eventName, closure));
        return this;
    }
    _removeAllListeners(eventName, closure) {
        let listeners = this._events.get(eventName);
        if (listeners) {
            if (!closure) {
                this._events.delete(eventName);
                return;
            }
            let i = 0;
            let l = listeners.length;
            let count = 0;
            if (i < l) {
                do {
                    var listener = listeners[i];
                    if (listeners[i + 1] === closure) {
                        // we remove the items.
                        listeners.splice(i, 2);
                        continue;
                    }
                    i += 2;
                } while (i < l);
            }
        }
    }
    removeListener(eventName, listener, closure) {
        let listeners = this._events.get(eventName);
        if (listeners) {
            let i = 0;
            let l = listeners.length;
            let count = 0;
            if (i < l) {
                do {
                    var tmp = listeners[i];
                    if (tmp === listener) {
                        if (!closure || listeners[i + 1] === closure) {
                            // we remove the items.
                            listeners.splice(i, 2);
                            continue;
                        }
                    }
                    i += 2;
                } while (i < l);
                if (listeners.length === 0) {
                    this._events.delete(eventName);
                }
            }
        }
        return this;
    }
    prependListener(eventName, listener, closure) {
        if (this._ListenerLimitReached(eventName)) {
            console.log("Maximum listener reached, new Listener not added");
            return;
        }
        let listeners = this._events.get(eventName);
        if (!listeners) {
            listeners = [listener, closure];
            this._events.set(eventName, listeners);
            return this;
        }
        listeners.unshift(listener, closure);
    }
    prependOnceListener(eventName, listener, closure) {
        var l = this._createOnceListener(listener, eventName, closure);
        this.prependListener(eventName, l, closure);
        return this;
    }
    _registerEvent(eventName, listener, closure) {
        if (this._ListenerLimitReached(eventName)) {
            console.log("Maximum listener reached, new Listener not added");
            return;
        }
        let listeners = this._events.get(eventName);
        if (!listeners) {
            listeners = [listener, closure];
            this._events.set(eventName, listeners);
            return;
        }
        listeners.push(listener, closure);
    }
    _createOnceListener(listener, eventName, closure) {
        let newListener = (...args) => {
            this.removeListener(eventName, listener);
            return listener(...args);
        };
        return newListener;
    }
    _ListenerLimitReached(eventName) {
        return this.listenerCount(eventName) === this.maxListeners ? true : false;
    }
}
EventEmitter.defaultMaxListeners = 10;
//# sourceMappingURL=Events.js.map

/***/ }),

/***/ "./src/build/Geometry/MeshFactory.js":
/*!*******************************************!*\
  !*** ./src/build/Geometry/MeshFactory.js ***!
  \*******************************************/
/*! exports provided: PlatonicSolids, MeshFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatonicSolids", function() { return PlatonicSolids; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeshFactory", function() { return MeshFactory; });
var PlatonicSolids;
(function (PlatonicSolids) {
    PlatonicSolids[PlatonicSolids["tetrahedron"] = 0] = "tetrahedron";
    PlatonicSolids[PlatonicSolids["hexaedron"] = 1] = "hexaedron";
    PlatonicSolids[PlatonicSolids["octahedron"] = 2] = "octahedron";
    PlatonicSolids[PlatonicSolids["dodecahedron"] = 3] = "dodecahedron";
    PlatonicSolids[PlatonicSolids["icosahedron"] = 4] = "icosahedron";
})(PlatonicSolids || (PlatonicSolids = {}));
class MeshFactory {
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

/***/ }),

/***/ "./src/build/Geometry/MeshProcessor.js":
/*!*********************************************!*\
  !*** ./src/build/Geometry/MeshProcessor.js ***!
  \*********************************************/
/*! exports provided: MeshProcessor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeshProcessor", function() { return MeshProcessor; });
class MeshProcessor {
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

/***/ }),

/***/ "./src/build/Geometry/index.js":
/*!*************************************!*\
  !*** ./src/build/Geometry/index.js ***!
  \*************************************/
/*! exports provided: PlatonicSolids, MeshFactory, MeshProcessor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MeshFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MeshFactory */ "./src/build/Geometry/MeshFactory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlatonicSolids", function() { return _MeshFactory__WEBPACK_IMPORTED_MODULE_0__["PlatonicSolids"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MeshFactory", function() { return _MeshFactory__WEBPACK_IMPORTED_MODULE_0__["MeshFactory"]; });

/* harmony import */ var _MeshProcessor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MeshProcessor */ "./src/build/Geometry/MeshProcessor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MeshProcessor", function() { return _MeshProcessor__WEBPACK_IMPORTED_MODULE_1__["MeshProcessor"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/build/Math.js":
/*!***************************!*\
  !*** ./src/build/Math.js ***!
  \***************************/
/*! exports provided: AbstractRange, Range */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractRange", function() { return AbstractRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Range", function() { return Range; });
class AbstractRange {
    constructor(min, max = undefined) {
        this.min = min;
        this.max = max;
    }
    get min() {
        return this._min;
    }
    get max() {
        return this._max;
    }
    set min(m) {
        this._min = m;
        this._d = undefined;
    }
    set max(m) {
        this._max = m;
        this._d = undefined;
    }
    get delta() {
        if (this._d === undefined) {
            this._d = this.computeDelta(this._min, this._max);
        }
        return this._d;
    }
}
class Range extends AbstractRange {
    computeDelta(a, b) {
        return a && b ? b - a : 0;
    }
}
//# sourceMappingURL=Math.js.map

/***/ }),

/***/ "./src/build/Space/AxialTilt.js":
/*!**************************************!*\
  !*** ./src/build/Space/AxialTilt.js ***!
  \**************************************/
/*! exports provided: AxialTilt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AxialTilt", function() { return AxialTilt; });
/* harmony import */ var _Units__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../Units */ "./src/build/Units.js");

class AxialTilt {
    constructor(obliquity, period) {
        this._obliquity = new _Units__WEBPACK_IMPORTED_MODULE_0__["Angle"](obliquity, AxialTilt.defaultAngleUnit);
        this._period = new _Units__WEBPACK_IMPORTED_MODULE_0__["Timespan"](period, AxialTilt.defaultPeriodUnit);
    }
    get obliquity() {
        return this._obliquity;
    }
    get period() {
        return this._period;
    }
    get meanAngularSpeed() {
        return 360.0 / this._period.value;
    }
}
AxialTilt.defaultAngleUnit = _Units__WEBPACK_IMPORTED_MODULE_0__["Angle"].Units.d;
AxialTilt.defaultPeriodUnit = _Units__WEBPACK_IMPORTED_MODULE_0__["Timespan"].Units.s;
//# sourceMappingURL=AxialTilt.js.map

/***/ }),

/***/ "./src/build/Space/ICelestialObject.js":
/*!*********************************************!*\
  !*** ./src/build/Space/ICelestialObject.js ***!
  \*********************************************/
/*! exports provided: CelestialNodeType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CelestialNodeType", function() { return CelestialNodeType; });
var CelestialNodeType;
(function (CelestialNodeType) {
    CelestialNodeType[CelestialNodeType["HUBBLE_RADIUS"] = 0] = "HUBBLE_RADIUS";
    CelestialNodeType[CelestialNodeType["SUPER_CLUSTER"] = 1] = "SUPER_CLUSTER";
    CelestialNodeType[CelestialNodeType["CLUSTER"] = 2] = "CLUSTER";
    CelestialNodeType[CelestialNodeType["GROUP"] = 3] = "GROUP";
    CelestialNodeType[CelestialNodeType["GALAXY"] = 4] = "GALAXY";
    CelestialNodeType[CelestialNodeType["SYSTEM"] = 5] = "SYSTEM";
    CelestialNodeType[CelestialNodeType["STAR"] = 6] = "STAR";
    CelestialNodeType[CelestialNodeType["PLANET"] = 7] = "PLANET";
    CelestialNodeType[CelestialNodeType["MOON"] = 8] = "MOON";
    CelestialNodeType[CelestialNodeType["ASTEROIDE"] = 9] = "ASTEROIDE";
    CelestialNodeType[CelestialNodeType["COMET"] = 10] = "COMET";
    CelestialNodeType[CelestialNodeType["ARTIFICIAL"] = 11] = "ARTIFICIAL";
    CelestialNodeType[CelestialNodeType["VOID"] = 12] = "VOID";
    CelestialNodeType[CelestialNodeType["BLACK_HOLE"] = 13] = "BLACK_HOLE";
    CelestialNodeType[CelestialNodeType["RING"] = 14] = "RING";
})(CelestialNodeType || (CelestialNodeType = {}));
//# sourceMappingURL=ICelestialObject.js.map

/***/ }),

/***/ "./src/build/Space/SpectralClass.js":
/*!******************************************!*\
  !*** ./src/build/Space/SpectralClass.js ***!
  \******************************************/
/*! exports provided: MorganKeenanClass, SpectralClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MorganKeenanClass", function() { return MorganKeenanClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpectralClass", function() { return SpectralClass; });
/* harmony import */ var _Units__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../Units */ "./src/build/Units.js");

class MorganKeenanClass {
    constructor(major, minor, luminosity = undefined) {
        this._major = major;
        this._minor = minor;
        this._lum = luminosity;
    }
    static Parse(str) {
        let a = this.pattern.exec(str);
        if (a) {
            let major = a[0];
            let minor = parseFloat(a[1]);
            let lum = (a.length > 2 ? a[2] : undefined);
            return new MorganKeenanClass(major, minor, lum);
        }
        return null;
    }
    get major() {
        return this._major;
    }
    get minor() {
        return this._minor;
    }
    get luminosity() {
        return this._lum;
    }
    get fullName() {
        return this._major + this._minor + this._lum ? "(" + this._lum + ")" : "";
    }
}
MorganKeenanClass.pattern = /^(O|B|A|F|G|K|M)([0-9](.[0-9])?)((Ia\+|I|II|III|IV|V|sd|D))?$/;
MorganKeenanClass.LuminosityNames = ["Ia+", "I", "II", "III", "IV", "V", "sd", "D"];
/* Most stars are currently classified under the Morgan–Keenan (MK) system using the letters O, B, A, F, G, K, and M,
 * a sequence from the hottest (O type) to the coolest (M type). Each letter class is then subdivided using a numeric
 * digit with 0 being hottest and 9 being coolest (e.g. A8, A9, F0, F1 form a sequence from hotter to cooler).
 * The sequence has been expanded with classes for other stars and star-like objects that do not fit in the classical
 * system, such as class D for white dwarfs and class C for carbon stars.
 * In the MK system, a luminosity class is added to the spectral class using Roman numerals. This is based on the width
 * of certain absorption lines in the star"s spectrum, which vary with the density of the atmosphere and so distinguish
 * giant stars from dwarfs. Luminosity class 0 or Ia+ stars for hypergiants, class I stars for supergiants, class II for
 * bright giants, class III for regular giants, class IV for sub-giants, class V for main-sequence stars, class sd for
 * sub-dwarfs, and class D for white dwarfs. The full spectral class for the Sun is then G2V, indicating a main-sequence
 * star with a temperature around 5,800 K.
 */
class SpectralClass {
    constructor(name, effectiveTemperature, VegaRelativeColorLabel, chromacityLabel, mass, radius, luminosity, hydrogenLine, fractionOfStars) {
        this.name = name;
        this.effectiveTemperature = effectiveTemperature;
        this.VegaRelativeColorLabel = VegaRelativeColorLabel;
        this.chromacityLabel = chromacityLabel;
        this.mass = mass;
        this.radius = radius;
        this.luminosity = luminosity;
        this.hydrogenLine = hydrogenLine;
        this.fractionOfStars = fractionOfStars;
    }
    static ClassFromTemperature(temperature) {
        var temp = new _Units__WEBPACK_IMPORTED_MODULE_0__["Temperature"](temperature, _Units__WEBPACK_IMPORTED_MODULE_0__["Temperature"].Units.k);
        let c = SpectralClass.HarwardClassification;
        for (var i = 0; i !== c.length; i++) {
            let sc = c[i];
            var min = sc.effectiveTemperature.min;
            var max = sc.effectiveTemperature.max;
            if ((!min || min.value <= temp.value) && (!max || max.value > temp.value)) {
                return sc[i];
            }
        }
        return null;
    }
}
SpectralClass.O = new SpectralClass("O", new _Units__WEBPACK_IMPORTED_MODULE_0__["QuantityRange"](new _Units__WEBPACK_IMPORTED_MODULE_0__["Temperature"](30000, _Units__WEBPACK_IMPORTED_MODULE_0__["Temperature"].Units.k), new _Units__WEBPACK_IMPORTED_MODULE_0__["Temperature"](60000, _Units__WEBPACK_IMPORTED_MODULE_0__["Temperature"].Units.k)), "blue", "blue", new _Units__WEBPACK_IMPORTED_MODULE_0__["QuantityRange"](new _Units__WEBPACK_IMPORTED_MODULE_0__["Mass"](16, _Units__WEBPACK_IMPORTED_MODULE_0__["Mass"].Units.Sm)), new _Units__WEBPACK_IMPORTED_MODULE_0__["QuantityRange"](new _Units__WEBPACK_IMPORTED_MODULE_0__["Distance"](6.6, _Units__WEBPACK_IMPORTED_MODULE_0__["Distance"].Units.Sr)), new _Units__WEBPACK_IMPORTED_MODULE_0__["QuantityRange"](new _Units__WEBPACK_IMPORTED_MODULE_0__["Luminosity"](30000, _Units__WEBPACK_IMPORTED_MODULE_0__["Luminosity"].Units.Lsun)), "weak", 0.00003);
SpectralClass.B = new SpectralClass("B", new _Units__WEBPACK_IMPORTED_MODULE_0__["QuantityRange"](new _Units__WEBPACK_IMPORTED_MODULE_0__["Temperature"](10000, _Units__WEBPACK_IMPORTED_MODULE_0__["Temperature"].Units.k), new _Units__WEBPACK_IMPORTED_MODULE_0__["Temperature"](30000, _Units__WEBPACK_IMPORTED_MODULE_0__["Temperature"].Units.k)), "blue white", "deep blue white", new _Units__WEBPACK_IMPORTED_MODULE_0__["QuantityRange"](new _Units__WEBPACK_IMPORTED_MODULE_0__["Mass"](2.1, _Units__WEBPACK_IMPORTED_MODULE_0__["Mass"].Units.Sm), new _Units__WEBPACK_IMPORTED_MODULE_0__["Mass"](16, _Units__WEBPACK_IMPORTED_MODULE_0__["Mass"].Units.Sm)), new _Units__WEBPACK_IMPORTED_MODULE_0__["QuantityRange"](new _Units__WEBPACK_IMPORTED_MODULE_0__["Distance"](1.8, _Units__WEBPACK_IMPORTED_MODULE_0__["Distance"].Units.Sr), new _Units__WEBPACK_IMPORTED_MODULE_0__["Distance"](6.6, _Units__WEBPACK_IMPORTED_MODULE_0__["Distance"].Units.Sr)), new _Units__WEBPACK_IMPORTED_MODULE_0__["QuantityRange"](new _Units__WEBPACK_IMPORTED_MODULE_0__["Luminosity"](25, _Units__WEBPACK_IMPORTED_MODULE_0__["Luminosity"].Units.Lsun), new _Units__WEBPACK_IMPORTED_MODULE_0__["Luminosity"](30000, _Units__WEBPACK_IMPORTED_MODULE_0__["Luminosity"].Units.Lsun)), "weak", 0.13);
SpectralClass.A = new SpectralClass("A", new _Units__WEBPACK_IMPORTED_MODULE_0__["QuantityRange"](new _Units__WEBPACK_IMPORTED_MODULE_0__["Temperature"](7500, _Units__WEBPACK_IMPORTED_MODULE_0__["Temperature"].Units.k), new _Units__WEBPACK_IMPORTED_MODULE_0__["Temperature"](10000, _Units__WEBPACK_IMPORTED_MODULE_0__["Temperature"].Units.k)), "white", "blue white", new _Units__WEBPACK_IMPORTED_MODULE_0__["QuantityRange"](new _Units__WEBPACK_IMPORTED_MODULE_0__["Mass"](1.4, _Units__WEBPACK_IMPORTED_MODULE_0__["Mass"].Units.Sm), new _Units__WEBPACK_IMPORTED_MODULE_0__["Mass"](2.1, _Units__WEBPACK_IMPORTED_MODULE_0__["Mass"].Units.Sm)), new _Units__WEBPACK_IMPORTED_MODULE_0__["QuantityRange"](new _Units__WEBPACK_IMPORTED_MODULE_0__["Distance"](1.4, _Units__WEBPACK_IMPORTED_MODULE_0__["Distance"].Units.Sr), new _Units__WEBPACK_IMPORTED_MODULE_0__["Distance"](1.8, _Units__WEBPACK_IMPORTED_MODULE_0__["Distance"].Units.Sr)), new _Units__WEBPACK_IMPORTED_MODULE_0__["QuantityRange"](new _Units__WEBPACK_IMPORTED_MODULE_0__["Luminosity"](5, _Units__WEBPACK_IMPORTED_MODULE_0__["Luminosity"].Units.Lsun), new _Units__WEBPACK_IMPORTED_MODULE_0__["Luminosity"](25, _Units__WEBPACK_IMPORTED_MODULE_0__["Luminosity"].Units.Lsun)), "strong", 0.6);
SpectralClass.F = new SpectralClass("F", new _Units__WEBPACK_IMPORTED_MODULE_0__["QuantityRange"](new _Units__WEBPACK_IMPORTED_MODULE_0__["Temperature"](6000, _Units__WEBPACK_IMPORTED_MODULE_0__["Temperature"].Units.k), new _Units__WEBPACK_IMPORTED_MODULE_0__["Temperature"](7500, _Units__WEBPACK_IMPORTED_MODULE_0__["Temperature"].Units.k)), "yellow white", "white", new _Units__WEBPACK_IMPORTED_MODULE_0__["QuantityRange"](new _Units__WEBPACK_IMPORTED_MODULE_0__["Mass"](1.04, _Units__WEBPACK_IMPORTED_MODULE_0__["Mass"].Units.Sm), new _Units__WEBPACK_IMPORTED_MODULE_0__["Mass"](1.4, _Units__WEBPACK_IMPORTED_MODULE_0__["Mass"].Units.Sm)), new _Units__WEBPACK_IMPORTED_MODULE_0__["QuantityRange"](new _Units__WEBPACK_IMPORTED_MODULE_0__["Distance"](1.15, _Units__WEBPACK_IMPORTED_MODULE_0__["Distance"].Units.Sr), new _Units__WEBPACK_IMPORTED_MODULE_0__["Distance"](1.4, _Units__WEBPACK_IMPORTED_MODULE_0__["Distance"].Units.Sr)), new _Units__WEBPACK_IMPORTED_MODULE_0__["QuantityRange"](new _Units__WEBPACK_IMPORTED_MODULE_0__["Luminosity"](1.5, _Units__WEBPACK_IMPORTED_MODULE_0__["Luminosity"].Units.Lsun), new _Units__WEBPACK_IMPORTED_MODULE_0__["Luminosity"](5, _Units__WEBPACK_IMPORTED_MODULE_0__["Luminosity"].Units.Lsun)), "medium", 3);
SpectralClass.G = new SpectralClass("G", new _Units__WEBPACK_IMPORTED_MODULE_0__["QuantityRange"](new _Units__WEBPACK_IMPORTED_MODULE_0__["Temperature"](5200, _Units__WEBPACK_IMPORTED_MODULE_0__["Temperature"].Units.k), new _Units__WEBPACK_IMPORTED_MODULE_0__["Temperature"](6000, _Units__WEBPACK_IMPORTED_MODULE_0__["Temperature"].Units.k)), "yellow", "yello white", new _Units__WEBPACK_IMPORTED_MODULE_0__["QuantityRange"](new _Units__WEBPACK_IMPORTED_MODULE_0__["Mass"](0.8, _Units__WEBPACK_IMPORTED_MODULE_0__["Mass"].Units.Sm), new _Units__WEBPACK_IMPORTED_MODULE_0__["Mass"](1.04, _Units__WEBPACK_IMPORTED_MODULE_0__["Mass"].Units.Sm)), new _Units__WEBPACK_IMPORTED_MODULE_0__["QuantityRange"](new _Units__WEBPACK_IMPORTED_MODULE_0__["Distance"](0.96, _Units__WEBPACK_IMPORTED_MODULE_0__["Distance"].Units.Sr), new _Units__WEBPACK_IMPORTED_MODULE_0__["Distance"](1.15, _Units__WEBPACK_IMPORTED_MODULE_0__["Distance"].Units.Sr)), new _Units__WEBPACK_IMPORTED_MODULE_0__["QuantityRange"](new _Units__WEBPACK_IMPORTED_MODULE_0__["Luminosity"](0.6, _Units__WEBPACK_IMPORTED_MODULE_0__["Luminosity"].Units.Lsun), new _Units__WEBPACK_IMPORTED_MODULE_0__["Luminosity"](1.5, _Units__WEBPACK_IMPORTED_MODULE_0__["Luminosity"].Units.Lsun)), "weak", 7.6);
SpectralClass.K = new SpectralClass("K", new _Units__WEBPACK_IMPORTED_MODULE_0__["QuantityRange"](new _Units__WEBPACK_IMPORTED_MODULE_0__["Temperature"](3700, _Units__WEBPACK_IMPORTED_MODULE_0__["Temperature"].Units.k), new _Units__WEBPACK_IMPORTED_MODULE_0__["Temperature"](5200, _Units__WEBPACK_IMPORTED_MODULE_0__["Temperature"].Units.k)), "orange	pale", "yello orange", new _Units__WEBPACK_IMPORTED_MODULE_0__["QuantityRange"](new _Units__WEBPACK_IMPORTED_MODULE_0__["Mass"](0.45, _Units__WEBPACK_IMPORTED_MODULE_0__["Mass"].Units.Sm), new _Units__WEBPACK_IMPORTED_MODULE_0__["Mass"](0.8, _Units__WEBPACK_IMPORTED_MODULE_0__["Mass"].Units.Sm)), new _Units__WEBPACK_IMPORTED_MODULE_0__["QuantityRange"](new _Units__WEBPACK_IMPORTED_MODULE_0__["Distance"](0.7, _Units__WEBPACK_IMPORTED_MODULE_0__["Distance"].Units.Sr), new _Units__WEBPACK_IMPORTED_MODULE_0__["Distance"](0.96, _Units__WEBPACK_IMPORTED_MODULE_0__["Distance"].Units.Sr)), new _Units__WEBPACK_IMPORTED_MODULE_0__["QuantityRange"](new _Units__WEBPACK_IMPORTED_MODULE_0__["Luminosity"](0.08, _Units__WEBPACK_IMPORTED_MODULE_0__["Luminosity"].Units.Lsun), new _Units__WEBPACK_IMPORTED_MODULE_0__["Luminosity"](0.6, _Units__WEBPACK_IMPORTED_MODULE_0__["Luminosity"].Units.Lsun)), "very weak", 12.1);
SpectralClass.M = new SpectralClass("M", new _Units__WEBPACK_IMPORTED_MODULE_0__["QuantityRange"](new _Units__WEBPACK_IMPORTED_MODULE_0__["Temperature"](2400, _Units__WEBPACK_IMPORTED_MODULE_0__["Temperature"].Units.k), new _Units__WEBPACK_IMPORTED_MODULE_0__["Temperature"](3700, _Units__WEBPACK_IMPORTED_MODULE_0__["Temperature"].Units.k)), "red light", "orange red", new _Units__WEBPACK_IMPORTED_MODULE_0__["QuantityRange"](new _Units__WEBPACK_IMPORTED_MODULE_0__["Mass"](0.08, _Units__WEBPACK_IMPORTED_MODULE_0__["Mass"].Units.Sm), new _Units__WEBPACK_IMPORTED_MODULE_0__["Mass"](0.45, _Units__WEBPACK_IMPORTED_MODULE_0__["Mass"].Units.Sm)), new _Units__WEBPACK_IMPORTED_MODULE_0__["QuantityRange"](null, new _Units__WEBPACK_IMPORTED_MODULE_0__["Distance"](0.7, _Units__WEBPACK_IMPORTED_MODULE_0__["Distance"].Units.Sr)), new _Units__WEBPACK_IMPORTED_MODULE_0__["QuantityRange"](null, new _Units__WEBPACK_IMPORTED_MODULE_0__["Luminosity"](0.8, _Units__WEBPACK_IMPORTED_MODULE_0__["Luminosity"].Units.Lsun)), "very weak", 76.45);
SpectralClass.HarwardClassificationIndex = {
    "O": SpectralClass.O,
    "B": SpectralClass.B,
    "A": SpectralClass.A,
    "F": SpectralClass.F,
    "G": SpectralClass.G,
    "K": SpectralClass.K,
    "M": SpectralClass.M
};
SpectralClass.HarwardClassification = [
    SpectralClass.O,
    SpectralClass.B,
    SpectralClass.A,
    SpectralClass.F,
    SpectralClass.G,
    SpectralClass.K,
    SpectralClass.M
];
SpectralClass.TemperatureRange = new _Units__WEBPACK_IMPORTED_MODULE_0__["QuantityRange"](new _Units__WEBPACK_IMPORTED_MODULE_0__["Temperature"](2400, _Units__WEBPACK_IMPORTED_MODULE_0__["Temperature"].Units.k), new _Units__WEBPACK_IMPORTED_MODULE_0__["Temperature"](60000, _Units__WEBPACK_IMPORTED_MODULE_0__["Temperature"].Units.k));
//# sourceMappingURL=SpectralClass.js.map

/***/ }),

/***/ "./src/build/Space/StarColor.js":
/*!**************************************!*\
  !*** ./src/build/Space/StarColor.js ***!
  \**************************************/
/*! exports provided: StarColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarColor", function() { return StarColor; });
/* harmony import */ var _SpectralClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SpectralClass */ "./src/build/Space/SpectralClass.js");
/* harmony import */ var _Units__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Units */ "./src/build/Units.js");
/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../Color */ "./src/build/Color.js");



class ColorValue {
}
/*
 * • The upshot is this: the color of a star depends on its surface temperature.  But a blue star doesn’t emit only blue light,
 *   nor does a red star emit only red light.  They emit visible light of all colors to some degree.  It’s just that their
 *   spectrum peaks at a particular color.
 * • So why are there blue stars, yellow stars, red stars, but no green stars?  As it turns out, there are green stars, that is,
 *   stars that radiate much of their light in the green part of the spectrum.  But the total combination of the full range of
 *   colors of a “green” star appears white to our eyes.  If you pass the color from a whitish star through a prism, you’ll see
 *   all the colors, including green, spread out in a continuum.
 * • Astronomers came to understand that bluer stars are intrinsically brighter because they are more massive than
 *   white or red stars, and more massive stars burn much faster and hotter than less massive stars.  The bluish type-O stars,
 *   for example, are only 30-50 times more massive than yellow-white stars like our sun.  But O stars burn a million times
 *   brighter, so they have far shorter lifetimes.
 *   O and B stars only last a few million years before they die in spectacular supernova explosions, while cooler and less
 *   massive K and M stars burn steadily for billions of years.
 * • Some 88% of stars in the universe seem to be the cooler type K and M.  Only 1 in 3,000,000 stars are type O.
 *   Even middle-weights like our type-G Sun comprise only 8% of all known stars.
 *   This relationship between star mass, luminosity, and color holds only for stars burning hydrogen in the core during the
 *   prime of their lives. For example, young and middle-aged M-type stars are small, faint and long-lived.  But as stars age
 *   and start burning heavier elements in the core, bluish O and B stars, for example, evolve briefly into immensely bright
 *   M-type red stars known as red supergiants. We’ll explain this in later issues.  If it sounds complicated, fear not.
 *   Even astronomy majors wrestle over this for some time before they understand how stars live and evolve.
 *
 * thanks to http://oneminuteastronomer.com/708/star-colors-explained/
 * ---------------------------------------------------------------------
 * Stars radiate light a little like glowing coals in a campfire.  Just as a glowing red-hot coal is cooler than a white-hot coal,
 * for example, so a red star is cooler than a white star, and a white star is cooler than a blue star. This was a major scientific
 * discovery… simply by measuring the color of light coming from a star, and applying a little physics, it was possible to estimate
 * a star’s surface temperature.
 * Like most scientists, astronomers love to classify things.  In the late 19th century, Harvard astronomers developed a system to
 * classify stars not according to color, but by the strength by which hydrogen gas absorbed light at particular wavelengths.
 * The star classes were labeled A to N in order of decreasing hydrogen absorption strength.  After a time, the classes
 * were simplified to O, B, A, F, G, K, and M.  This is the Harvard spectral classification, which is still used today.
 * So what does this have to do with star color?
 * • As astronomers and physicists learned more about atomic structure and the spectra of light from stars,
 *   they discovered the Harvard classification system really described the temperature of a star’s atmosphere.
 *   They discovered the type-O stars are hotter than type-B stars, and type-B stars are hotter than type-A stars, and so on.
 *   But hot stars are blue, and medium-hot stars are white, and cool stars are red.
 * • Here’s a summary of the dominant color and temperatures of the main classes of stars, along with examples of stars that
 *   belong to each class
 * according http://www.vendian.org/mncharity/dir3/starcolor/UnstableURLs/starcolors.html
 */
class StarColor {
    static _buildIndex(ColorTable) {
        var o = {};
        for (let l of _SpectralClass__WEBPACK_IMPORTED_MODULE_0__["MorganKeenanClass"].LuminosityNames) {
            o[l] = Array.from(StarColor._SelectByLuminosity(l, ColorTable)).sort((a, b) => a.kelvin - b.kelvin);
        }
        return o;
    }
    static *_SelectByLuminosity(l, table) {
        for (let p of table) {
            let c = _SpectralClass__WEBPACK_IMPORTED_MODULE_0__["MorganKeenanClass"].Parse(p.key);
            if (c && c.luminosity === l) {
                var t = .9 - (c.minor / 10);
                var sc = _SpectralClass__WEBPACK_IMPORTED_MODULE_0__["SpectralClass"].HarwardClassificationIndex[c.major];
                var { min, delta } = sc.effectiveTemperature;
                var { r, g, b } = p.value;
                yield { mk: c,
                    class: sc,
                    kelvin: min.value + delta * t,
                    color: new _Color__WEBPACK_IMPORTED_MODULE_2__["RGBAColor"](r, g, b) };
            }
        }
    }
    static _lookup(source, temperature) {
        var low = 0, high = source.length;
        while (low < high) {
            var mid = (low + high) >>> 1;
            if (source[mid].kelvin > temperature)
                low = mid + 1;
            else
                high = mid;
        }
        return low;
    }
    /* use to find the range of matrix items wheres temperature lies.
       return an array of one or two matrix item */
    static _lookupIndexes(luminosity, temperature) {
        var l = StarColor.Matrix[luminosity];
        if (!l || !l.length)
            return [];
        var i = StarColor._lookup(l, temperature);
        var res = [];
        if (i == l.length) {
            res.push(l[i - 1]);
            return res;
        }
        res.push(l[i]);
        if (i > 0) {
            res.push(l[i - 1]);
        }
        return res;
    }
    static lookupRgb(luminosity, temperature) {
        var kelvin = new _Units__WEBPACK_IMPORTED_MODULE_1__["Temperature"](temperature, _Units__WEBPACK_IMPORTED_MODULE_1__["Temperature"].Units.k);
        var i = this._lookupIndexes(luminosity, kelvin.value);
        if (!i || !i.length)
            return new _Color__WEBPACK_IMPORTED_MODULE_2__["RGBAColor"](0, 0, 0);
        if (i.length == 1) {
            return i[0].color;
        }
        var k0 = i[0].kelvin;
        var k1 = i[1].kelvin;
        var dk = (k1 - k0);
        var c0 = i[0].color;
        if (dk == 0)
            return c0;
        var c1 = i[1].color;
        ;
        var f = (kelvin.value - k0) / dk;
        return c0.interpolateInPlace(c1, f);
    }
}
StarColor.ColorTable = [
    { key: "O9I", value: { x: 0.2507, y: 0.2468, r: 164, g: 185, b: 255, color: "#a4b9ff" } },
    { key: "B0I", value: { x: 0.2498, y: 0.2513, r: 161, g: 189, b: 255, color: "#a1bdff" } },
    { key: "B1I", value: { x: 0.2547, y: 0.2562, r: 168, g: 193, b: 255, color: "#a8c1ff" } },
    { key: "B2I", value: { x: 0.2606, y: 0.2611, r: 177, g: 196, b: 255, color: "#b1c4ff" } },
    { key: "B3I", value: { x: 0.2591, y: 0.2582, r: 175, g: 194, b: 255, color: "#afc2ff" } },
    { key: "B4I", value: { x: 0.2678, y: 0.271, r: 187, g: 203, b: 255, color: "#bbcbff" } },
    { key: "B5I", value: { x: 0.2628, y: 0.2685, r: 179, g: 202, b: 255, color: "#b3caff" } },
    { key: "B6I", value: { x: 0.2711, y: 0.2754, r: 191, g: 207, b: 255, color: "#bfcfff" } },
    { key: "B7I", value: { x: 0.2734, y: 0.2785, r: 195, g: 209, b: 255, color: "#c3d1ff" } },
    { key: "B8I", value: { x: 0.2653, y: 0.274, r: 182, g: 206, b: 255, color: "#b6ceff" } },
    { key: "B9I", value: { x: 0.2797, y: 0.2865, r: 204, g: 216, b: 255, color: "#ccd8ff" } },
    { key: "A0I", value: { x: 0.2683, y: 0.2737, r: 187, g: 206, b: 255, color: "#bbceff" } },
    { key: "A1I", value: { x: 0.2871, y: 0.2955, r: 214, g: 223, b: 255, color: "#d6dfff" } },
    { key: "A2I", value: { x: 0.2768, y: 0.2842, r: 199, g: 214, b: 255, color: "#c7d6ff" } },
    { key: "A5I", value: { x: 0.2925, y: 0.3019, r: 223, g: 229, b: 255, color: "#dfe5ff" } },
    { key: "F0I", value: { x: 0.2789, y: 0.2855, r: 202, g: 215, b: 255, color: "#cad7ff" } },
    { key: "F2I", value: { x: 0.3061, y: 0.3172, r: 244, g: 243, b: 255, color: "#f4f3ff" } },
    { key: "F5I", value: { x: 0.2899, y: 0.2978, r: 219, g: 225, b: 255, color: "#dbe1ff" } },
    { key: "F8I", value: { x: 0.3177, y: 0.3337, r: 255, g: 252, b: 247, color: "#fffcf7" } },
    { key: "G0I", value: { x: 0.3361, y: 0.349, r: 255, g: 239, b: 219, color: "#ffefdb" } },
    { key: "G2I", value: { x: 0.3461, y: 0.3605, r: 255, g: 236, b: 205, color: "#ffeccd" } },
    { key: "G3I", value: { x: 0.3479, y: 0.3566, r: 255, g: 231, b: 203, color: "#ffe7cb" } },
    { key: "G5I", value: { x: 0.3617, y: 0.3769, r: 255, g: 230, b: 183, color: "#ffe6b7" } },
    { key: "G8I", value: { x: 0.3764, y: 0.3833, r: 255, g: 220, b: 167, color: "#ffdca7" } },
    { key: "K0I", value: { x: 0.3659, y: 0.3706, r: 255, g: 221, b: 181, color: "#ffddb5" } },
    { key: "K1I", value: { x: 0.3693, y: 0.373, r: 255, g: 220, b: 177, color: "#ffdcb1" } },
    { key: "K2I", value: { x: 0.4022, y: 0.4058, r: 255, g: 211, b: 135, color: "#ffd387" } },
    { key: "K3I", value: { x: 0.411, y: 0.4074, r: 255, g: 204, b: 128, color: "#ffcc80" } },
    { key: "K4I", value: { x: 0.4195, y: 0.4128, r: 255, g: 201, b: 118, color: "#ffc976" } },
    { key: "K5I", value: { x: 0.3896, y: 0.3863, r: 255, g: 209, b: 154, color: "#ffd19a" } },
    { key: "M0I", value: { x: 0.3994, y: 0.392, r: 255, g: 204, b: 143, color: "#ffcc8f" } },
    { key: "M1I", value: { x: 0.4048, y: 0.3948, r: 255, g: 202, b: 138, color: "#ffca8a" } },
    { key: "M2I", value: { x: 0.4338, y: 0.4178, r: 255, g: 193, b: 104, color: "#ffc168" } },
    { key: "M3I", value: { x: 0.4254, y: 0.4044, r: 255, g: 192, b: 118, color: "#ffc076" } },
    { key: "M4I", value: { x: 0.4402, y: 0.41, r: 255, g: 185, b: 104, color: "#ffb968" } },
    { key: "B2II", value: { x: 0.253, y: 0.2557, r: 165, g: 192, b: 255, color: "#a5c0ff" } },
    { key: "B5II", value: { x: 0.2593, y: 0.2597, r: 175, g: 195, b: 255, color: "#afc3ff" } },
    { key: "F0II", value: { x: 0.2795, y: 0.288, r: 203, g: 217, b: 255, color: "#cbd9ff" } },
    { key: "F2II", value: { x: 0.2966, y: 0.3069, r: 229, g: 233, b: 255, color: "#e5e9ff" } },
    { key: "G5II", value: { x: 0.3471, y: 0.3611, r: 255, g: 235, b: 203, color: "#ffebcb" } },
    { key: "M3II", value: { x: 0.4185, y: 0.412, r: 255, g: 201, b: 119, color: "#ffc977" } },
    { key: "O7III", value: { x: 0.246, y: 0.2363, r: 158, g: 177, b: 255, color: "#9eb1ff" } },
    { key: "O8III", value: { x: 0.2455, y: 0.2373, r: 157, g: 178, b: 255, color: "#9db2ff" } },
    { key: "O9III", value: { x: 0.246, y: 0.2363, r: 158, g: 177, b: 255, color: "#9eb1ff" } },
    { key: "B0III", value: { x: 0.246, y: 0.2363, r: 158, g: 177, b: 255, color: "#9eb1ff" } },
    { key: "B1III", value: { x: 0.246, y: 0.2363, r: 158, g: 177, b: 255, color: "#9eb1ff" } },
    { key: "B2III", value: { x: 0.247, y: 0.2396, r: 159, g: 180, b: 255, color: "#9fb4ff" } },
    { key: "B3III", value: { x: 0.2509, y: 0.2486, r: 163, g: 187, b: 255, color: "#a3bbff" } },
    { key: "B5III", value: { x: 0.2541, y: 0.2514, r: 168, g: 189, b: 255, color: "#a8bdff" } },
    { key: "B7III", value: { x: 0.2562, y: 0.2542, r: 171, g: 191, b: 255, color: "#abbfff" } },
    { key: "B9III", value: { x: 0.2615, y: 0.2608, r: 178, g: 195, b: 255, color: "#b2c3ff" } },
    { key: "A0III", value: { x: 0.2687, y: 0.2729, r: 188, g: 205, b: 255, color: "#bccdff" } },
    { key: "A3III", value: { x: 0.2691, y: 0.2707, r: 189, g: 203, b: 255, color: "#bdcbff" } },
    { key: "A5III", value: { x: 0.2787, y: 0.2858, r: 202, g: 215, b: 255, color: "#cad7ff" } },
    { key: "A6III", value: { x: 0.2837, y: 0.2903, r: 209, g: 219, b: 255, color: "#d1dbff" } },
    { key: "A7III", value: { x: 0.2843, y: 0.2911, r: 210, g: 219, b: 255, color: "#d2dbff" } },
    { key: "A8III", value: { x: 0.2837, y: 0.2903, r: 209, g: 219, b: 255, color: "#d1dbff" } },
    { key: "A9III", value: { x: 0.2837, y: 0.2903, r: 209, g: 219, b: 255, color: "#d1dbff" } },
    { key: "F0III", value: { x: 0.2865, y: 0.2945, r: 213, g: 222, b: 255, color: "#d5deff" } },
    { key: "F2III", value: { x: 0.3041, y: 0.3151, r: 241, g: 241, b: 255, color: "#f1f1ff" } },
    { key: "F4III", value: { x: 0.3043, y: 0.3137, r: 241, g: 240, b: 255, color: "#f1f0ff" } },
    { key: "F5III", value: { x: 0.3048, y: 0.3145, r: 242, g: 240, b: 255, color: "#f2f0ff" } },
    { key: "F6III", value: { x: 0.3043, y: 0.3137, r: 241, g: 240, b: 255, color: "#f1f0ff" } },
    { key: "F7III", value: { x: 0.3043, y: 0.3137, r: 241, g: 240, b: 255, color: "#f1f0ff" } },
    { key: "G0III", value: { x: 0.3268, y: 0.3384, r: 255, g: 242, b: 233, color: "#fff2e9" } },
    { key: "G1III", value: { x: 0.3265, y: 0.338, r: 255, g: 243, b: 233, color: "#fff3e9" } },
    { key: "G2III", value: { x: 0.3265, y: 0.338, r: 255, g: 243, b: 233, color: "#fff3e9" } },
    { key: "G3III", value: { x: 0.3265, y: 0.338, r: 255, g: 243, b: 233, color: "#fff3e9" } },
    { key: "G4III", value: { x: 0.3265, y: 0.338, r: 255, g: 243, b: 233, color: "#fff3e9" } },
    { key: "G5III", value: { x: 0.3421, y: 0.3541, r: 255, g: 236, b: 211, color: "#ffecd3" } },
    { key: "G6III", value: { x: 0.3392, y: 0.3496, r: 255, g: 236, b: 215, color: "#ffecd7" } },
    { key: "G8III", value: { x: 0.3505, y: 0.3613, r: 255, g: 231, b: 199, color: "#ffe7c7" } },
    { key: "G9III", value: { x: 0.3529, y: 0.3643, r: 255, g: 231, b: 196, color: "#ffe7c4" } },
    { key: "K0III", value: { x: 0.358, y: 0.3663, r: 255, g: 227, b: 190, color: "#ffe3be" } },
    { key: "K1III", value: { x: 0.3653, y: 0.3721, r: 255, g: 223, b: 181, color: "#ffdfb5" } },
    { key: "K2III", value: { x: 0.3698, y: 0.376, r: 255, g: 221, b: 175, color: "#ffddaf" } },
    { key: "K3III", value: { x: 0.3776, y: 0.38, r: 255, g: 216, b: 167, color: "#ffd8a7" } },
    { key: "K4III", value: { x: 0.3947, y: 0.3956, r: 255, g: 211, b: 146, color: "#ffd392" } },
    { key: "K5III", value: { x: 0.4034, y: 0.3966, r: 255, g: 204, b: 138, color: "#ffcc8a" } },
    { key: "K7III", value: { x: 0.3989, y: 0.3975, r: 255, g: 208, b: 142, color: "#ffd08e" } },
    { key: "M0III", value: { x: 0.4088, y: 0.4013, r: 255, g: 203, b: 132, color: "#ffcb84" } },
    { key: "M1III", value: { x: 0.4181, y: 0.4085, r: 255, g: 200, b: 121, color: "#ffc879" } },
    { key: "M2III", value: { x: 0.4215, y: 0.4098, r: 255, g: 198, b: 118, color: "#ffc676" } },
    { key: "M3III", value: { x: 0.4192, y: 0.4108, r: 255, g: 200, b: 119, color: "#ffc877" } },
    { key: "M4III", value: { x: 0.4102, y: 0.4091, r: 255, g: 206, b: 127, color: "#ffce7f" } },
    { key: "M5III", value: { x: 0.4171, y: 0.4035, r: 255, g: 197, b: 124, color: "#ffc57c" } },
    { key: "M6III", value: { x: 0.4312, y: 0.3876, r: 255, g: 178, b: 121, color: "#ffb279" } },
    { key: "M7III", value: { x: 0.4591, y: 0.3966, r: 255, g: 165, b: 97, color: "#ffa561" } },
    { key: "M8III", value: { x: 0.4582, y: 0.398, r: 255, g: 167, b: 97, color: "#ffa761" } },
    { key: "M9III", value: { x: 0.3802, y: 0.4084, r: 255, g: 233, b: 154, color: "#ffe99a" } },
    { key: "B1IV", value: { x: 0.2459, y: 0.2397, r: 157, g: 180, b: 255, color: "#9db4ff" } },
    { key: "B2IV", value: { x: 0.2467, y: 0.2388, r: 159, g: 179, b: 255, color: "#9fb3ff" } },
    { key: "B3IV", value: { x: 0.2523, y: 0.2498, r: 166, g: 188, b: 255, color: "#a6bcff" } },
    { key: "B6IV", value: { x: 0.2591, y: 0.2582, r: 175, g: 194, b: 255, color: "#afc2ff" } },
    { key: "B7IV", value: { x: 0.2552, y: 0.2522, r: 170, g: 189, b: 255, color: "#aabdff" } },
    { key: "B9IV", value: { x: 0.2628, y: 0.2629, r: 180, g: 197, b: 255, color: "#b4c5ff" } },
    { key: "A0IV", value: { x: 0.2622, y: 0.2623, r: 179, g: 197, b: 255, color: "#b3c5ff" } },
    { key: "A3IV", value: { x: 0.2698, y: 0.2734, r: 190, g: 205, b: 255, color: "#becdff" } },
    { key: "A4IV", value: { x: 0.2738, y: 0.2793, r: 195, g: 210, b: 255, color: "#c3d2ff" } },
    { key: "A5IV", value: { x: 0.2857, y: 0.2923, r: 212, g: 220, b: 255, color: "#d4dcff" } },
    { key: "A7IV", value: { x: 0.2715, y: 0.2759, r: 192, g: 207, b: 255, color: "#c0cfff" } },
    { key: "A9IV", value: { x: 0.2932, y: 0.2997, r: 224, g: 227, b: 255, color: "#e0e3ff" } },
    { key: "F0IV", value: { x: 0.2893, y: 0.2966, r: 218, g: 224, b: 255, color: "#dae0ff" } },
    { key: "F2IV", value: { x: 0.2951, y: 0.3029, r: 227, g: 230, b: 255, color: "#e3e6ff" } },
    { key: "F3IV", value: { x: 0.2952, y: 0.3036, r: 227, g: 230, b: 255, color: "#e3e6ff" } },
    { key: "F5IV", value: { x: 0.3044, y: 0.3133, r: 241, g: 239, b: 255, color: "#f1efff" } },
    { key: "F7IV", value: { x: 0.304, y: 0.313, r: 240, g: 239, b: 255, color: "#f0efff" } },
    { key: "F8IV", value: { x: 0.3138, y: 0.328, r: 255, g: 252, b: 253, color: "#fffcfd" } },
    { key: "G0IV", value: { x: 0.319, y: 0.3317, r: 255, g: 248, b: 245, color: "#fff8f5" } },
    { key: "G2IV", value: { x: 0.3212, y: 0.3311, r: 255, g: 244, b: 242, color: "#fff4f2" } },
    { key: "G3IV", value: { x: 0.3319, y: 0.3417, r: 255, g: 238, b: 226, color: "#ffeee2" } },
    { key: "G4IV", value: { x: 0.3232, y: 0.3359, r: 255, g: 245, b: 238, color: "#fff5ee" } },
    { key: "G5IV", value: { x: 0.3404, y: 0.3503, r: 255, g: 235, b: 213, color: "#ffebd5" } },
    { key: "G6IV", value: { x: 0.326, y: 0.3359, r: 255, g: 242, b: 234, color: "#fff2ea" } },
    { key: "G7IV", value: { x: 0.3466, y: 0.3551, r: 255, g: 231, b: 205, color: "#ffe7cd" } },
    { key: "G8IV", value: { x: 0.3422, y: 0.351, r: 255, g: 233, b: 211, color: "#ffe9d3" } },
    { key: "K0IV", value: { x: 0.3592, y: 0.3659, r: 255, g: 225, b: 189, color: "#ffe1bd" } },
    { key: "K1IV", value: { x: 0.3743, y: 0.3753, r: 255, g: 216, b: 171, color: "#ffd8ab" } },
    { key: "K2IV", value: { x: 0.3491, y: 0.3565, r: 255, g: 229, b: 202, color: "#ffe5ca" } },
    { key: "K3IV", value: { x: 0.3764, y: 0.3821, r: 255, g: 219, b: 167, color: "#ffdba7" } },
    { key: "O5V", value: { x: 0.2436, y: 0.2343, r: 155, g: 176, b: 255, color: "#9bb0ff" } },
    { key: "O6V", value: { x: 0.2492, y: 0.2445, r: 162, g: 184, b: 255, color: "#a2b8ff" } },
    { key: "O7V", value: { x: 0.2451, y: 0.2351, r: 157, g: 177, b: 255, color: "#9db1ff" } },
    { key: "O8V", value: { x: 0.2451, y: 0.2351, r: 157, g: 177, b: 255, color: "#9db1ff" } },
    { key: "O9V", value: { x: 0.2437, y: 0.2366, r: 154, g: 178, b: 255, color: "#9ab2ff" } },
    { key: "O9.5V", value: { x: 0.251, y: 0.2472, r: 164, g: 186, b: 255, color: "#a4baff" } },
    { key: "B0V", value: { x: 0.2448, y: 0.2362, r: 156, g: 178, b: 255, color: "#9cb2ff" } },
    { key: "B0.5V", value: { x: 0.253, y: 0.2501, r: 167, g: 188, b: 255, color: "#a7bcff" } },
    { key: "B1V", value: { x: 0.2481, y: 0.2424, r: 160, g: 182, b: 255, color: "#a0b6ff" } },
    { key: "B2V", value: { x: 0.2474, y: 0.2395, r: 160, g: 180, b: 255, color: "#a0b4ff" } },
    { key: "B3V", value: { x: 0.2517, y: 0.2472, r: 165, g: 185, b: 255, color: "#a5b9ff" } },
    { key: "B4V", value: { x: 0.2506, y: 0.2453, r: 164, g: 184, b: 255, color: "#a4b8ff" } },
    { key: "B5V", value: { x: 0.2559, y: 0.2546, r: 170, g: 191, b: 255, color: "#aabfff" } },
    { key: "B6V", value: { x: 0.2563, y: 0.2522, r: 172, g: 189, b: 255, color: "#acbdff" } },
    { key: "B7V", value: { x: 0.2578, y: 0.2555, r: 173, g: 191, b: 255, color: "#adbfff" } },
    { key: "B8V", value: { x: 0.2604, y: 0.2603, r: 177, g: 195, b: 255, color: "#b1c3ff" } },
    { key: "B9V", value: { x: 0.2639, y: 0.2642, r: 181, g: 198, b: 255, color: "#b5c6ff" } },
    { key: "A0V", value: { x: 0.2668, y: 0.2686, r: 185, g: 201, b: 255, color: "#b9c9ff" } },
    { key: "A1V", value: { x: 0.2635, y: 0.265, r: 181, g: 199, b: 255, color: "#b5c7ff" } },
    { key: "A2V", value: { x: 0.2677, y: 0.2701, r: 187, g: 203, b: 255, color: "#bbcbff" } },
    { key: "A3V", value: { x: 0.2706, y: 0.2752, r: 191, g: 207, b: 255, color: "#bfcfff" } },
    { key: "A5V", value: { x: 0.2786, y: 0.2858, r: 202, g: 215, b: 255, color: "#cad7ff" } },
    { key: "A6V", value: { x: 0.2765, y: 0.2825, r: 199, g: 212, b: 255, color: "#c7d4ff" } },
    { key: "A7V", value: { x: 0.2771, y: 0.283, r: 200, g: 213, b: 255, color: "#c8d5ff" } },
    { key: "A8V", value: { x: 0.2864, y: 0.2943, r: 213, g: 222, b: 255, color: "#d5deff" } },
    { key: "A9V", value: { x: 0.2901, y: 0.2971, r: 219, g: 224, b: 255, color: "#dbe0ff" } },
    { key: "F0V", value: { x: 0.2932, y: 0.3018, r: 224, g: 229, b: 255, color: "#e0e5ff" } },
    { key: "F2V", value: { x: 0.3012, y: 0.3125, r: 236, g: 239, b: 255, color: "#ecefff" } },
    { key: "F4V", value: { x: 0.2935, y: 0.2993, r: 224, g: 226, b: 255, color: "#e0e2ff" } },
    { key: "F5V", value: { x: 0.3088, y: 0.3209, r: 248, g: 247, b: 255, color: "#f8f7ff" } },
    { key: "F6V", value: { x: 0.306, y: 0.3154, r: 244, g: 241, b: 255, color: "#f4f1ff" } },
    { key: "F7V", value: { x: 0.3075, y: 0.3168, r: 246, g: 243, b: 255, color: "#f6f3ff" } },
    { key: "F8V", value: { x: 0.3147, y: 0.324, r: 255, g: 247, b: 252, color: "#fff7fc" } },
    { key: "F9V", value: { x: 0.3149, y: 0.3247, r: 255, g: 247, b: 252, color: "#fff7fc" } },
    { key: "G0V", value: { x: 0.3149, y: 0.3257, r: 255, g: 248, b: 252, color: "#fff8fc" } },
    { key: "G1V", value: { x: 0.3172, y: 0.3278, r: 255, g: 247, b: 248, color: "#fff7f8" } },
    { key: "G2V", value: { x: 0.3211, y: 0.3323, r: 255, g: 245, b: 242, color: "#fff5f2" } },
    { key: "G4V", value: { x: 0.3293, y: 0.3403, r: 255, g: 241, b: 229, color: "#fff1e5" } },
    { key: "G5V", value: { x: 0.326, y: 0.3382, r: 255, g: 244, b: 234, color: "#fff4ea" } },
    { key: "G6V", value: { x: 0.3257, y: 0.338, r: 255, g: 244, b: 235, color: "#fff4eb" } },
    { key: "G7V", value: { x: 0.3257, y: 0.338, r: 255, g: 244, b: 235, color: "#fff4eb" } },
    { key: "G8V", value: { x: 0.3346, y: 0.3445, r: 255, g: 237, b: 222, color: "#ffedde" } },
    { key: "G9V", value: { x: 0.3352, y: 0.3469, r: 255, g: 239, b: 221, color: "#ffefdd" } },
    { key: "K0V", value: { x: 0.3352, y: 0.3458, r: 255, g: 238, b: 221, color: "#ffeedd" } },
    { key: "K1V", value: { x: 0.3603, y: 0.3664, r: 255, g: 224, b: 188, color: "#ffe0bc" } },
    { key: "K2V", value: { x: 0.3535, y: 0.3597, r: 255, g: 227, b: 196, color: "#ffe3c4" } },
    { key: "K3V", value: { x: 0.3555, y: 0.3571, r: 255, g: 222, b: 195, color: "#ffdec3" } },
    { key: "K4V", value: { x: 0.367, y: 0.3645, r: 255, g: 216, b: 181, color: "#ffd8b5" } },
    { key: "K5V", value: { x: 0.3836, y: 0.3798, r: 255, g: 210, b: 161, color: "#ffd2a1" } },
    { key: "K7V", value: { x: 0.403, y: 0.3875, r: 255, g: 199, b: 142, color: "#ffc78e" } },
    { key: "K8V", value: { x: 0.3746, y: 0.3661, r: 255, g: 209, b: 174, color: "#ffd1ae" } },
    { key: "M0V", value: { x: 0.4073, y: 0.3876, r: 255, g: 195, b: 139, color: "#ffc38b" } },
    { key: "M1V", value: { x: 0.4011, y: 0.3927, r: 255, g: 204, b: 142, color: "#ffcc8e" } },
    { key: "M2V", value: { x: 0.413, y: 0.3958, r: 255, g: 196, b: 131, color: "#ffc483" } },
    { key: "M3V", value: { x: 0.4089, y: 0.4075, r: 255, g: 206, b: 129, color: "#ffce81" } },
    { key: "M4V", value: { x: 0.4137, y: 0.4043, r: 255, g: 201, b: 127, color: "#ffc97f" } },
    { key: "M5V", value: { x: 0.4227, y: 0.4218, r: 255, g: 204, b: 111, color: "#ffcc6f" } },
    { key: "M6V", value: { x: 0.4271, y: 0.4123, r: 255, g: 195, b: 112, color: "#ffc370" } },
    { key: "M8V", value: { x: 0.4276, y: 0.4176, r: 255, g: 198, b: 109, color: "#ffc66d" } }
];
/* this is where we prepare the static matrix (Space.StarColorFactory.Matrix) to efficient color lookup. */
StarColor.Matrix = StarColor._buildIndex(StarColor.ColorTable);
//# sourceMappingURL=StarColor.js.map

/***/ }),

/***/ "./src/build/Space/index.js":
/*!**********************************!*\
  !*** ./src/build/Space/index.js ***!
  \**********************************/
/*! exports provided: CelestialNodeType, MorganKeenanClass, SpectralClass, StarColor, AxialTilt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ICelestialObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ICelestialObject */ "./src/build/Space/ICelestialObject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CelestialNodeType", function() { return _ICelestialObject__WEBPACK_IMPORTED_MODULE_0__["CelestialNodeType"]; });

/* harmony import */ var _SpectralClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpectralClass */ "./src/build/Space/SpectralClass.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MorganKeenanClass", function() { return _SpectralClass__WEBPACK_IMPORTED_MODULE_1__["MorganKeenanClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpectralClass", function() { return _SpectralClass__WEBPACK_IMPORTED_MODULE_1__["SpectralClass"]; });

/* harmony import */ var _StarColor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StarColor */ "./src/build/Space/StarColor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StarColor", function() { return _StarColor__WEBPACK_IMPORTED_MODULE_2__["StarColor"]; });

/* harmony import */ var _AxialTilt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AxialTilt */ "./src/build/Space/AxialTilt.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AxialTilt", function() { return _AxialTilt__WEBPACK_IMPORTED_MODULE_3__["AxialTilt"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/build/Units.js":
/*!****************************!*\
  !*** ./src/build/Units.js ***!
  \****************************/
/*! exports provided: Unit, Quantity, QuantityRange, Timespan, Temperature, Mass, Power, Voltage, Current, Luminosity, Volume, Angle, Distance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Unit", function() { return Unit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quantity", function() { return Quantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuantityRange", function() { return QuantityRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timespan", function() { return Timespan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Temperature", function() { return Temperature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mass", function() { return Mass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Power", function() { return Power; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Voltage", function() { return Voltage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Current", function() { return Current; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Luminosity", function() { return Luminosity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Volume", function() { return Volume; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Angle", function() { return Angle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Distance", function() { return Distance; });
/* harmony import */ var _Math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Math */ "./src/build/Math.js");

class Unit {
    constructor(name, symbol, value = 0, converter = null) {
        this.name = name;
        this.symbol = symbol;
        this.value = value;
        this.converter = converter;
    }
}
const _defaultDecimalPrecision = 6;
class Quantity {
    constructor(value, unit) {
        if (value instanceof Quantity) {
            var q = value;
            this.value = q.value;
            this._unit = q._unit;
        }
        else {
            this.value = value;
            this._unit = unit;
        }
    }
    static round(value, decimalPrecision = _defaultDecimalPrecision) {
        var dp = decimalPrecision || _defaultDecimalPrecision;
        return Math.round(value * Math.pow(10, dp)) / Math.pow(10, dp);
    }
    get unit() {
        return this._unit;
    }
    set unit(target) {
        if (this._unit !== target) {
            this.tryConvert(target);
        }
    }
    tryConvert(targetUnit) {
        if (this._unit.converter) {
            if (this._unit.converter.accept(this.unit) === false) {
                return false;
            }
            this.value = this._unit.converter.convert(this.value, targetUnit);
            this._unit = targetUnit;
            return true;
        }
        if (targetUnit.value && targetUnit.symbol !== this._unit.symbol) {
            this.value *= (this._unit.value / targetUnit.value);
            this._unit = targetUnit;
            return true;
        }
        return false;
    }
    clone(unit) {
        var n = new (this.constructor(this.value, this._unit));
        if (unit) {
            n.tryConvert(unit);
        }
        return n;
    }
    getValue(unit) {
        if (unit && unit !== this._unit) {
            if (this._unit.converter) {
                if (this._unit.converter.accept(unit)) {
                    return this._unit.converter.convert(this.value, unit);
                }
            }
            if (unit.value && unit.symbol !== this._unit.symbol) {
                return this.value * (this._unit.value / unit.value);
            }
        }
        return this.value;
    }
    equals(v) {
        if (v._unit === this._unit) {
            return this.value === v.value;
        }
        return this.value === v.getValue(this._unit);
    }
    subtract(v) {
        return this.value - ((v._unit === this._unit) ? v.value : v.getValue(this._unit));
    }
    add(v) {
        return this.value + ((v._unit === this._unit) ? v.value : v.getValue(this._unit));
    }
    UnitForSymbol(str) {
        return null;
    }
    tryParse(str) {
        if (str) {
            var parts = str.split(" ");
            var v = parseFloat(str);
            if (v === NaN) {
                return false;
            }
            this.value = v;
            if (parts.length > 1) {
                this._unit = this.UnitForSymbol(parts[1]);
            }
            else {
                this._unit = null;
            }
            return true;
        }
        return false;
    }
}
class QuantityRange extends _Math__WEBPACK_IMPORTED_MODULE_0__["AbstractRange"] {
    computeDelta(a, b) {
        return b && a ? b.subtract(a) : 0;
    }
}
class Timespan extends Quantity {
    static ForParameter(value, defaultValue, defaultUnit) {
        return value ? new Timespan(value, defaultUnit) : new Timespan(defaultValue, defaultUnit);
    }
    static UnitForSymbol(str) {
        return Timespan.Units[str] || null;
    }
}
Timespan.Units = {
    ys: new Unit("yoctosecond", "ys", 10E-24),
    zs: new Unit("zeptosecond", "zs", 10E-21),
    as: new Unit("attosecond", "as", 10E-18),
    fs: new Unit("femtosecond", "fs", 10E-15),
    ps: new Unit("picosecond", "ps", 10E-12),
    ns: new Unit("nanosecond", "ns", 10E-9),
    tick: new Unit("tick", "ns", 10E-7),
    mis: new Unit("microsecond", "mis", 10E-6),
    ms: new Unit("millisecond", "ms", 10E-3),
    s: new Unit("second", "s", 1),
    Min: new Unit("minute", "m", 60),
    Hour: new Unit("hour", "h", 3600),
    Day: new Unit("day", "d", 86400),
    Week: new Unit("week", "w", 86400 * 7),
    Yr: new Unit("year", "y", 86400 * 365.25),
    Cy: new Unit("century", "c", 86400 * 36525)
};
// tslint:disable: no-use-before-declare
class KConverter {
    accept(unit) { return unit === Temperature.Units.c || unit === Temperature.Units.f; }
    convert(value, unit) {
        switch (unit) {
            case (Temperature.Units.c): return value - Temperature.Units.k.value;
            case (Temperature.Units.f): return (value - Temperature.Units.k.value) * 1.8 + 32.;
            default: return value;
        }
    }
}
class CConverter {
    accept(unit) { return unit === Temperature.Units.k || unit === Temperature.Units.f; }
    convert(value, unit) {
        switch (unit) {
            case (Temperature.Units.k): return value + Temperature.Units.k.value;
            case (Temperature.Units.f): return value * 1.8 + 32;
            default: return value;
        }
    }
}
class FConverter {
    accept(unit) { return unit === Temperature.Units.k || unit === Temperature.Units.c; }
    convert(value, unit) {
        switch (unit) {
            case (Temperature.Units.k): return ((value - 32) / 1.8) + Temperature.Units.k.value;
            case (Temperature.Units.c): return (value - 32) / 1.8;
            default: return value;
        }
    }
}
class Temperature extends Quantity {
    static ForParameter(value, defaultValue, defaultUnit) {
        return value ? new Temperature(value, defaultUnit) : new Temperature(defaultValue, defaultUnit);
    }
    static UnitForSymbol(str) {
        return Temperature.Units[str] || null;
    }
}
Temperature.Units = {
    k: new Unit("kelvin", "k", -273.15, new KConverter()),
    c: new Unit("celsius", "c", 1, new CConverter()),
    f: new Unit("fahrenheit", "f", 33.8, new FConverter())
};
class Mass extends Quantity {
    static ForParameter(value, defaultValue, defaultUnit) {
        return value ? new Mass(value, defaultUnit) : new Mass(defaultValue, defaultUnit);
    }
    static UnitForSymbol(str) {
        return Mass.Units[str] || null;
    }
}
Mass.Units = {
    u: new Unit("atomic mass unit", "u", 1.66E-27),
    pm: new Unit("plank mass", "pm", 1E-8),
    mg: new Unit("microgram", "µg", 1E-6),
    g: new Unit("gram", "g", 1E-3),
    pound: new Unit("pound", "lb", 0.45359237),
    kg: new Unit("kilogram", "kg", 1),
    T: new Unit("Ton", "T", 1000),
    Sm: new Unit("solar mass", "Sm", 1.98855E30)
};
class Power extends Quantity {
    static ForParameter(value, defaultValue, defaultUnit) {
        return value ? new Power(value, defaultUnit) : new Power(defaultValue, defaultUnit);
    }
    static UnitForSymbol(str) {
        return Power.Units[str] || null;
    }
}
Power.Units = {
    watt: new Unit("watt", "w", 1),
    Kwatt: new Unit("Kwatt", "kw", 1000)
};
class Voltage extends Quantity {
    static ForParameter(value, defaultValue, defaultUnit) {
        return value ? new Voltage(value, defaultUnit) : new Voltage(defaultValue, defaultUnit);
    }
    static UnitForSymbol(str) {
        return Voltage.Units[str] || null;
    }
}
Voltage.Units = {
    volt: new Unit("volt", "v", 1)
};
class Current extends Quantity {
    static ForParameter(value, defaultValue, defaultUnit) {
        return value ? new Current(value, defaultUnit) : new Current(defaultValue, defaultUnit);
    }
    static UnitForSymbol(str) {
        return Current.Units[str] || null;
    }
}
Current.Units = {
    amp: new Unit("amp", "a", 1)
};
class Luminosity extends Quantity {
    static ForParameter(value, defaultValue, defaultUnit) {
        return value ? new Luminosity(value, defaultUnit) : new Luminosity(defaultValue, defaultUnit);
    }
    static UnitForSymbol(str) {
        return Luminosity.Units[str] || null;
    }
}
Luminosity.Units = {
    watt: new Unit("watt", "w", 1),
    Lsun: new Unit("solar luminosity", "Lsun", 3.846E26)
};
class Volume extends Quantity {
    static ForParameter(value, defaultValue, defaultUnit) {
        return value ? new Volume(value, defaultUnit) : new Volume(defaultValue, defaultUnit);
    }
    static UnitForSymbol(str) {
        return Volume.Units[str] || null;
    }
}
Volume.Units = {
    m3: new Unit("cubic meter", "m3", 1)
};
class Angle extends Quantity {
    static ForParameter(value, defaultValue, defaultUnit) {
        return value ? new Angle(value, defaultUnit) : new Angle(defaultValue, defaultUnit);
    }
    static UnitForSymbol(str) {
        return Angle.Units[str] || null;
    }
}
Angle.PIBY2 = Math.PI / 2.;
Angle.PIBY4 = Math.PI / 4.;
Angle.DE2RA = Math.PI / 180.;
Angle.RA2DE = 180. / Math.PI;
Angle.DE2RABY2 = Math.PI / 360.;
Angle.Units = {
    d: new Unit("degre", "d", 1),
    r: new Unit("radian", "r", Angle.RA2DE)
};
class Distance extends Quantity {
    static ForParameter(value, defaultValue, defaultUnit) {
        return value ? new Distance(value, defaultUnit) : new Distance(defaultValue, defaultUnit);
    }
    UnitForSymbol(str) {
        return Distance.Units[str] || null;
    }
}
Distance.Units = {
    ym: new Unit("yoctometer", "ym", 10E-24),
    zm: new Unit("zeptometer", "zm", 10E-21),
    am: new Unit("attometer", "am", 10E-18),
    fm: new Unit("femtometer", "fm", 10E-15),
    pm: new Unit("picometer", "pm", 10E-12),
    nm: new Unit("nanometer", "nm", 10E-9),
    mim: new Unit("micrometer", "mim", 10E-6),
    mm: new Unit("millimeter", "mm", 10E-3),
    cm: new Unit("centimeter", "cm", 10E-2),
    dm: new Unit("decimeter", "dm", 10E-1),
    m: new Unit("meter", "m", 1),
    Mi: new Unit("mile", "Mi", 1.609343502101154),
    Nmi: new Unit("nmile", "Nmi", 1.8519994270282407189),
    Dam: new Unit("decameter", "Dm", 10),
    Hm: new Unit("hectometer", "Hm", 100),
    Km: new Unit("kilometer", "Km", 1000),
    Sr: new Unit("solar radius", "Sr", 6957E5),
    Mm: new Unit("megameter", "Mn", 10E6),
    Ls: new Unit("light second", "Ls", 299792458),
    Gm: new Unit("gigameter", "Gm", 10E9),
    Au: new Unit("astronomical unit", "Au", 1.4960E11),
    Tm: new Unit("terameter", "Tm", 10E12),
    Pm: new Unit("petameter", "Pm", 10E15),
    Ly: new Unit("light year", "Ly", 9.4607E15),
    Pc: new Unit("parsec", "Pc", 3.0857E16),
    Em: new Unit("exameter", "Em", 10E18),
    Zm: new Unit("zettameter", "Zm", 10E21),
    Ym: new Unit("yottameter", "Ym", 10E24)
};
//# sourceMappingURL=Units.js.map

/***/ }),

/***/ "./src/build/index.js":
/*!****************************!*\
  !*** ./src/build/index.js ***!
  \****************************/
/*! exports provided: EventEmitter, AbstractRange, Range, Unit, Quantity, QuantityRange, Timespan, Temperature, Mass, Power, Voltage, Current, Luminosity, Volume, Angle, Distance, RGBAColor, HSLColor, PlatonicSolids, MeshFactory, MeshProcessor, CelestialNodeType, MorganKeenanClass, SpectralClass, StarColor, AxialTilt, BabylonMeshExporter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Events */ "./src/build/Events.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventEmitter", function() { return _Events__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]; });

/* harmony import */ var _Math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Math */ "./src/build/Math.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbstractRange", function() { return _Math__WEBPACK_IMPORTED_MODULE_1__["AbstractRange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Range", function() { return _Math__WEBPACK_IMPORTED_MODULE_1__["Range"]; });

/* harmony import */ var _Units__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Units */ "./src/build/Units.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Unit", function() { return _Units__WEBPACK_IMPORTED_MODULE_2__["Unit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Quantity", function() { return _Units__WEBPACK_IMPORTED_MODULE_2__["Quantity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuantityRange", function() { return _Units__WEBPACK_IMPORTED_MODULE_2__["QuantityRange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Timespan", function() { return _Units__WEBPACK_IMPORTED_MODULE_2__["Timespan"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Temperature", function() { return _Units__WEBPACK_IMPORTED_MODULE_2__["Temperature"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mass", function() { return _Units__WEBPACK_IMPORTED_MODULE_2__["Mass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power", function() { return _Units__WEBPACK_IMPORTED_MODULE_2__["Power"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Voltage", function() { return _Units__WEBPACK_IMPORTED_MODULE_2__["Voltage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Current", function() { return _Units__WEBPACK_IMPORTED_MODULE_2__["Current"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Luminosity", function() { return _Units__WEBPACK_IMPORTED_MODULE_2__["Luminosity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Volume", function() { return _Units__WEBPACK_IMPORTED_MODULE_2__["Volume"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Angle", function() { return _Units__WEBPACK_IMPORTED_MODULE_2__["Angle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Distance", function() { return _Units__WEBPACK_IMPORTED_MODULE_2__["Distance"]; });

/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Color */ "./src/build/Color.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RGBAColor", function() { return _Color__WEBPACK_IMPORTED_MODULE_3__["RGBAColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HSLColor", function() { return _Color__WEBPACK_IMPORTED_MODULE_3__["HSLColor"]; });

/* harmony import */ var _Geometry_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Geometry/index */ "./src/build/Geometry/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlatonicSolids", function() { return _Geometry_index__WEBPACK_IMPORTED_MODULE_4__["PlatonicSolids"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MeshFactory", function() { return _Geometry_index__WEBPACK_IMPORTED_MODULE_4__["MeshFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MeshProcessor", function() { return _Geometry_index__WEBPACK_IMPORTED_MODULE_4__["MeshProcessor"]; });

/* harmony import */ var _Space_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Space/index */ "./src/build/Space/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CelestialNodeType", function() { return _Space_index__WEBPACK_IMPORTED_MODULE_5__["CelestialNodeType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MorganKeenanClass", function() { return _Space_index__WEBPACK_IMPORTED_MODULE_5__["MorganKeenanClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpectralClass", function() { return _Space_index__WEBPACK_IMPORTED_MODULE_5__["SpectralClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StarColor", function() { return _Space_index__WEBPACK_IMPORTED_MODULE_5__["StarColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AxialTilt", function() { return _Space_index__WEBPACK_IMPORTED_MODULE_5__["AxialTilt"]; });

/* harmony import */ var _Babylon_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Babylon/index */ "./src/build/Babylon/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BabylonMeshExporter", function() { return _Babylon_index__WEBPACK_IMPORTED_MODULE_6__["BabylonMeshExporter"]; });








//# sourceMappingURL=index.js.map

/***/ })

/******/ });
//# sourceMappingURL=space.1.0.0.js.map