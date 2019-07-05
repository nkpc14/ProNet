<template>
    <div>

        <div data-aos="zoom-in-left"
             data-aos-offset="10"
             data-aos-duration="1000"
             data-aos-easing="ease-in-out"
             data-aos-mirror="true" class="header-user">
            <a href=""><img src="../../assets/Add Button.png" alt=""></a>
            <div  class="header-user--profile-bar">
                <img  :src="userProfilePic" alt="">
                <p >{{username}}</p>
            </div>
        </div>
        <div class=" container-fluid freelancer ">
            <div class="row" style="height: 10rem">
            </div>
          <div class="row ">
              <div class="col-lg-3 freelancer__left">
                  <ProfileHeaderBox class="freelancer__left--profile-header"></ProfileHeaderBox>
                  <MyWork class="freelancer__left-my-work"></MyWork>
              </div>
              <div class="col-lg-6 mh-100 freelancer__middle">
                  <news-feeds ></news-feeds>
              </div>
              <div class="col-lg-3 freelancer__right  d-none d-lg-block">
                  <ProfileCardDetails></ProfileCardDetails>
              </div>
          </div>
        </div>
    </div>
</template>

<script>
    import ProfileHeaderBox from '@/components/freelancer/ProfileHeaderBox'
    import MyWork from '@/components/freelancer/MyWork'
    import ProjectPost from '@/components/freelancer/ProjectPost'
    import NewsFeeds from '@/components/freelancer/NewsFeeds'
    import ProfileCardDetails from '@/components/User/ProfileCardDetails'
    import axios from 'axios'
    export default {
        name: "FreelancerDashboard",
        components:{
            ProfileHeaderBox,
            MyWork,
            ProjectPost,
            NewsFeeds,
            ProfileCardDetails
        },
        data(){
            return{
                username: 'Yaduvanshi Nitish Kumar',
                userProfilePic: '../assets/contact_photo.png'
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




    .freelancer{
        padding-left: 10rem;
        /*background-color: red;*/
        height: 100vh;
    }
    @media only screen and (max-width:920px ) {
        .freelancer{
            padding-left: 2rem;
            height: 100vh;
        }
    }



    @media only screen and (max-width:920px ) {
        .header-user{
            position: absolute;
            top: 3.5rem;
            right: 0rem;
            display: none;
        }
    }




    @media only screen and (max-width:1182px ) and (min-width:919.99px ) {
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
    }


    @media only screen and (min-width: 1182.1px) {
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
    }


</style>