import { reactive } from 'vue';

export const cards = reactive({
    cardsList: [],
    basepath: ' https://api.themoviedb.org/3/',
    authkey: '?api_key=0360a04bf530bcd6435644bf9a3e0d7b',
    endpoint: '',
    moviepoint: 'search/movie',
    filmSearch: {
        query: '',
        title: '',
        original_title: '',
        original_language: '',
        vote_average: ''
    }

})