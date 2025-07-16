"use strict";

const promis1 = new Promise((resolve) => resolve("First"));
const promis2 = new Promise((resolve) => resolve("Two"));

function race(array) {
  Promise.race(array).then((data) => {
    console.log(data);
  });
}

race([promis1, promis2]);
race([23, 4, 56]);
race(["string", true, false]);
