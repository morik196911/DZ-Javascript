"use strict";

function getGeolocation() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      reject(new Error("Геолокация не поддерживается этим браузером"));
    }
  });
} //f

getGeolocation()
  .then((location) => {
    console.log(`Широта ${location.latitude} Долгота ${location.longitude}`);
  })
  .catch((error) => console.log(error));
