import { getMovies, logout, getMovieById } from '../fetch-utils.js';

// checkAuth();

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});


window.addEventListener('load', async () => {

    await getMovieById(2);

});

// new search params --> id and pass into getMovieById
// new render function for movie
// new render function for all related reviews (based on id)
// new form for writing a review