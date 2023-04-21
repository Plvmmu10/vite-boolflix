import { reactive } from 'vue';

export const cards = reactive({
    //All arrays that are getting populated by API Calls
    cardsMovie: [],
    cardsSeries: [],
    popularMovie: [],
    topratedMovie: [],

    //Default URL components
    basepath: ' https://api.themoviedb.org/3/',
    authkey: '?api_key=0360a04bf530bcd6435644bf9a3e0d7b',
    endpoint: '',

    //All search keys for each type of API element
    moviepoint: 'search/movie',
    seriespoint: 'search/tv',
    topratedpoint: 'movie/top_rated',
    popularpoint: 'movie/popular',

    //Image default URL
    imagePath: 'https://image.tmdb.org/t/p/original',

    filmSearch: {
        query: ''
    },
    seriesSearch: {
        query: ''
    }

})