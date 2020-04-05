import matchesRegExp from "@unction/matchesregexp";
import escapeStringRegexp from "escape-string-regexp";

export default function endsWith (subset: string) {
  return function endsWithSubset (set: string) {
    return matchesRegExp(new RegExp(`${escapeStringRegexp(subset)}$`))(set);
  };
}
