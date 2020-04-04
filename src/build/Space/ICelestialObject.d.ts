import { Temperature, Distance, Angle, Timespan } from './../Units';
import { RGBAColor } from './../Color';
import { AxialTilt } from './AxialTilt';
import { SpectralClass } from './SpectralClass';
export declare enum CelestialNodeType {
    HUBBLE_RADIUS = 0,
    SUPER_CLUSTER = 1,
    CLUSTER = 2,
    GROUP = 3,
    GALAXY = 4,
    SYSTEM = 5,
    STAR = 6,
    PLANET = 7,
    MOON = 8,
    ASTEROIDE = 9,
    COMET = 10,
    ARTIFICIAL = 11,
    VOID = 12,
    BLACK_HOLE = 13,
    RING = 14
}
export interface ICelestialObjectShape {
}
export interface IEllipsoidShape {
    x: Distance;
    y: Distance;
    z: Distance;
}
export interface ICelestialObjectMotion {
}
export interface ICelestialObjectCompoundMotion extends ICelestialObjectMotion {
    motions: Iterable<ICelestialObjectMotion>;
}
export interface ISpin extends ICelestialObjectMotion {
    axis: AxialTilt;
}
export interface ISingleOrbit extends ICelestialObjectMotion {
    body: ICelestialBody;
    focus: ICelestialBody;
}
export interface IKeplerOrbit extends ISingleOrbit {
    semiMinorAxis: Distance;
    eccentricity: Distance;
    periapsisDistance: Distance;
    periapsisTime: number;
    periapsisAngle: Angle;
    inclination: Angle;
    period: Timespan;
    apoapsis: Distance;
    meanAngularSpeed: Distance;
}
export interface ICelestialObject {
    celestialType: CelestialNodeType;
    id: string;
    name: string;
}
export interface ICelestialBody extends ICelestialObject {
    shape: ICelestialObjectShape;
    motions: ICelestialObjectMotion;
    material: IMaterial;
    atmosphere?: IAtmosphere;
}
export interface IMoon extends ICelestialBody {
}
export interface IAtmosphereLayer {
    level: Range;
    pressure: Range;
}
export interface IAtmosphere {
    layers: Array<IAtmosphereLayer>;
}
export interface IMaterial {
}
export interface IPlanet extends ICelestialBody {
    moons(predicate?: (n: IMoon) => boolean): Iterable<IMoon>;
    rings(predicate?: (n: IRing) => boolean): Iterable<IRing>;
}
export interface IStar extends ICelestialBody {
    temperature: Temperature;
    spectralClass: SpectralClass;
    color: RGBAColor;
}
export interface IRing extends ICelestialObject {
}
export interface IAsteroid extends ICelestialBody {
}
export interface ISystem extends ICelestialObject {
    stars(predicate?: (n: IStar) => boolean): Iterable<IStar>;
    planets(predicate?: (n: IPlanet) => boolean): Iterable<IPlanet>;
    bodies(predicate?: (n: ICelestialBody) => boolean): Iterable<ICelestialBody>;
    objects(predicate?: (n: ICelestialObject) => boolean): Iterable<ICelestialObject>;
}
export interface IGalaxy extends ICelestialObject {
    systems(predicate?: (n: ISystem) => boolean): Iterable<ISystem>;
}
