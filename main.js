async function topMovies() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZGQxZjM0MDg0ZjUyYzA0ZGYyOTM3MTYyNjZlMzI1OSIsInN1YiI6IjY1OGUxOTI3NjRmNzE2MGFjZDNmNTBmYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K6jzQUO3-0t0vq93dO_JAZQuyr5iD2T2VDys5owyNUw'
        }
    };

    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
        .then(response => response.json())
        .then(data => {
            let rows = data['results'];
            const cardList = document.querySelector('.card_list');
            cardList.innerHTML = '';

            rows.forEach((a) => {
                let title = a['title'];
                let overview = a['overview'];
                let poster_path = a['poster_path'];
                let vote_average = a['vote_average'];
                let id = a['id'];

                let temp_html = `
                <div class="movie_card" data_id="${_id}">
                    <img src="https://image.tmdb.org/t/p/w500${poster_path}">
                    <h3>${title}</h3>
                    <p>${overview}</p>
                    <p>Rating: ${vote_average}</p>
                </div>
            `;
                cardList.insertAdjacentHTML('beforeend', temp_html);
            });

            const movieCards = document.querySelectorAll('.movie_card');
            movieCards.forEach(card => {
                card.addEventListener('click', function () {
                    let movieId = this.getAttribute('data_id')
                    console.log(movieCards);
                });
            });
        })
}
