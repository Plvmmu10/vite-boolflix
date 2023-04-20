<template>
    <div class="col-sm-6 col-md-5 col-lg-3 p-2">
        <div class="card border-0 h-100 w-100">
            <div class="card-image" :class="show ? 'active' : 'deactive'" @mouseenter="showInfo" @mouseleave="showInfo">
                <img :src="imageUrl" :alt="card.title" class="img-fluid w-100 h-100">
            </div>
            <div class="card-body" :class="show ? 'deactive' : 'active'" @mouseenter="showInfo" @mouseleave="showInfo">
                <h3>{{ card.title }}</h3>
                <h3>{{ card.name }}</h3>

                <div class="movie-info my-4">
                    <p>{{ card.overview }}</p>
                </div>

                <div class="rating mt-5">
                    <i class="fa-solid fa-star" v-for="star in Math.trunc(card.vote_average / 2)"></i>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import { cards } from '../data/data.js';
export default {
    name: 'CardNetflix',
    props: ['card'],
    data() {
        return {
            cards,
            basePath: cards.imagePath,
            imageUrl: '',
            show: true,
        };

    },
    methods: {
        checkImage() {
            if (this.card.poster_path === null) {
                this.imageUrl = 'image/img-not-found.png'
            }
        },
        showInfo() {
            this.show = !this.show
        },

    },
    mounted() {
        this.imageUrl = `${this.basePath}${this.card.poster_path}`;
        this.checkImage();
    }

}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.card {
    position: relative;
}

.card-image {
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    cursor: pointer;
    transition: opacity .7s;
}

.card-body {
    background-color: $subtitle;
    color: white;
    cursor: pointer;
    transition: opacity .7s;

    .movie-info {
        height: 150px;
        overflow: auto;
    }

    .rating {
        position: absolute;
        bottom: 5%;
    }
}

.active {
    opacity: 1;
}

.deactive {
    opacity: 0;
}
</style>