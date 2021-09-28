const Employee = require("../lib/employee.js");

test("Can create new Employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

test("Set name with the constructor", () => {
    const name = "testName";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("Set id with the constructor", () => {
    const testValue = 100;
    const e = new Employee("testName", testValue);
    expect(e.id).toBe(testValue);
});

test("Set email with the constructor", () => {
    const testValue = "test@fakemail.com";
    const e = new Employee("testName", 1, testValue);
    expect(e.email).toBe(testValue);
});

test("Can pull name from constructor via getName()", () => {
    const testValue = "testName";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
    const testValue = 100;
    const e = new Employee("testName", testValue);
    expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
    const testValue = "test@fakemail.com";
    const e = new Employee("testName", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return Employee", () => {
    const testValue = "Employee";
    const e = new Employee("testName", 1, "test@fakemail.com");
    expect(e.getRole()).toBe(testValue);
});