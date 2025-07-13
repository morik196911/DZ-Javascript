"use strict";
const request = new XMLHttpRequest();
request.open("GET", " https://pokeapi.co/api/v2/pokemon/ditto");
request.send();

request.addEventListener("load", function () {
  const data = JSON.parse(this.responseText);
  const url = data.abilities[0].ability.url;
  const request1 = new XMLHttpRequest();
  request1.open("GET", `${url}`);
  request1.send();

  request1.addEventListener("load", function () {
    const data1 = JSON.parse(request1.responseText);
    console.log(data1.effect_entries[1].effect);
  });
});
