const { divisionTwoNumbers } = require("../service/division");

describe("Test for divisionTwoNumbers", () => {
  test("division two positives numbers", () => {
    expect(divisionTwoNumbers(10, 2)).toBe(5);
  });
  test("division two negatives numbers", () => {
    expect(divisionTwoNumbers(14,-2)).toBe(-7);
  });
});
