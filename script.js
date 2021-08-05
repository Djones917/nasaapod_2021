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

function updateDOM() {
  resultsArray.forEach((result) => {
     // Card Container
     const card = document.createElement('div');
     card.classList.add('card');
     // Link
     const link = document.createElement('a');
     link.href = result.hdurl;
     link.title = 'View Full Image';
     link.target = '_blank';
     // Image
     const image = document.createElement('img');
     image.src = result.url;
     image.alt = 'NASA Picture Of The Day';
     image.loading = 'lazy';
     image.classList.add('card-img-top');
     // Card Body
  });
}

// Ge 10 Images from NASA API
async function getNasaPictures() {
    try {
      const response = await fetch(apiUrl);
      resultsArray = await response.json();
      console.log(resultsArray);
      updateDOM();
    } catch (error) {
    // Catch error here

    }
}

// On Load
getNasaPictures();