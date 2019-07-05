<template>
    <div class="profile-card">
        <div class="profile-card__ask-question">
            <a class="question-button" href="">Ask Question</a>
        </div>
        <div class="profile-card__score">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div class="profile-card__user">

        </div>

    </div>
</template>

<script>
    export default {
        name: "ProfileCard"
    }
</script>

<style scoped lang="scss">
    .profile-card{
        /*background-color: green;*/
        height: 95%;
        width: 30vw;
        margin: 2rem;
        border-left: solid 0.5rem rgba(#000,0.1);
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding-left: 1.5rem;
        &__ask-question{
            display: flex;
            flex-direction: column;
            /*background-color: red;*/
            & .question-button{
                background-color: #1C6B99;
                height: 5rem;
                font-size: 2rem;
                color: #fff;
                font-family: Adobe Fan Heiti Std;
                padding-top: .5rem;
                padding-bottom: .5rem;
                padding-left: 7rem;
                padding-right: 7rem;
                border-radius: 5rem;
                font-weight: lighter;
            }
        }
        &__score{
            height: 20rem;
            /*background-color: red;*/
            width: 100%;
            box-shadow: rgba(#1C6B99,0.2) 0 0 0.6rem;

        }
        &__user{
            height: 30rem;
            /*background-color: green;*/
            width: 100%;
            box-shadow: rgba(#1C6B99,0.2) 0 0 0.6rem;

        }
    }
</style>