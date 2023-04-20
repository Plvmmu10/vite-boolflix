import { reactive } from 'vue';

export const cards = reactive({
    cardsMovie: [],
    cardsSeries: [],
    popularMovie: [],
    topratedMovie: [],
    basepath: ' https://api.themoviedb.org/3/',
    authkey: '?api_key=0360a04bf530bcd6435644bf9a3e0d7b',
    endpoint: '',
    moviepoint: 'search/movie',
    seriespoint: 'search/tv',
    topratedpoint: 'movie/top_rated',
    popularpoint: 'movie/popular',
    imagePath: 'https://image.tmdb.org/t/p/original',
    filmSearch: {
        query: ''
    },
    seriesSearch: {
        query: ''
    }

})