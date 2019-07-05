<template>
    <div class="holder">
        <router-link to="">Post</router-link>
    </div>
</template>

<script>
    export default {
        name: "BidButton"
    }
</script>

<style scoped lang="scss">
    .holder{

        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 8rem;

        & a{
            box-shadow: rgba(#1C6B99,0.2) 0 0.2rem 1rem;
            padding: 1rem 5rem;
            border-radius: 4rem;
            font-size: 1.8rem;
            color: #ffffff;
            background-color: #1C6B99;
            width: 4rem;
            text-align: center;
            display: flex;
            justify-content: center;
            text-decoration: none;
        }
    }
</style>