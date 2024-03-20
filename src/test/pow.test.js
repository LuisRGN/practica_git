const { powNumber } = require("../service/pow");

describe("Test for powNumber", () => {
  test("pow number to x power", () => {
    expect(powNumber(2, 2)).toBe(4);
  });
  test("sum two negatives numbers", () => {
    expect(powNumber(2, 3)).toBe(8);
  });
});
