<template>
    <div class="biddingSection">
        <div class="biddingSection-left">
            <h1>Start Bidding</h1>
            <p class="biddingSection-left--info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris elementum euismod enim, at maximus
                elit elementum sit amet.
            </p>
            <a class="button-large" href="">Bid Now</a><br>
            <p class="biddingSection-left--span">Lorem ipsum...</p>
        </div>

        <div class="biddingSection-right">
            <h1>Start Bidding</h1>
            <p class="biddingSection-right--info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris elementum euismod enim, at maximus
                elit elementum sit amet.
            </p>
            <img class="biddingSection-right--img" src="../assets/człowiek-z-laptopem_1133-54.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "BiddingSection"
    }
</script>

<style lang="scss" scoped>

    .biddingSection{
        background-image: url("../assets/Blue Shape Top.png");
        height: 100vh;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: top;
        margin-top: -0.5rem;
        position: relative;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        &-left{
            position: absolute;
            top: 50vh;
            left: 5vw;
            & h1{
                font-size: 4vw;
                margin-bottom: 3rem;
                font-family: Steelfish Rounded;
            }

            &--info{
                font-size: 1vw;
                width: 35vw;
                color: rgba(#000,0.8);
                margin-bottom: 5rem;
                font-family: Corbel;
            }
            & a{

            }

            &--span{
                margin-top: 2rem;
            }
        }

        .button-large{
            padding-left: 3vw;
            padding-right: 3vw;
            padding-top: 1.5rem;
            padding-bottom: 1.5rem;
            background-color: #011032;
            border-radius: 7rem;
            font-size: 1vw;
            color: #fff;
            margin-bottom: 3rem;
        }

        &-right{
            position: absolute;
            top: 10vh;
            right: 5vw;
            & h1{
                color: #fff;
                font-size: 5vw;
                margin-bottom: 4rem;
                font-family: Steelfish Rounded;
            }

            &--info{
                font-size: 1.3vw;
                width: 32vw;
                color: rgba(#fff,0.6);
                margin-bottom: 3rem;
                font-family: Corbel;
            }
            &--img{
               margin-top: -2vw;
                height: 20vw;
            }

        }
    }


</style>