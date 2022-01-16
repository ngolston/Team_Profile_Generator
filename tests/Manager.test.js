const Manager = require("../lib/Manager.js");

describe("getOfficeNo", () => {
  test("should return office number", () => {
    const manager = new Manager("test", 1, "test@test.com", 1);
    const managerOffice = manager.getOfficeNo();
  });
});

describe("getRole", () => {
  test("Should return employee role", () => {
    const manager = new Manager("test", 1, "test@test.com");

    expect(manager.getRole()).toEqual("Manager");
  });
});
