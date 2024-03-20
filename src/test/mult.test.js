const { MultiNumbers } = require("../service/mult");

describe("Test for MultiNumbers", () => {
  test("sum two positives numbers", () => {
    expect(MultiNumbers(2, 5)).toBe(10);
  });
  test("sum two negatives numbers", () => {
    expect(MultiNumbers(-2, -5)).toBe(10);
  });
});
