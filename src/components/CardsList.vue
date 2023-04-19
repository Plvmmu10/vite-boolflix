<template>
    <div class="row">
        <CardNetflix v-for="card in cards.cardsList" :key="card.id" :title="card.title" :originalTitle="card.original_title"
            :language="card.original_language" :vote="card.vote_average" :name="card.name"
            :originalName="card.original_name" />
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
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped></style>