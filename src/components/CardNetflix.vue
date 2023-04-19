<template>
    <div class="col-3 gap-1">
        <div class="card border-0 h-100 w-100">
            <div class="card-image"></div>
            <div class="card-body">
                <h3>{{ title }}</h3>
                <h3>{{ name }}</h3>
                <h6>{{ originalName }}</h6>
                <h6>{{ originalTitle }}</h6>

                <div class="mt-3">
                    <p>{{ language }}</p>
                    <p class="m-0">{{ vote }}</p>
                </div>

            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'CardNetflix',
    props: ['title', 'originalTitle', 'language', 'vote', 'name', 'originalName'],

}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.card-body {
    background-color: $subtitle;
    color: white;
}
</style>