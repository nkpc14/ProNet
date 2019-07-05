<template>
    <div  class="row col-auto justify-content-center mb-4">
        <div class="profilePost pt-lg-4 pb-lg-4 col-lg-12 row pb-4">
           <div class="col-sm-7">
               <p class="h2 text-justify">{{post.title}}</p>
               <p style="font-size: 2rem;text-align: start;font-family: Adobe Naskh,sans-serif;" class="col-lg-12">{{post.disc}}</p>
               <div class="header-user mt-5 mb-4">
                   <div  class="header-user--profile-bar">
                       <img  src="../../assets/contact_photo.png" alt="">
                       <p >{{post.author}}</p>
                   </div>
               </div>
           </div>
            <div  class="stats p-5 col-sm-5 ">
                <div class="row justify-content-around">
                    <div>
                        <div class="blue">
                            {{post.views}}
                        </div>
                        <span class="mt-2 h4">Views</span>
                    </div>
                    <div>
                        <div class="red">
                            {{post.votes}}
                        </div>
                        <span class="mt-2 h4">Votes</span>
                    </div>
                    <div>
                        <div class="green ">
                            {{post.answers}}
                        </div>
                        <span class="mt-2 h4">Answers</span>
                    </div>
                </div>

                <div class="row mt-5 col-xs-8 justify-content-around">
                    <div class="col-xs-12 flex-column  p-2 ">
                        <img src="../../assets/Freelancer/heart.png" alt="">
                        <p class="mt-2 h4">Vote</p>
                    </div>
                    <div class="col-xs-5 flex-column  p-2 ">
                        <img  src="../../assets/Freelancer/ic_bookmark.png" alt="">
                        <p class="mt-2 h4">Follow</p>
                    </div>
                    <div class="col-xs-12 flex-column  p-2">
                        <img  src="../../assets/Freelancer/ic_share.png" alt="">
                        <p class="mt-2 h4">Share</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "ProjectPost",
        props:[
            'post'
        ]

    }
</script>

<style scoped lang="scss">
    .blue{
        background-color: #BCD5EE;
        border-radius: 4rem;
        padding: 1rem;
        font-size: 1.6rem;
        width: 4.5rem;
    }
    .red{
        background-color: #EFDBDB;
        border-radius: 4rem;
        padding: 1rem;
        font-size: 1.6rem;
        width: 4.5rem;
    }
    .green{
        background-color: #BFF3EB;
        border-radius: 4rem;
        padding: 1rem;
        font-size: 1.6rem;
        width: 4.5rem;
    }

    .header-user{
        display: flex;

        &--profile-bar{
            & img{
                float: left;
            }
            & p{
                font-size: 1.2rem;
                margin-top: 1.5rem;
                margin-right: 1rem;
                color: #ffffff;
            }
            width: 22rem;
            background-color: rgba(grey,0.5);
            height: 4.9rem;
            border-radius: 5rem;
        }
    }
    .profilePost{
        box-shadow: rgba(#1C6B99,0.2) 0 0.2rem 1rem;
    }
    .stats{
        box-shadow: rgba(#1C6B99,0.2) 0 0.2rem 1rem;
        flex-grow: 1;
    }
</style>