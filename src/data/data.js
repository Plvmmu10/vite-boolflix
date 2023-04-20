import { reactive } from 'vue';

export const cards = reactive({
    cardsMovie: [],
    cardsSeries: [],
    basepath: ' https://api.themoviedb.org/3/',
    authkey: '?api_key=0360a04bf530bcd6435644bf9a3e0d7b',
    endpoint: '',
    moviepoint: 'search/movie',
    seriespoint: 'search/tv',
    imagePath: 'https://image.tmdb.org/t/p/original',
    filmSearch: {
        query: ''
    },
    seriesSearch: {
        query: ''
    }

})