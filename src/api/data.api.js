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

    // fetchFilmByQuery (page = '', searchQuery = '') {  
    //     return axios
    //         .get (
    //             `${BASE_URL}/3/search/movie?api_key=${API_KEY}&query=${searchQuery}&page=${page}`,
    //         )
    //         .then(response => {
    //             if(response.ok) {
    //                 return response.json()
    //             }
    //         })
    //         .catch(() => console.error('no search movie'));
    // },

    // fetchGanres () {                                                  
    //     return axios
    //         .get (
    //             `${BASE_URL}/3/genre/movie/list?api_key=${API_KEY}`,
    //         )
    //         .then(response => {
    //             if(response.ok) {
    //                 return response.json()
    //             }
    //         })
    //         .catch(() => console.error('no ganres'));
    // },

    // fetchFilmById (movieId = '') {
    //     return axios
    //         .get (
    //             `${BASE_URL}/3/genre/movie/list?api_key=${API_KEY}`,
    //         )
    //         .then(response => {
    //             if(response.ok) {
    //                 return response.json()
    //             }
    //         })
    //         .catch(() => console.error('current film is missing'));
    // },
};

export default API;  