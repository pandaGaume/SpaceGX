import {ParametricValue} from "./Math"

export class RGBAColor {

    public constructor(public r:number, public g:number, public b:number, public a:number = 1){

    }

    public toHSL() : HSLColor {
        var r = this.r / 255;
        var g = this.g / 255;
        var b = this.b / 255;

        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h:number, s:number, l:number = (max + min) / 2;

        if (max == min) {
            h = s = 0; // achromatic
        } else {
            var d = max - min;
            s = (l > 0.5 ? d / (2 - max - min) : d / (max + min));
            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }

        return new HSLColor(h, s, l);      
    }

    public interpolate(color:RGBAColor, t: ParametricValue, keepAlpha:boolean = true) : RGBAColor {
        t = t || .5;
        let r:number = Math.round(this.r + t * (color.r - this.r));
        let g:number = Math.round(this.g + t * (color.g - this.g));
        let b:number = Math.round(this.b + t * (color.b - this.b));
        let a:number = keepAlpha? this.a : Math.round(this.a + t * (color.a - this.a));
        return new RGBAColor(r,g,b,a);
    }

    public interpolateInPlace(color:RGBAColor, t: ParametricValue,keepAlpha:boolean = true) : RGBAColor {
        t = t || .5;
        this.r = Math.round(this.r + t * (color.r - this.r));
        this.g = Math.round(this.g + t * (color.g - this.g));
        this.b = Math.round(this.b + t * (color.b - this.b));
        this.a = keepAlpha? this.a : Math.round(this.a + t * (color.a - this.a));
        return this;
    }    
}

export class HSLColor {

    private static hue2rgb(p:number, q:number, t:number): number {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
    }

    public constructor(public h:number, public s:number, public l:number){

    }

    public toRGB(): RGBAColor {
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
    };
}
