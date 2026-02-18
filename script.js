"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
const containerImages = document.querySelector(".images");

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////

// function countries(country) {
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//               <article class="country">
//                 <img class="country__img" src="${data.flag}" />
//                 <div class="country__data">
//                   <h3 class="country__name">${data.name}</h3>
//                   <h4 class="country__region">${data.region}</h4>
//                   <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
//                   <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//                   <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//                 </div>
//               </article>
//       `;

//     countriesContainer.insertAdjacentHTML("beforeend", html);
//     countriesContainer.style.opacity = 1;
//   });
// }

// countries("portugal");

// with a promise

// function renderError(msg) {
//   countriesContainer.insertAdjacentText("beforeend", msg);
//   //   countriesContainer.style.opacity = 1;
// }

// const renderCountry = function (data, className = "") {
//   console.log(data);
//   const html = `
//             <article class="country ${className}">
//             <img class="country__img" src="${data.flag}" />
//             <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               +data.population / 1000000
//             ).toFixed(1)} people</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//             </div>
//             </article>
//             `;
//   countriesContainer.insertAdjacentHTML("beforeend", html);
//   //   countriesContainer.style.opacity = 1;
// };

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`Country not found ${response.status}`);
//       }
//       return response.json();
//     })
//     .then((data) => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];

//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then((response) => response.json())
//     .then((data) => renderCountry(data, "neighbour"))
//     .catch((err) => {
//       console.error(`${err}`);
//       renderError(`Something went wrong - ${err} - Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// with helper function

// const getJSON = function (url, errMsg = "Something went wrong") {
//   return fetch(url).then((response) => {
//     if (!response.ok) {
//       throw new Error(`${errMsg} ${response.status}`);
//     }
//     return response.json();
//   });
// };

// const getCountryData = function (country) {
//   getJSON(`https://restcountries.com/v2/name/${country}`, `Country not found`)
//     .then((data) => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];
//       console.log(neighbour);

//       if (!neighbour) throw new Error(`No neighbour found!`);

//       return getJSON(
//         `https://restcountries.com/v2/alpha/${neighbour}`,
//         `Country not found`,
//       );
//     })
//     .then((data) => renderCountry(data, "neighbour"))
//     .catch((err) => {
//       console.error(`${err}`);
//       renderError(`Something went wrong - ${err} - Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// getCountryData("portugal");

// btn.addEventListener("click", function () {
//   getCountryData("australia");
// });

/////////////////////////////////////////////////////////////////////

// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}.
The AJAX call will be done to a URL with this format: https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=52.508&longitude=13.381. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

// const getCountryData = function (country) {
//   return getJSON(
//     `https://restcountries.com/v2/name/${country}`,
//     `Country not found`,
//   )
//     .then((data) => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];
//       console.log(neighbour);

//       if (!neighbour) throw new Error(`No neighbour found!`);

//       return getJSON(
//         `https://restcountries.com/v2/alpha/${neighbour}`,
//         `Country not found`,
//       );
//     })
//     .then((data) => renderCountry(data, "neighbour"));
//   // .catch((err) => {
//   //   console.error(`${err}`);
//   //   renderError(`Something went wrong - ${err} - Try again!`);
//   // })
//   // .finally(() => {
//   //   countriesContainer.style.opacity = 1;
//   // });
// };

// function whereAmI(lat, lng) {
//   return fetch(
//     `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`,
//   )
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`Something went wrong - ${response.status}`);
//       }
//       console.log(response);
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.countryName}`);
//       return getCountryData(data.countryName);
//     })
//     .catch((err) => {
//       console.error(`${err}`);
//       renderError(`Something went wrong - ${err} - Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// }

// btn.addEventListener("click", function () {
//   whereAmI(19.037, 72.873);
// });

//////////////////////////

// challenge #1 OOP way

// class FindLocation {
//   constructor(lat, lng) {
//     this.lat = lat;
//     this.lng = lng;
//   }

//   init() {
//     btn.addEventListener("click", this.whereAmI.bind(this));
//   }

//   whereAmI() {
//     return this.getJSON(
//       `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${this.lat}&longitude=${this.lng}`,
//     )
//       .then((data) => {
//         return this.getCountryData(data.countryName);
//       })
//       .catch((err) => {
//         console.error(err);
//         this.renderError(`Something went wrong - ${err.message}`);
//       })
//       .finally(this.displayContainer.bind(this));
//   }

