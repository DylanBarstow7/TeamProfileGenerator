const Engineer = require("../lib/engineer.js");

test("Can we pull GitHub account with the constructor", () => {
    const testValue = "github";
    const e = new Engineer("testName", 1, "test@fakemail.com", testValue);
    expect(e.github).toBe(testValue);
});

test("getRole() should return Engineer", () => {
    const testValue = "Engineer";
    const e = new Engineer("testName", 1, "test@fakemail.com", "github");
    expect(e.getRole()).toBe(testValue);
});

test("Can pull GitHub username from getGithub()", () => {
    const testValue = "github";
    const e = new Engineer("testName", 1, "test@fakemail.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});