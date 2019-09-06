
import endsWith from "./index.ts";

test(() => {
  expect(endsWith("period")("I have no period")).toBeTruthy();
});

test(() => {
  expect(endsWith("I have")("I have no period.")).toBeFalsy();
});
