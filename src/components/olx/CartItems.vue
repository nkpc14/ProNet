<template>
    <div class="cartItem container position-relative col-11 mt-4">
        <img class="float-right"  src="../../assets/Olx/ic_add_white.png" alt="">
        <div class="row justify-content-around">
            <img class="ml-2" src="../../assets/Olx/product.png" alt="">
            <div>
                <p class="h2 mt-3 font-weight-bold">{{titles}}</p>
                <p></p>
            </div>
            <p class="price h1 align-items-end">$ {{price}}</p>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "CartItems",
        props:[
            'titles',
            'price'
        ]
    }
</script>

<style scoped lang="scss">
    .cartItem{
        box-shadow: rgba(#1C6B99,0.2) 0 0.2rem 1rem;
        /*height: 10rem;*/
    }
    .price{
        color: #1C6B99;
        font-weight: bolder;
        text-align: end;
        display: flex;
    }
</style>