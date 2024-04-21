class Movie {
    constructor(title, rating, year) {
        this.title = title;
        this.rating = rating;
        this.year = year;
    }
}

const movies = [];

document.getElementById('addMovie').addEventListener('click', function() {
    const title = document.getElementById('movieTitle').value;
    const rating = document.getElementById('movieRating').value;
    const year = document.getElementById('movieYear').value;

    if (title === '' || rating === '' || year === '') {
        alert('Please fill in all fields.');
    } else {
        const movie = new Movie(title, parseInt(rating), parseInt(year));
        movies.push(movie);
        document.getElementById('movieTitle').value = '';
        document.getElementById('movieRating').value = '';
        document.getElementById('movieYear').value = '';
    }
});

document.getElementById('showMovies').addEventListener('click', function() {
    const list = document.getElementById('movieList');
    list.innerHTML = ''; // Clear previous list
    movies.forEach(movie => {
        const item = document.createElement('li');
        item.textContent = `${movie.title} (Rating: ${movie.rating}, Year: ${movie.year})`;
        list.appendChild(item);
    });
});
