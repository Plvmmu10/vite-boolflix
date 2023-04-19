import { reactive } from 'vue';

export const cards = reactive({
    cardsMovie: [],
    cardsSeries: [],
    basepath: ' https://api.themoviedb.org/3/',
    authkey: '?api_key=0360a04bf530bcd6435644bf9a3e0d7b',
    endpoint: '',
    moviepoint: 'search/movie',
    seriespoint: 'search/tv',
    filmSearch: {
        query: '',
        title: '',
        original_title: '',
        original_language: '',
        vote_average: ''
    },
    seriesSearch: {
        query: '',
        name: '',
        original_name: '',
        original_language: '',
        vote_average: ''
    }

})