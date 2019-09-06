
import endsWith from "./index";

test("works", () => {
  expect(endsWith("period")("I have no period")).toBeTruthy();
});

test("works", () => {
  expect(endsWith("I have")("I have no period.")).toBeFalsy();
});
