<template>
    <div class="myContainer">
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
.myContainer {
    margin: 80px 0 0 0;
    padding-top: 1rem;
    width: 95%;
}
</style>