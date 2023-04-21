<template>
  <header>
    <NavbarNetflix @goSearch="newSearch" />
  </header>

  <main>
    <MainNetflix />
  </main>
</template>

<script>
import { cards } from './data/data.js'
import axios from 'axios';
import NavbarNetflix from './components/NavbarNetflix.vue';
import MainNetflix from './components/MainNetflix.vue';
export default {
  name: 'App',
  components: {
    NavbarNetflix,
    MainNetflix
  },
  data() {
    return {
      cards
    }
  },
  methods: {
    newSearch() {

      // All urls
      const filmUrl = cards.basepath + cards.moviepoint + cards.authkey + cards.endpoint;
      const seriesUrl = cards.basepath + cards.seriespoint + cards.authkey + cards.endpoint;
      const popularUrl = cards.basepath + cards.popularpoint + cards.authkey + cards.endpoint;
      const ratedUrl = cards.basepath + cards.topratedpoint + cards.authkey + cards.endpoint;

      let searched = {};
      let params = {};

      for (let key in cards.filmSearch) {
        if (cards.filmSearch[key]) {
          params[key] = cards.filmSearch[key]
        }
      }

      for (let key in cards.seriesSearch) {
        if (cards.seriesSearch[key]) {
          params[key] = cards.seriesSearch[key]
        }
      }

      if (Object.keys(params).length > 0) {
        searched.params = params;
      }


      // All API Calls
      axios.get(filmUrl, searched).then((res) => {
        cards.cardsMovie = res.data.results.map((item) => {
          const lang = { en: 'gb', ja: 'jp', cs: 'cz', zh: 'cn' };
          return {
            ...item,
            original_language:
              lang[item.original_language] || item.original_language
          }
        })
      })

      axios.get(popularUrl, searched).then((res) => {
        cards.popularMovie = res.data.results.map((item) => {
          const lang = { en: 'gb', ja: 'jp', cs: 'cz', zh: 'cn' };
          return {
            ...item,
            original_language:
              lang[item.original_language] || item.original_language
          }
        })
      })

      axios.get(ratedUrl, searched).then((res) => {
        cards.topratedMovie = res.data.results.map((item) => {
          const lang = { en: 'gb', ja: 'jp', cs: 'cz', zh: 'cn' };
          return {
            ...item,
            original_language:
              lang[item.original_language] || item.original_language
          }
        })
      })

      axios.get(seriesUrl, searched).then((res) => {
        cards.cardsSeries = res.data.results.map((item) => {
          const lang = { en: 'gb', ja: 'jp', cs: 'cz', zh: 'cn' };
          return {
            ...item,
            original_language:
              lang[item.original_language] || item.original_language
          }
        })
      })

    }
  },
  mounted() {
    cards.endpoint = '&language=it&query=a&page=1&include_adult=false';
    this.newSearch()
  }
}
</script>

<style lang="scss" scoped>
@use './assets/styles/partials/variables' as *;

main {
  display: flex;
  justify-content: center;
}
</style>