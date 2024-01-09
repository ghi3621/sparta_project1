export const topMovies = async () => {
    const movies = await fetchMovies();

    const cardList = document.querySelector('#card_list');
    cardList.innerHTML = movies
        .map(
            (movie) => `
        <li class="movie_card" data_id="${id}">
                    <img src="https://image.tmdb.org/t/p/w500${poster_path}">
                    <h3 class='movie_title'>${title}</h3>
                    <p>${overview}</p>
                    <p>Rating: ${vote_average}</p>
                </li>`
        )
        .join('');

    cardList.addEventListener('click', handleClickCard);

    function handleClickCard(event) {
        if (event.target === carList) return;

        if (event.target.matches('.movie_card')) {
            alert(`영화 id: ${event.target.id}`);
        } else {
            alert(`영화 id: ${event.target.parentNode.id}`);
        }
    }
};
async function fetchMovies() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZGQxZjM0MDg0ZjUyYzA0ZGYyOTM3MTYyNjZlMzI1OSIsInN1YiI6IjY1OGUxOTI3NjRmNzE2MGFjZDNmNTBmYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K6jzQUO3-0t0vq93dO_JAZQuyr5iD2T2VDys5owyNUw'
        }
    };
    const response = await fetch(
        'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);
    const data = await response.json();
    return data.results;
}



