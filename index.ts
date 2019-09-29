import {test} from "ramda";
import escapeStringRegexp from "escape-string-regexp";

export default function endsWith (subset: string | RegExp) {
  return function endsWithSubset (set: string) {
    return test(new RegExp(`${escapeStringRegexp(subset)}$`))(set);
  };
}
