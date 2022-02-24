import { logout, getMovieById, getUserRatings } from '../fetch-utils.js';

// checkAuth();

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

const params = new URLSearchParams(window.location.search);
console.log(params.get('id'));

window.addEventListener('load', async () => {
    const detail = await getMovieById(params.get('id'));
    console.log('hello', detail);
    displayDetail(detail);

    await renderReviews(detail.id);
});
async function displayDetail(movie) {
    const titleEl = document.getElementById('title');
    titleEl.textContent = movie.title;

    const imgEl = document.getElementById('img');
    imgEl.src = `../assets/${movie.img_src}`;

    const summaryEl = document.getElementById('summary');
    summaryEl.textContent = movie.summary;
}

async function renderReviews(movie_id) {
    const reviews = await getUserRatings(movie_id);
    const reviewsContainer = document.getElementById('reviews-container');
    reviewsContainer.textContent = '';

    for (let review of reviews) {
        const div = document.createElement('div');
        div.classList.add('review');
        const pText = document.createElement('p');
        pText.textContent = review.review;
        //const profileImage =
        const pRating = document.createElement('p');
        pRating.textContent = review.rating;

        div.append(pText, pRating);
        reviewsContainer.append(div);
    }
}

// new search params --> id and pass into getMovieById
// new render function for movie
// new render function for all related reviews (based on id)
// new form for writing a review
