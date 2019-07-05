<template>
    <div class="qaSection">
        <div data-aos="zoom-in-up"
             data-aos-offset="100"
             data-aos-duration="500"
             data-aos-easing="ease-in-out"
             data-aos-mirror="true" class="qaSection-img">
            <img  class="qaSection-img--laptop" src="../assets/vector-laptop-logo-6.png" alt="">
            <img class="qaSection-img--art" src="../assets/art1.png" alt="">
        </div>
        <div class="qaSection-left">
            <div data-aos="fade-right"
                 data-aos-offset="500"
                 data-aos-duration="1000"
                 data-aos-easing="ease-in-out"
                 data-aos-mirror="true" class="qaSection-left--left">
                <img src="../assets/facebook1.png" alt="">
                <div>
                    <h2  data-aos="fade-right"
                         data-aos-offset="100"
                         data-aos-duration="1000"
                         data-aos-easing="ease-in-out"
                         data-aos-mirror="true">Yaduvanshi Nitish Kumar</h2>
                    <p>I have a query about...</p>
                </div>
            </div>
            <div class="qaSection-left--right">
                <div  data-aos="fade-right"
                      data-aos-offset="300"
                      data-aos-duration="1500"
                      data-aos-easing="ease-in-out"
                      data-aos-mirror="true" class="qaSection-left--right-1">
                    <img src="../assets/facebook1.png" alt="">
                    <div>
                        <h2>Yaduvanshi Nitish Kumar</h2>
                        <p>I have a query about...</p>
                    </div>
                </div>
                <div  data-aos="fade-right"
                      data-aos-offset="300"
                      data-aos-duration="1500"
                      data-aos-easing="ease-in-out"
                      data-aos-mirror="true" class="qaSection-left--right-2">
                    <img src="../assets/facebook1.png" alt="">
                    <div>
                        <h2>Yaduvanshi Nitish Kumar</h2>
                        <p>I have a query about...</p>
                    </div>
                </div>
            </div>
        </div>
        <div  class="qaSection-right">
            <h1  data-aos="fade-left"
                 data-aos-offset="100"
                 data-aos-duration="1000"
                 data-aos-easing="ease-in-out"
                 data-aos-mirror="true">Q & A</h1>
            <p  data-aos="zoom-out-left"
                data-aos-offset="300"
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true">Lorem Ipsum is simple dummy text of the printing and typesetting industry.</p>
            <a  data-aos="fade-right"
                data-aos-offset="300"
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true" class="button-large" href="">More</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "QA"
    }
</script>

<style lang="scss" scoped>
    .qaSection{
        height: 100vh;
        position: relative;
        display: flex;
        justify-content: space-between;
        &-img{
            position: absolute;
            top: 25vh;
            left: 10vw;
            &--laptop{
                height: 20vw;
            }
            &--art{
                position: absolute;
                top: -8.5vw;
                right: 0;
                height: 25vw;
                z-index: 1000;
            }
        }

        &-left{
            /*background-color: red;*/
            position: absolute;
            top: 30vh;
            left: 17vw;
            height: 13vw;
            width: 44vw;
            display: flex;
            z-index: 1001;

            &--left{
                background-color: rgba(darkgrey,0.2);
                margin-right: 2rem;
                width: 19vw;
                display: flex;
                padding: 1rem;
                & h2{
                    font-size: 1vw;
                }
                & p{
                    font-size: 0.7vw;
                }
                & img{
                    height: 5rem;
                }
                & div{
                    padding: 1rem;
                }
            }

            &--right{
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                &-1{
                    background-color: rgba(darkgrey,0.2);
                    height: 5vw;
                    width: 17vw;
                    display: flex;
                    padding: 1rem;
                    & h2{
                        font-size: 1vw;
                    }
                    & p{
                        font-size: 0.7vw;
                    }
                    & img{
                        height: 5rem;
                    }
                    & div{
                        padding: 1rem;
                    }
                }
                &-2{
                    height: 5vw;
                    width: 17vw;
                    background-color: rgba(darkgrey,0.2);
                    display: flex;
                    padding: 1rem;
                    & h2{
                        font-size: 1vw;
                    }
                    & p{
                        font-size: 0.7vw;
                    }
                    & img{
                        height: 5rem;
                    }
                    & div{
                        padding: 1rem;
                    }
                }
            }

        }

        &-right{
            position: absolute;
            right: 10vw;
            margin-top: 5vw;
            & h1{
                font-size: 3vw;
                margin-bottom: 3rem;
                font-family: Arial;
            }
            & p{
                font-size: 1.5vw;
                width: 27vw;
                font-family: Candara;
                margin-bottom: 5rem;
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
    }
</style>