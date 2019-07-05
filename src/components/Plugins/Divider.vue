<template>
    <hr>
</template>

<script>
    export default {
        name: "Divider"
    }
</script>

<style scoped lang="scss">
    @media only screen and (max-width:920px ) {
        hr{
            display: none;
        }
    }


    hr{
        height: 68vh;
        transform: rotate(180deg);
        position: relative;
        top: 5rem;
        opacity: 0.1;
        width: 1rem;
        background-color: black;
        border-radius: 3rem;
    }
</style>