import { Vec2Like } from "./api";
import { fattribs, fpoints } from "./format";

export const polyline = (pts: Vec2Like[], attribs?: any): any[] => [
    "polyline",
    fattribs({
        fill: "none",
        points: fpoints(pts),
        ...attribs
    })
];
