import { deepClone } from "../src/deepClone.js";

describe("deepClone", () => {
  test("should create a deep clone of an object", () => {
    const john = {name:"john", age:22, favoriteThings:["stuff", "food", "other things"]};
    const johnClone = deepClone(john);
    john.favoriteThings.push("more stuff");
    expect(johnClone.favoriteThings.length).toEqual(3);
    expect(johnClone.favoriteThings[3]).toEqual(undefined);
  });
});