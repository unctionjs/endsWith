import {test} from "ramda";
import escapeStringRegexp from "escape-string-regexp";
import {TextType} from "./types";

export default function endsWith (subset: TextType | RegExp) {
  return function endsWithSubset (set: TextType) {
    return test(new RegExp(`${escapeStringRegexp(subset)}$`))(set);
  };
}
