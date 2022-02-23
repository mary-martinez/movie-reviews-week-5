import { getMovies, logout } from '../fetch-utils.js';

// checkAuth();

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});


window.addEventListener('load', async () => {
    
    await getMovies();
});