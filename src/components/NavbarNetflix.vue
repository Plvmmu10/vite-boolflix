<template>
    <header>
        <div id="myNavbar" class="d-flex justify-content-between align-items-center">
            <div class="title-container">
                <h1 class="fw-bold m-0 text-uppercase">Boolflix</h1>
            </div>

            <div class="input-container">
                <input type="text" name="searchBar" id="searchBar" placeholder="Cerca il tuo film" class="rounded-2 p-1"
                    @keyup.enter="goSearch" v-model.trim="cards.filmSearch.query">

                <button class="btn" @click="goSearch">Cerca</button>

            </div>
        </div>
    </header>
</template>

<script>
import { cards } from '../data/data.js';
export default {
    name: 'NavbarNetflix',
    data() {
        return {
            cards
        }
    },
    methods: {
        goSearch() {
            this.$emit('goSearch')
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as*;

header {
    background-color: $main-color;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 80px;
    z-index: 1000;

    #myNavbar {
        width: 95%;
        margin: 0 auto;
        padding: 1rem;
        color: $secondary-color;

        .title-container {
            cursor: pointer;
        }

        #searchBar {
            background-color: transparent;
            color: white;
            border: 0;
        }

        button {
            color: white;

            &:hover {
                color: $secondary-color;
            }
        }


    }
}
</style>