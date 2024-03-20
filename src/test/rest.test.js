const { restNumbers } = require("../service/rest.js")


describe("Test for rest two numbers", () => {
    test("rest two positives numbers", () => {
        expect(restNumbers(2, 5)).toBe(-3);
    });
    test("rest two negatives numbers", () => {
        expect(restNumbers(-2, -5)).toBe(3);
    });
});