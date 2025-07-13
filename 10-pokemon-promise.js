"use strict";

fetch(" https://pokeapi.co/api/v2/pokemon/ditto")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`THis is error ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    const url = data.abilities[0].ability.url;
    //console.log(url)
    return fetch(url);
  })
  .then((response2) => {
    if (!response2.ok) {
      throw new Error(`Error 222 status ${response2.status}`);
    }
    return response2.json();
  })
  .then((value) => console.log(value.effect_entries[1].effect))
  .catch((error) => console.log("Error total"));
