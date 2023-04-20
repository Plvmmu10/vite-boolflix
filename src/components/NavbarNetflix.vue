<template>
    <header>
        <div id="myNavbar" class="d-flex justify-content-between align-items-center">
            <div class="logo-container" @click="resetSearch">
                <img src="image/Boolflix.png" alt="boolflixLogo" class="w-100 h-100">
            </div>

            <div class="d-flex justify-content-center align-items-center flex-wrap d-none d-md-flex">
                <ul class="d-flex m-0 p-0 flex-wrap">
                    <li v-for="item in navLink" class="px-2">
                        <a href="#" class="text-decoration-none">{{ item }}</a>
                    </li>
                </ul>
            </div>

            <div class="input-container">
                <input type="text" name="searchBar" id="searchBar" placeholder="Cerca il tuo film" class="rounded-2 p-1"
                    @keyup.enter="goSearch" v-model.trim="cards.filmSearch.query">

                <button class="btn mx-2" @click="goSearch">Cerca</button>

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
            cards,
            navLink: [
                'Home',
                'Serie TV',
                'Film',
                'Originali',
                'Aggiunti di recente',
                'La mia lista'
            ]
        }
    },
    methods: {
        goSearch() {
            this.$emit('goSearch')
        },
        resetSearch() {
            this.cards.filmSearch.query = '';
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

        .logo-container {
            cursor: pointer;
            width: 10%;
        }

        ul {
            list-style-type: none;

            a {
                color: white;

                &:hover {
                    color: $secondary-color;
                }
            }

        }


        #searchBar {
            background-color: transparent;
            color: white;
            border: 0;
            cursor: pointer;

            &:hover {
                border: 1px solid $secondary-color;
            }
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