const Engineer = require("../lib/Engineer.js");

describe("getGithub", () => {
  test("should return employee's github profile", () => {
    const engineer = new Engineer("test", 1, "test@test.com", "bob");
    const github = engineer.getGithub();

    expect(github).toBe("bob");
  });
});

describe("getRole", () => {
  test("Should return employee role", () => {
    const engineer = new Engineer("test", 1, "test@test.com", 1, "bob");

    expect(engineer.getRole()).toEqual("Engineer");
  });
});
