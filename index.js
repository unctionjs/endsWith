import { test } from "ramda";
import escapeStringRegexp from "escape-string-regexp";
export default function endsWith(subset) {
  const escaped = escapeStringRegexp(subset);
  const ending = `${escaped}$`;
  return function endsWithSubset(set) {
    return test(new RegExp(ending))(set);
  };
}
