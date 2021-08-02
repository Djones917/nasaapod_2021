const resultsNav = document.getElementById('resultsNav');
const favoritesNav = document.getElementById('favoritesNav');
const imagesContainer = document.querySelector('.images-container');
const saveConfirmed = document.querySelector('.save-confirmed');
const loader = document.querySelector('.loader');


// NASA API
const count = 10;
const apiKey = 'DEMO_KEY';
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;

let resultsArray = [];

// Ge 10 Images from NASA API
async function getNasaPictures() {
    try {
      const response = await fetch(apiUrl);
      resultsArray = await response.json();
      console.log(resultsArray);
    } catch (error) {
    // Catch error here

    }
}

// On Load
getNasaPictures();