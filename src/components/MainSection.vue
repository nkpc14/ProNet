<template>
    <div class="mainSection">

        <nav >
            <h3 data-aos="fade-right" data-aos-duration="1000" >NEX<span>US</span></h3>
            <ul >
                <li data-aos="fade-left" data-aos-duration="300"><a href="#">Home</a></li>
                <li data-aos="fade-left" data-aos-duration="600"><a href="/work">Work</a></li>
                <!--<li data-aos="fade-left" data-aos-duration="1000"><router-link to="dashboard/home" class="button-login">Login</router-link></li>-->
                <li data-aos="fade-left" data-aos-duration="1000"><a href="https://nexuspro.herokuapp.com/accounts/google/login/" class="button-login">Login</a></li>
            </ul>
        </nav>

        <!--<img class="blue-shape" src="../assets/Blue Shape.png" alt="">-->

        <div    data-aos="fade-right"
                data-aos-offset="500"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"  class="laptop">
            <img  class="dragon__top"  src="../assets/tail-clipart-8.png" alt="">
        </div>

        <div  class="main__info">
            <span  data-aos="fade-up"
                   data-aos-offset="100"
                   data-aos-duration="1000"
                   data-aos-easing="ease-in-out"
                   data-aos-mirror="true">Network Where </span><br>
            Virtuality Meets Reality
        </div>

        <div  class="small-info">
            <p  data-aos="fade-up"
                data-aos-offset="100"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true">We Provide You More Than Your Expectation</p>
            <p  data-aos="fade-up"
                data-aos-offset="100"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true">Connect To Unlock Your Potential </p>
        </div>
        <a  data-aos="zoom-in-up"
            data-aos-offset="100"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true" class="button-large" href=""> <span>G</span>et Started <span class="arrow">  </span></a>
        <img  class="dragon__bottom" src="../assets/DragonIcon_Blue_HEX.png" alt="">

    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        }
    }
</script>

<style scoped lang="scss">
    .mainSection{
        height: 100vh;
        background-image: url("../assets/Blue Shape.png");
        background-repeat: no-repeat;
        /*background-color: red;*/
        background-size: cover;
    }

    nav{
        display: flex;
        justify-content: space-between;
        margin-top: 2vw;
        & h3{
            font-size: 2vw;
            margin-left: 5rem;
            letter-spacing: 5px;
            color: hotpink;
            font-weight: bolder;
            font-family: "Hobo Std";
            & span{
                color: rgba(coral,0.8);
            }
        }
        & ul{ display: flex;
            width: 40rem;
            /*background-color: red;*/
            justify-content: space-between;
            margin-right: 10rem;
            & li {
                display: block;
                & a{
                    font-size: 1.5vw;
                    color: #000;
                }
            }
        }
    }

    .small-info{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-10%,-50%);
        font-size: 1.5vw;
        width: 35vw;
        font-family:"Microsoft Tai Le";
        font-weight: lighter;
        color: rgba(#000,0.5);
    }
    .button-large{
        padding-left: 5vw;
        padding-right: 5vw;
        padding-top: 2rem;
        padding-bottom: 2rem;
        background-color: #011032;
        border-radius: 7rem;
        font-size: 1.6vw;
        color: #fff;
        position: absolute;
        top: 55%;
        left: 50%;
        transform: translate(0%,50%);
        margin-left: 5rem;
    }

    .button-login{
        background-color: hotpink;
        padding-top: 1rem;
        padding-bottom: 1rem;
        padding-left: 4rem;
        padding-right: 4rem;
        border-radius: 3rem;
    }
    .main__info{
        font-family: 'Open Sans', sans-serif;
        font-size: 4vw;
        position: absolute;
        /*right: 10vw;*/
        /*top:15vh;*/
        top: 30%;
        left: 50%;
        transform: translate(-20%, -50%);
        & span{
            font-size: 3vw;
            /*line-height: 8rem;*/
        }
    }

    .blue-shape{
        //height: 100vh;
        //position: absolute;
        //left: -19.5%;
        //z-index: 100;
        /*background-color: red;*/
    }
    .laptop{
        z-index: 1000;
        height: 15vw;
        position: absolute;
        left: 5%;
        top: 45%;
        border:#fff solid 10px;
        border-radius: 1vw;
        width: 20vw;
        background-color: darkgrey;
    }

    .dragon__top{
        height: 30vw;
        position: absolute;
        top:-20vw;
        right: -15vw;
        transform: rotateZ(-20deg)!important;
    }
    .dragon__bottom{
        opacity: 0.5;
        position: absolute;
        bottom: 5vw;
        height: 15vw;
        right: 10rem;
        transform: rotateZ(-20deg);
    }
</style>
