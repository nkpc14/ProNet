<template>
    <router-link class="btn  pl-lg-5 pr-lg-5 pt-lg-3 pb-lg-3" to="bidPost" >{{name}}</router-link>
</template>

<script>
    export default {
        name: "WhiteButtonLarge",
        props:[
            'name'
        ]
    }
</script>

<style scoped lang="scss">
    a{
        box-shadow: rgba(#1C6B99,0.2) 0 0.2rem 1rem;
        border-radius: 4rem;
        font-size: 1.8rem;
        color: #1C6B99;
    }
</style>