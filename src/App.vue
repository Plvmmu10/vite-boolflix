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
      const filmUrl = cards.basepath + cards.moviepoint + cards.authkey + cards.endpoint;

      let searched = {};
      let params = {};

      for (let key in cards.filmSearch) {
        if (cards.filmSearch[key]) {
          params[key] = cards.filmSearch[key]
        }
      }

      if (Object.keys(params).length > 0) {
        searched.params = params;
      }

      axios.get(filmUrl, searched).then((res) => {
        cards.cardsList = res.data.results
      })



    }
  },
  mounted() {
    cards.endpoint = '&language=en-US&query=a&page=1&include_adult=false';
    this.newSearch()
  }
}
</script>

<style lang="scss" scoped></style>