//   getJSON(url, errMsg = "Something went wrong") {
//     return fetch(url).then((response) => {
//       if (!response.ok) {
//         throw new Error(`${errMsg} ${response.status}`);
//       }
//       return response.json();
//     });
//   }

//   getCountryData(country) {
//     return this.getJSON(
//       `https://restcountries.com/v2/name/${country}`,
//       `Country not found`,
//     )
//       .then((data) => {
//         this.renderCountry(data[0]);
//         const neighbour = data[0].borders?.[0];

//         if (!neighbour) throw new Error(`No neighbour found!`);

//         return this.getJSON(
//           `https://restcountries.com/v2/alpha/${neighbour}`,
//           `Country not found`,
//         );
//       })
//       .then((data) => this.renderCountry(data, "neighbour"));
//   }

//   renderError(msg) {
//     countriesContainer.insertAdjacentText("beforeend", msg);
//     //   countriesContainer.style.opacity = 1;
//   }

//   renderCountry(data, className = "") {
//     const html = `
//             <article class="country ${className}">
//             <img class="country__img" src="${data.flag}" />
//             <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               +data.population / 1000000
//             ).toFixed(1)} people</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//             </div>
//             </article>
//             `;
//     countriesContainer.insertAdjacentHTML("beforeend", html);
//     //   countriesContainer.style.opacity = 1;
//   }

//   displayContainer() {
//     countriesContainer.style.opacity = 1;
//   }
// }

// const firstTry = new FindLocation(45.037, 72.873);
// firstTry.init();

// ///////////////////////////////////////////////////////////////////////

// console.log("Test start");

// setTimeout(() => console.log("0 sec timer"), 0);

// Promise.resolve("Resolved promise 1").then((res) => console.log(res));

// Promise.resolve("Resolved promise 2").then((res) => {
//   for (let i = 0; i < 10000; i++) {}
//   console.log(res);
// });

// console.log("Test end");

// //////////////////////////////////////////////////////////////////////

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log("Lotter draw is happening");
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve("You Win!");
//     } else {
//       reject(new Error("You lost your money"));
//     }
//   }, 2000);
// });

// lotteryPromise
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// // promisifying

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(2)
//   .then(() => {
//     console.log("I waited 2 seconds");
//     return wait(1);
//   })
//   .then(() => {
//     console.log("I waited 1 second");
//   });

///////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/

/*
DIO 1

Napravi funkciju 'createImage' koja prima imgPath kao ulazni parametar. Ova funkcija treba da vrati promise koji kreira novu sliku (koristi document.createElement('img')) i postavlja .src atribut na proslijeđenu putanju slike. Kada se slika učita, dodaj je u DOM element sa klasom 'images' i resolve-uj promise. Vrijednost koja se vraća kao fulfilled treba da bude sam image element. U slučaju da dođe do greške pri učitavanju slike ('error' događaj), reject-uj promise.

DIO 2
2. Konzumiraj promise koristeći .then i dodaj i error handler;
3. Nakon što se slika učita, pauziraj izvršavanje na 2 sekunde koristeći wait funkciju koju smo ranije napravili;
4. Nakon što prođu 2 sekunde, sakrij trenutnu sliku (postavi display na 'none') i učitaj drugu sliku (NAPOMENA: Koristi image element koji je vraćen iz createImage promise-a da sakriješ trenutnu sliku. Trebaće ti globalna varijabla za to);
5. Nakon što se druga slika učita, ponovo pauziraj izvršavanje na 2 sekunde;
6. Nakon što prođu 2 sekunde, sakrij trenutnu sliku.

TEST PODACI: Slike se nalaze u img folderu. Testiraj error handler tako što ćeš proslijediti pogrešnu putanju slike. Postavi brzinu mreže na 'Fast 3G' u DevTools Network tabu, inače će se slike učitavati prebrzo.
*/

let currImg;

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

function createImage(imgPath) {
  const image = document.createElement("img");
  image.src = imgPath;
  return new Promise(function (resolve, reject) {
    image.addEventListener("load", function () {
      containerImages.append(image);
      resolve(image);
    });
    image.addEventListener("error", function () {
      reject(new Error("Image not found!"));
    });
  });
}

createImage("img-1 (1).jpg")
  .then((img) => {
    currImg = img;
    return wait(2);
  })
  .then(() => {
    currImg.style.display = "none";
    return createImage("img-2 (1).jpg");
  })
  .then((img2) => {
    currImg = img2;
    return wait(2);
  })
  .then(() => {
    currImg.style.display = "none";
  })
  .catch((err) => console.error(err));
