const fetch = require("isomorphic-fetch");

const getStarWarsCharacterById = async id => {
  try {
    const response = await fetch(`https://swapi.co/api/people/${id}`, {
      method: "GET"
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.log("Something went wrong!", e);
  }
};

// getStarWarsCharacterById(1).then(response => console.log(response))

module.exports = { getStarWarsCharacterById: getStarWarsCharacterById };
