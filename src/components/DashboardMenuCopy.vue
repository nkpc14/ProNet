<template>
    <div >
        <div data-aos="zoom-in-left"
             data-aos-offset="100"
             data-aos-duration="1000"
             data-aos-easing="ease-in-out"
             data-aos-mirror="true" class="header-user">
            <a href=""><img src="../assets/Add Button.png" alt=""></a>
            <div  class="header-user--profile-bar">
                <img  src="../assets/contact_photo.png" alt="">
                <p >Yaduvanshi Nitish Kuamr</p>
            </div>
        </div>

        <div data-aos="zoom-in-right"
             data-aos-offset="100"
             data-aos-duration="1000"
             data-aos-easing="ease-in-out"
             data-aos-mirror="true" class="nexus">
            <p>Nexus</p>
        </div>

        <div class="dashboard-menu">
            <router-link  data-aos="fade-right"
                          data-aos-offset="200"
                          data-aos-duration="500"
                          data-aos-easing="ease-in-out"
                          data-aos-mirror="true" to="qa"  class="dashboard-menu-items">
                <img src="../assets/qa.png" alt="">
                <p>Q & A</p>
            </router-link>
            <router-link data-aos="fade-down"
                         data-aos-offset="300"
                         data-aos-duration="500"
                         data-aos-easing="ease-in-out"
                         data-aos-mirror="true"
                         to="home" class="dashboard-menu-items">
                <img src="../assets/Startup4-770x433.png" alt="">
                <p>START UP</p>
            </router-link>
            <router-link  data-aos="fade-left"
                          data-aos-offset="200"
                          data-aos-duration="500"
                          data-aos-easing="ease-in-out"
                          data-aos-mirror="true"
                          to="bid" class="dashboard-menu-items">
                <img src="../assets/why-bid-on-branded-keywords-ppc-1-750x314.png" alt="">
                <p>BID</p>
            </router-link>
        </div>
    </div>
</template>

<script>

    export default {
        name: "DashboardMenu",

    }
</script>

<style scoped lang="scss">
    .header-user{
        /*background-color: red;*/
        position: absolute;
        top: 3.5rem;
        right: 10rem;
        display: flex;

        &--profile-bar{
            & img{
                float: left;
            }
            & p{
              font-size: 1.6rem;
                margin-top: 1.5rem;
                margin-right: 1rem;
                color: rgba(#fff,0.6);
            }
            width: 30rem;
            background-color: rgba(grey,0.5);
            height: 4.9rem;
            border-radius: 5rem;
            margin-left: 4rem;
        }
    }

    .nexus{
        position: absolute;
        top: 18rem;
        right: 30rem;
        letter-spacing: 1rem;
        color: #fff;
        width: 20rem;
        height: 20rem;
        & p{
            font-size: 8rem;
            font-family: Bahnschrift;
        }
    }
    .dashboard-menu{
        position: absolute;
        top: 65%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 80vw;
        /*background-color: pink;*/
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        &-items{
            background-color: #fff;
            box-shadow: rgba(#1C6B99,0.2) 0 0.2rem 2rem;
            width: 30rem;
            height: 25rem;
            border-radius: 1rem;
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-direction: column;
        }
        &-items img{
            width: auto;
            height: 10rem;
            padding: 2rem;
        }
        &-items p{
            /*margin-top: 2rem;*/
            font-size: 2rem;
            font-family: Bahnschrift;
            letter-spacing: 1rem;
            color: rgba(#000,0.6);
        }
    }

</style>