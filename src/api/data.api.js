import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/';
const  API_KEY = 'e0864e234ad59915a65f6e683712555d';

const API = {
    fetchPopularFilms () {
        return axios
            .get (
                `${BASE_URL}/3/trending/movie/day?api_key=${API_KEY}`,
            )
            .then(response => response.data.results)
            .catch(() => console.error('no popular'));
    },

    fetchFilmByQuery (searchQuery = '') {  
        return axios
            .get (
                `${BASE_URL}3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}`,
            )
            .then(response => response.data.results)
            .catch(() => console.error('no search movie'));
    },

    fetchFilmById (movie_id = '') {
        return axios
            .get (
                `${BASE_URL}3/movie/${movie_id}?api_key=${API_KEY}`,
            )
            .then(response => response.data)
            .catch(() => console.error('current film is missing'));
    },
    fetchCast (movie_id = '') {
        return axios
            .get (
                `${BASE_URL}3/movie/${movie_id}/credits?api_key=${API_KEY}`,
            )
            .then(response => response.data)
            .catch(() => console.error('no cast'));
    },
    posterimgpath: `https://image.tmdb.org/t/p/w342/`,
    profilePath: `https://image.tmdb.org/t/p/w185/`,
};

export default API;  