<template>
    <div class="col-2 gap-1">
        <div class="card border-0 h-100 w-100">
            <div class="card-image">
                <img :src="imageUrl" :alt="card.title" class="img-fluid w-100 h-100">
            </div>
            <div class="card-body">
                <h3>{{ card.title }}</h3>
                <h3>{{ card.name }}</h3>

                <div class="rating mt-3 pb-5">
                    <p class="m-0">{{ card.vote_average }}</p>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import { cards } from '../data/data.js'
export default {
    name: 'CardNetflix',
    props: ['card'],
    data() {
        return {
            cards,
            basePath: cards.imagePath,
            imageUrl: ''
        };

    },
    methods: {
        checkImage() {
            if (this.card.poster_path === null) {
                this.imageUrl = 'image/img-not-found.png'
            }
        }
    },
    mounted() {
        this.imageUrl = `${this.basePath}${this.card.poster_path}`;
        this.checkImage();
    }

}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.card-image {
    width: 100%;
    height: 50%;
}

.card-body {
    background-color: $subtitle;
    color: white;
    position: relative;

    .rating {
        position: absolute;
        bottom: 0;
    }
}
</style>