const Intern = require("../lib/Intern.js");

describe("getSchool", () => {
  test("should return employee's school", () => {
    const intern = new Intern("test", 1, "test@test.com", "smith");
    const school = intern.getSchool();

    expect(school).toBe("smith");
  });
});

describe("getRole", () => {
  test("Should return employee role", () => {
    const intern = new Intern("test", 1, "test@test.com", 1, "smith");

    expect(intern.getRole()).toEqual("Intern");
  });
});
