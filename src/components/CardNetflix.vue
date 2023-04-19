<template>
    <div class="col-3">
        <div class="card">
            <div class="card-image"></div>
            <div class="card-body">
                <h3>{{ title }}</h3>
                <h6>{{ originalTitle }}</h6>
                <p>{{ language }}</p>
                <p>{{ vote }}</p>
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

<style lang="scss" scoped></style>