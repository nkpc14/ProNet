<template>
    <div class="p-md-2 profile-header-box">
        <img class="profile-header-box__profile" :src="userProfilePic" alt="">
        <p class="profile-header-box__user">{{username}}</p>{{star}}
        <p class="profile-header-box__user--info">{{desc}}</p>
        <div class="justify-content-center pd-md-2 container profile-header-box__info">
            <img class="img-fluid" :src="star" alt="">
            <hr>
            <p>{{rating}}</p>
        </div>
    </div>
    
</template>

<script>
    export default {
        name: "ProfileHeaderBox",
        data(){
            return{
                username: 'Yaduvanshi Nitish Kumar',
                userProfilePic: '../assets/contact_photo.png',
                desc:'Full Stack Web Developer | Certified Cyber Security Expert',
                star:'',
                rating:128
            }
        },
        created(){
            axios.get('').then(response=>{
                this.username = response.data.username
                this.userProfilePic = response.data.userProfilePic

            }).catch(err =>{
                console.log(err)
            })
        }
    }
</script>

<style scoped lang="scss">
    .profile-header-box{
        box-shadow: rgba(#1C6B99,0.2) 0 0.2rem 1rem;
        background-color: rgba(#e5f5ff,1);
        &__profile{
            /*background-color: red;*/
            height: 8rem;
            width: 8rem;
            border-radius: 100%;
        }
        &__user{
            font-size: 1.6rem;
            font-weight: bold;
            &--info{
                font-size: 1.3rem;
                margin-bottom: 2rem;
                margin-top: 1.5rem;
            }
        }

        &__info{
            display: flex;
            & p{
                display: flex;
                align-items: center;
                font-size: 2.5rem;
                font-family: Bahnschrift,sans-serif;
                margin-left: 1rem;
            }
        }
    }
</style>