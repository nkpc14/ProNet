<template>
    <div class="container">
        <div  data-aos="zoom-in-left"
             data-aos-offset="100"
             data-aos-duration="1000"
             data-aos-easing="ease-in-out"
             data-aos-mirror="true" class="header-user">
            <a href=""><img src="../assets/Add Button.png" alt=""></a>
            <div class="header-user--profile-bar">
                <img  src="../assets/contact_photo.png" alt="">
                <p>Yaduvanshi Nitish Kuamr</p>
            </div>
        </div>


        <div class="question-answer">
            <Questions></Questions>
            <ProfileCard></ProfileCard>
        </div>
    </div>
</template>

<script>
    import Navigation from '@/components/Navigation.vue'
    import Questions from "@/components/QA/Questions";
    import ProfileCard from "@/components/QA/ProfileCard"

    export default {
        name: "QA",
        components:{
            Questions,
            Navigation,
            ProfileCard
        }
    }
</script>

<style scoped lang="scss">
    .container{
        /*position: relative;*/
        display: flex;
        & .question-answer{
            height: 89.5vh;
            width: 80vw;
            /*background-color: red;*/
            position: absolute;
            top: 8.5rem;
            right: 10%;
            box-shadow: rgba(#1C6B99,0.2) 0 0 0.6rem;
            display: flex;

        }
    }
    .header-user{
        /*background-color: red;*/
        position: absolute;
        top: 1.5rem;
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

</style>