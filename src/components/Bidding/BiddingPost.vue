<template>
    <div class="container-fluid border-light bidPost ">

        <div class="row">
            <div data-aos="zoom-in-left"
                 data-aos-duration="1000"
                 data-aos-offset="10"
                 data-aos-easing="ease-in-out"
                 data-aos-mirror="true" class="header-user">
                <a href=""><img src="../../assets/Add Button.png" alt=""></a>
                <div  class="header-user--profile-bar">
                    <img  :src="userProfilePic" alt="">
                    <p >{{username}}</p>
                </div>
            </div>
        </div>



        <div class="row marginBottom "></div>


        <div v-for="(post,index) in posts" class="container">
            <div class="row  p-2">
                <div class="col-12 row h-100 post">
                    <div class="col-lg-9 col-12 pt-4">
                        <p class="col-4 h2 text-justify text-black-50 font-weight-bold" style="font-family: Adobe Gothic Std,sans-serif;">{{post.title}}</p>
                        <p class="h1 text-justify col-12 mb-5" style="font-family: Adobe Naskh,sans-serif;">{{post.description}}
                        </p>

                        <div class="row">
                            <div  class="header-tag1--profile-bar">
                                <img  src="../../assets/Freelancer/php.png" alt="">
                                <p>{{post.tag}}</p>
                            </div>
                        </div>



                        <div class="row col-12 mb-4">
                            <div class="col-9">
                                <div  class="header-user1--profile-bar">
                                    <img  :src="post.authorPic" alt="">
                                    <p>{{post.author}}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="col-5 col-lg-3 flex">
                        <BidButton></BidButton>
                        <img class="img-fluid" src="../../assets/Freelancer/star.png" alt="">
                        <WhiteButtonLarge class=" mb-4" :name="post.price"></WhiteButtonLarge>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import BidButton from '@/components/Plugins/BidButton'
    import WhiteButtonLarge from '@/components/Plugins/WhiteButtonLarge'
    import axios from 'axios'
    export default {

        name: "BiddingPost",
        components:{
            BidButton,
            WhiteButtonLarge
        },
        data(){
            return{
                posts:[],
            }
        },
        created(){
            this.posts.push({
                username: 'Yaduvanshi Nitish Kumar',
                userProfilePic: '../assets/contact_photo.png',
                title:'What is Nexus?',
                tag:'',
                description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
                    'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
                price:'$ 128',
                author:'Yaduvanshi Nitish Kumar',
                authorPic:'',
            });
            axios.get('').then(response=>{

            }).catch(err =>{
                console.log(err)
            })
        }
    }
</script>

<style scoped lang="scss">

    .flex{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .post{
        box-shadow: rgba(#1C6B99,0.2) 0 0.2rem 1rem;
    }
    .bidPost{
        height: 100vh;
        padding-left: 8rem;
    }

    .marginBottom{
        margin-bottom: 10rem;
    }

    .header-user1{

        &--profile-bar{
            display: flex;
            & img{
                float: left;
            }
            & p{
                font-size: 1.2rem;
                margin-top: 1.5rem;
                margin-right: 1rem;
                color: black;
                margin-left: 1.5rem;
            }
            width: 22rem;
            background-color: rgba(grey,0.2);
            height: 4.9rem;
            border-radius: 5rem;
        }
    }
.header-tag1{

        &--profile-bar{
            display: flex;
            margin-left: 2rem;
            margin-bottom: 2rem;
            & img{
                float: left;
                width: 4rem;
            }
            & p{
                font-size: 1.2rem;
                margin-top: 1.5rem;
                margin-right: 1rem;
                color: #1C6B99;
                margin-left: 1rem;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            width: auto;
            padding-right: 2rem;
            background-color: rgba(grey,0.2);
            height: 4rem;
            border-radius: 5rem;
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