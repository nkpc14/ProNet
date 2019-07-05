<template>
    <div class="cartItem container position-relative col-11 mt-4">
        <img class="float-right"  src="../../assets/Olx/ic_add_white.png" alt="">
        <div class="row justify-content-around p-4">
            <!--<img class="ml-2" src="../../assets/Olx/product.png" alt="">-->
            <div>
                <div class="row">
                    <p class="h2 mt-3 ml-5 font-weight-bold float-left">{{title}}</p>
                </div>
                <p class="ml-5 h2 text">{{desc}}</p>
            </div>
            <!--<p class="price h1 align-items-end">$ 128</p>-->
        </div>
    </div>
</template>

<script>
    export default {
        name: "MyWorkProjectPost",
        props:[
            'title',
            'desc'
        ],

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
        font-family: sans-serif;
    }

    .text{
        text-align: left;
        font-size: 1.6rem;
    }
</style>