const Intern = require("../lib/intern.js");

test("Can set school via constructor", () => {
    const testValue = "Miami U";
    const e = new Intern("testName", 1, "test@fakemail.com", testValue);
    expect(e.school).toBe(testValue);
});

test("getRole() should return Intern", () => {
    const testValue = "Intern";
    const e = new Intern("testName", 1, "test@fakemail.com", "Miami U");
    expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
    const testValue = "Miami U";
    const e = new Intern("testName", 1, "test@fakemail.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});