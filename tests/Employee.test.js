const Employee = require("../lib/Employee.js");

describe("make sure employee constructor is working", () => {
  test("should create a new employee object", () => {
    const employee = new Employee("test", 1, "test@test.com");
    expect(employee).toEqual({ name: "test", id: 1, email: "test@test.com" });
  });
});

describe("getName", () => {
  test("should return entered name", () => {
    const employee = new Employee("test", 1, "test@test.com");
    const employeeName = employee.getName();

    expect(employeeName).toBe("test");
  });
});

describe("getId", () => {
  test("Should return entered id number", () => {
    const employee = new Employee("test", 1, "test@test.com");
    const employeeId = employee.getId();
  });
});

describe("getEmail", () => {
  test("Should return entered email address", () => {
    const employee = new Employee("test", 1, "test@test.com");
    const employeeEmail = employee.getEmail();

    expect(employeeEmail).toBe("test@test.com");
  });
});

describe("getRole", () => {
  test("Should return employee role", () => {
    const employee = new Employee("test", 1, "test@test.com");

    expect(employee.getRole()).toEqual("Employee");
  });
});
