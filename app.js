import { getMovieById, getMovies } from "./fetch-utils.js";

const container = document.getElementById('movie-container');

function renderMovie(movie) {
    const div = document.createElement('div');
    div.classList.add('movie');

    const title = document.createElement('h3');
    const img = document.createElement('img');
    img.src = './assets/alchemy-logo.png';
    const rating = document.createElement('p');
    title.textContent = movie.title;
    rating.textContent = `Rating: ${movie.rating}`;

    div.append(title, img, rating);
    div.addEventListener('click', (e) => {
        console.log('im clicking in a button');

        location.replace(`./movies/?id=${movie.id}`);
    });
    return div;
}

async function displayMovies() {
    const movies = await getMovies();

    movies.forEach(element => {
        const newMovie = renderMovie(element);
        console.log(newMovie);


        container.append(newMovie);
    });
}


window.addEventListener('load', async () => {
    await displayMovies();

});