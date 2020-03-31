import {Temperature,Distance,Mass,Luminosity, QuantityRange as QR} from "./../Units"

  
    export type MKMajor = "O" | "B" | "A" | "F" | "G" | "K" | "M" ; 
    export type MKMinor = number ;
    export type MKLuminosity = "Ia+" | "I" | "II" | "III" | "IV" | "V" | "sd" | "D"; 
    export type MorganKeenanName = string ;

    export class MorganKeenanClass {

        private static pattern:RegExp = /^(O|B|A|F|G|K|M)([0-9](.[0-9])?)((Ia\+|I|II|III|IV|V|sd|D))?$/;
        public static LuminosityNames : MKLuminosity[] = ["Ia+" , "I" , "II" , "III" , "IV" , "V" , "sd" , "D"]; 

        public static Parse(str:string): MorganKeenanClass{
            let a:RegExpExecArray = this.pattern.exec(str);
            if( a) {
                let major = <MKMajor> a[0];
                let minor = parseFloat(a[1]);
                let lum = <MKLuminosity>(a.length > 2 ? a[2] : undefined);
                return new MorganKeenanClass(major,minor,lum);
            }
            return null;
        }

        _major:MKMajor;
        _minor:MKMinor;
        _lum:MKLuminosity;

        public constructor(major:MKMajor, minor:MKMinor, luminosity:MKLuminosity = undefined) {
            this._major = major;
            this._minor = minor ;
            this._lum = luminosity;
        }

        public get major() : MKMajor {
            return this._major;
        }

        public get minor() : MKMinor {
            return this._minor;
        }

        public get luminosity() : MKLuminosity {
            return this._lum;
        }

        public get fullName():string {
            return this._major + this._minor + this._lum? "(" + this._lum +")" :"";
        }
    }

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
    export class SpectralClass {
    
        public static O = new SpectralClass("O",
            new QR(new Temperature(30000, Temperature.Units.k),
                              new Temperature(60000, Temperature.Units.k)),
            "blue",
            "blue",
            new QR(new Mass(16, Mass.Units.Sm)),
            new QR(new Distance(6.6, Distance.Units.Sr)),
            new QR(new Luminosity(30000, Luminosity.Units.Lsun)),
            "weak",
            0.00003);

        public static B = new SpectralClass("B",
            new QR(  new Temperature(10000, Temperature.Units.k),
                                        new Temperature(30000, Temperature.Units.k)),
            "blue white",
            "deep blue white",
            new QR(new Mass(2.1, Mass.Units.Sm),
                              new Mass(16, Mass.Units.Sm)),
            new QR(new Distance(1.8, Distance.Units.Sr),
                              new Distance(6.6, Distance.Units.Sr)),
            new QR(new Luminosity(25, Luminosity.Units.Lsun),
                              new Luminosity(30000, Luminosity.Units.Lsun)),
            "weak",
            0.13);

        public static A = new SpectralClass("A",
            new QR(new Temperature(7500, Temperature.Units.k),
                                new Temperature(10000, Temperature.Units.k)),
            "white",
            "blue white",
            new QR(new Mass(1.4, Mass.Units.Sm),
                                new Mass(2.1, Mass.Units.Sm)),
            new QR(new Distance(1.4, Distance.Units.Sr),
                                new Distance(1.8, Distance.Units.Sr)),
            new QR(new Luminosity(5, Luminosity.Units.Lsun),
                                new Luminosity(25, Luminosity.Units.Lsun)),
            "strong",
            0.6);

        public static F = new SpectralClass("F",
            new QR(new Temperature(6000, Temperature.Units.k),
                                new Temperature(7500, Temperature.Units.k)),
            "yellow white",
            "white",
            new QR(new Mass(1.04, Mass.Units.Sm),
                                new Mass(1.4, Mass.Units.Sm)),
            new QR(new Distance(1.15, Distance.Units.Sr),
                                new Distance(1.4, Distance.Units.Sr)),
            new QR(new Luminosity(1.5, Luminosity.Units.Lsun),
                                new Luminosity(5, Luminosity.Units.Lsun)),
            "medium",
            3);

        public static G = new SpectralClass("G",
            new QR(new Temperature(5200, Temperature.Units.k),
                                new Temperature(6000, Temperature.Units.k)),
            "yellow",
            "yello white",
            new QR(new Mass(0.8, Mass.Units.Sm),
                                new Mass(1.04, Mass.Units.Sm)),
            new QR(new Distance(0.96, Distance.Units.Sr),
                                new Distance(1.15, Distance.Units.Sr)),
            new QR(new Luminosity(0.6, Luminosity.Units.Lsun),
                                new Luminosity(1.5, Luminosity.Units.Lsun)),
            "weak",
            7.6);

        public static K = new SpectralClass("K",
            new QR(new Temperature(3700, Temperature.Units.k),
                                new Temperature(5200, Temperature.Units.k)),
            "orange	pale",
            "yello orange",
            new QR(new Mass(0.45, Mass.Units.Sm),
                                new Mass(0.8, Mass.Units.Sm)),
            new QR(new Distance(0.7, Distance.Units.Sr),
                                new Distance(0.96, Distance.Units.Sr)),
            new QR(new Luminosity(0.08, Luminosity.Units.Lsun),
                                new Luminosity(0.6, Luminosity.Units.Lsun)),
            "very weak",
            12.1);

        public static M = new SpectralClass("M",
            new QR(new Temperature(2400, Temperature.Units.k),
                                new Temperature(3700, Temperature.Units.k)),
            "red light",
            "orange red",
            new QR(new Mass(0.08, Mass.Units.Sm),
                                new Mass(0.45, Mass.Units.Sm)),
            new QR(null, new Distance(0.7, Distance.Units.Sr)),
            new QR(null, new Luminosity(0.8, Luminosity.Units.Lsun)),
            "very weak",
            76.45);

        public static HarwardClassificationIndex:{[k in MKMajor]:SpectralClass} = {
            "O": SpectralClass.O,
            "B": SpectralClass.B,
            "A": SpectralClass.A,
            "F": SpectralClass.F,
            "G": SpectralClass.G,
            "K": SpectralClass.K,
            "M": SpectralClass.M
        };

        public static HarwardClassification:SpectralClass[] = [
            SpectralClass.O,
            SpectralClass.B,
            SpectralClass.A,
            SpectralClass.F,
            SpectralClass.G,
            SpectralClass.K,
            SpectralClass.M
        ];
    
        static TemperatureRange:QR<Temperature> = new QR(
            new Temperature(2400, Temperature.Units.k),
            new Temperature(60000, Temperature.Units.k));


        static ClassFromTemperature(temperature:Temperature|number): SpectralClass {
            var temp:Temperature = new Temperature(temperature,Temperature.Units.k);
            let c:SpectralClass[]  =  SpectralClass.HarwardClassification;

            for(var i:number=0;i !== c.length;i++) {
                let sc:SpectralClass = c[i];
                var min:Temperature = sc.effectiveTemperature.min;
                var max:Temperature = sc.effectiveTemperature.max;
                if( (!min || min.value<= temp.value) && (!max || max.value > temp.value) ) {
                    return  sc[i];
                }
            }
        
            return null ;
        }

        public constructor( public name:MKMajor,
                            public effectiveTemperature:QR<Temperature>,
                            public VegaRelativeColorLabel:string,
                            public chromacityLabel:string,
                            public mass:QR<Mass>,
                            public radius:QR<Distance>,
                            public luminosity:QR<Luminosity>,
                            public hydrogenLine:string,
                            public fractionOfStars:number) {
                            }

    }
