//const ul = document.querySelector('ul');

//console.log('ul:', ul);

import { topMovies} from '.movie.js';
import { movieSearch} from '.search.js';

topMovies();

const searchInput = document.querySelector('#search_input');
searchInput.focus();

const form =  document.querySelector('#search_form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    movieSearch(searchInput.value);
})

