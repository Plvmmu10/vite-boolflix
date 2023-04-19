<template>
    <header>
        <div id="myNavbar" class="d-flex justify-content-between align-items-center">
            <div class="title-container">
                <h1 class="fw-bold m-0">Netflix</h1>
            </div>

            <div class="input-container">
                <input type="text" name="searchBar" id="searchBar" placeholder="Cerca il tuo film" class="rounded-2 p-1">

                <button class="btn btn-outline-danger mx-2">Invia</button>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'NavbarNetflix',
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

    #myNavbar {
        width: 70%;
        margin: 0 auto;
        padding: 1rem;
        color: $secondary-color;
    }
}
</style>