const { addTwoNumbers } = require("../service/add");

describe("Test for addTwoNumbers", () => {
  test("sum two positives numbers", () => {
    expect(addTwoNumbers(2, 5)).toBe(7);
  });
  test("sum two negatives numbers", () => {
    expect(addTwoNumbers(-2, -5)).toBe(-7);
  });
});
