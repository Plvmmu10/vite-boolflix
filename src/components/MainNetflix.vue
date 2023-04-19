<template>
    <div class="container">
        <CardsList />
    </div>
</template>

<script>
import CardsList from './CardsList.vue';
export default {
    name: 'MainNetflix',
    components: {
        CardsList
    }
}
</script>

<style lang="scss" scoped>
.container {
    margin-top: 100px;
}
</style>