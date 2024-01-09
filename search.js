export const movieSearch = (searchKeyword) => {
    const movieCards = document.querySelectorAll('.movie_card');

    movieCards.forEach((card) => {
        const title = card.querySelector('.movie_title').textContent.toLowerCase();
        const searchValue = searchKeyword.toLowerCase();

        if (title.includes(searchValue)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
};