<template>
    <div id="filmContainer">
        <h1>Film consigliati</h1>
        <div class="row">
            <CardNetflix v-for="card in cards.cardsMovie" :key="card.id" :title="card.title"
                :originalTitle="card.original_title" :language="card.original_language" :vote="card.vote_average" />
        </div>
    </div>

    <div id="seriesContainer">
        <h1>Serie TV consigliate</h1>
        <div class="row" id="seriesRow">
            <CardNetflix v-for="card in cards.cardsSeries" :key="card.id" :name="card.name"
                :originalName="card.original_name" :language="card.original_language" :vote="card.vote_average" />
        </div>
    </div>
</template>

<script>
import { cards } from '../data/data.js'
import CardNetflix from './CardNetflix.vue';
export default {
    name: 'CardsList',
    components: {
        CardNetflix
    },
    data() {
        return {
            cards
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

h1 {
    color: white;
    width: 100%;
}

.row {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
}

#filmContainer,
#seriesContainer {
    margin-bottom: 4rem;
}
</style>