import getPersonalizedMessage from "../src/getPersonalizedMessage";
import { getStarWarsCharacterById } from "../src/starWarsApiClient";

const FILL_IN_HERE = "FILL_IN_HERE";

// https://facebook.github.io/jest/docs/en/jest-object.html#jestmockmodulename-factory-options
jest.mock("../src/starWarsApiClient", () => {
  return {
    getStarWarsCharacterById: jest.fn(() => {
      return {
        name: "Leia Organa"
      };
    })
  };
});

describe("jest.mock()", () => {
  const starWarsCharacterId = 7;

  test("should override imported module", async () => {
    const message = await getPersonalizedMessage(starWarsCharacterId);

    expect(getStarWarsCharacterById).toHaveBeenCalledWith(FILL_IN_HERE);
    expect(message).toEqual(FILL_IN_HERE);
  });

  test("can import mocked module to set mock implementation", async () => {
    getStarWarsCharacterById.mockImplementation(FILL_IN_HERE);

    const message = await getPersonalizedMessage(starWarsCharacterId);

    expect(message).toEqual("May the Force be with you, Luke Skywalker!");
  });
});
