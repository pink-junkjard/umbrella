import type { Predicate } from "@thi.ng/api";
import { isPlainObject, isSet } from "@thi.ng/checks";
import type { CharSet, LitParser } from "../api";
import { satisfy, satisfyD } from "./satisfy";

export const oneOfP = (
    opts: string | any[] | Set<any> | CharSet
): Predicate<any> =>
    isSet(opts)
        ? (x) => opts.has(x)
        : isPlainObject(opts)
        ? (x) => (<any>opts)[x]
        : (x) => opts.indexOf(x) >= 0;

export function oneOf(opts: string | CharSet, id?: string): LitParser<string>;
export function oneOf<T>(opts: T[] | Set<T>, id?: string): LitParser<T>;
export function oneOf(opts: string | CharSet | any[] | Set<any>, id = "oneOf") {
    return satisfy(oneOfP(opts), id);
}

export function oneOfD(opts: string | CharSet): LitParser<string>;
export function oneOfD<T>(opts: T[] | Set<T>): LitParser<T>;
export function oneOfD(opts: string | CharSet | any[] | Set<any>) {
    return satisfyD(oneOfP(opts));
}
