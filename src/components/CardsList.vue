<template>
    <div class="row-container">
        <h1>Film consigliati</h1>
        <div class="row">
            <CardNetflix v-for="card in cards.cardsMovie" :key="card.id" :card="card" />
        </div>
    </div>

    <div class="row-container">
        <h1>Serie TV consigliate</h1>
        <div class="row">
            <CardNetflix v-for="card in cards.cardsSeries" :key="card.id" :card="card" />
        </div>
    </div>

    <div class="row-container">
        <h1>I più popolari</h1>
        <div class="row">
            <CardNetflix v-for="card in cards.popularMovie" :key="card.id" :card="card" />
        </div>
    </div>

    <div class="row-container">
        <h1>I più votati</h1>
        <div class="row">
            <CardNetflix v-for="card in cards.topratedMovie" :key="card.id" :card="card" />
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

.row-container {
    margin-bottom: 4rem;
}
</style>