<template>
    <div>
        <div class="nav">
            <div class="logo">
                <img src="" alt="Logo">
            </div>
            <ul  data-aos="fade-right"
                 data-aos-duration="500"
                 data-aos-easing="ease-in-out"
                 data-aos-mirror="true" >
                <li class="active drawer"><router-link to="home"><img src="../assets/path.png" alt=""></router-link></li>
                <li class="drawer"><router-link to="qa"><img src="../assets/questions-answers-512.png" alt=""></router-link></li>
                <li class="drawer"><router-link to=""><img src="../assets/social.png" alt=""></router-link></li>
                <li class="drawer"><router-link to=""><img src="../assets/trash.png" alt=""></router-link></li>
                <li class="drawer"><router-link to=""><img src="../assets/forums.png" alt=""></router-link></li>
                <li class="drawer"><router-link to=""><img src="../assets/spam.png" alt=""></router-link></li>
            </ul>
            <div @click="activateSmallNav = !activateSmallNav" class="drawer-small">
                <img src="../assets/Drawer.png" alt="">
            </div>
        </div>

        <div v-if="activateSmallNav" class="navigation-small">
            <ul   data-aos="fade-right"
                 data-aos-duration="500"
                 data-aos-easing="ease-in-out"
                 data-aos-mirror="true" >

                <div data-aos="zoom-in-left"
                     data-aos-duration="1000"
                     data-aos-easing="ease-in-out"
                     data-aos-mirror="true" class="header-user">
                    <!--<a href=""><img src="../assets/Add Button.png" alt=""></a>-->
                    <div  class="header-user--profile-bar">
                        <img  src="../assets/contact_photo.png" alt="">
                        <p >Yaduvanshi Nitish Kuamr</p>
                    </div>
                </div>

                <li class="drawer"><router-link to="qa"><img src="../assets/questions-answers-512.png" alt=""></router-link></li>
                <li class="drawer"><router-link to=""><img src="../assets/social.png" alt=""></router-link></li>
                <li class="drawer"><router-link to=""><img src="../assets/trash.png" alt=""></router-link></li>
                <li class="drawer"><router-link to=""><img src="../assets/forums.png" alt=""></router-link></li>
                <li class="drawer"><router-link to=""><img src="../assets/spam.png" alt=""></router-link></li>
            </ul>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Navigation",
        data(){
            return{
                activateSmallNav:false
            }
        },
        methods:{

        }
    }
</script>

<style scoped lang="scss">
    .header-user{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .logo{
        display: none;
    }
    .drawer-small{
      display: none;
    }

    @media only screen and (max-width:920px ){

        .navigation-small{
            position: absolute;
            top: 0;
            left: 0;
            height: 100vh;
            width: 100vw;
            background-color: #fff;
            z-index: 100;
            display: flex;
            justify-content: center;
            & ul{
                margin-top: 10vh;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            & .active{
                background-color: #1C6B99;
                border-radius: 0.8rem;
                box-shadow: black 0 0.2rem 0.8rem;
            }
            & .drawer{
                width: 5rem;
                height: 5rem;
                display: flex;
                margin-left: 1.5rem;
                margin-top: 3rem;
                justify-content: center;
                align-items: center;

            }
        }
        .logo{
            display: block;
            height: 8vh;
            width: 8vh;
            background-color: darkslateblue;
            position: absolute;
            left: 2rem;
            & img{
                height: 100%;
                width: 100%;
            }
        }
        .drawer-small{
            display: block;
            height: 8vh;
            width: 8vh;
            /*background-color: red;*/
            position: absolute;
            right: 2rem;
            z-index: 101;
            & img{
                height: 100%;
                width: 100%;
            }
        }
        .nav{
            height: 8vh;
            width: 100vw;
            background-color: rgba(#e5f5ff,1);
            display: flex;
            & ul{
                display: none;
            }
        }
    }

    @media only screen and (min-width: 920.1px) {

        .nav{
            height: 100vh;
            width: 8rem;
            background-color: rgba(#e5f5ff,1);
            display: flex;
            flex-direction: column;
            position: fixed;
            left: 0;
            & ul{
                margin-top: 7rem;
                position: fixed;
                left: 0;
            }
            & .active{
                background-color: #1C6B99;
                border-radius: 0.8rem;
                box-shadow: black 0 0.2rem 0.8rem;
            }
            & .drawer{
                width: 5rem;
                height: 5rem; display: flex;
                margin-left: 1.5rem;
                margin-top: 5rem;
                justify-content: center;
                align-items: center;

            }

        }
    }

</style>