import { getMovies } from "./fetch-utils.js";

const container = document.getElementById('movie-container');

function renderMovie(movie) {
    // const a = document.createElement('a');
    const div = document.createElement('div');
    div.classList.add('movie');
    
    const title = document.createElement('h3');
    const img = document.createElement('img');
    img.src = './assets/alchemy-logo.png';
    const rating = document.createElement('p');
    title.textContent = movie.title;
    rating.textContent = `Rating: ${movie.rating}`;

    div.append(title, img, rating);
    return div;
}

async function displayMovies() {
    const movies = await getMovies();
    
    movies.forEach(element => {
        container.append(renderMovie(element));
    });
}


window.addEventListener('load', async () => {
    await displayMovies();
});