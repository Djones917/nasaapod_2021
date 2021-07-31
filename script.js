console.log('Connected!');

// NASA API
const count = 10;
const apiKey = 'DEMO_KEY';
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;

let resultsArray = [];

// Ge 10 Images from NASA API
async function getNasaPictures() {
    try {
      const response = await fetch(apiUrl);
    } catch (error) {
    // Catch error here

    }
}