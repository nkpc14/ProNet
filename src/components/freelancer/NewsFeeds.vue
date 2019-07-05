<template>
    <div class=" newsfeeds">
            <div class="newsfeeds__head">
                <h3><span>Newsfeeds</span></h3>
            </div>
            <div v-if="$route.params.page === 'fdashboard'" class="newsfeeds__post-holder container mt-lg-4">
                <ProjectPost v-for="(post,id) in posts" :key="id" :post="post"></ProjectPost>
            </div>
    </div>
</template>

<script>
    import ProjectPost from '@/components/freelancer/ProjectPost'
    export default {
        name: "NewsFeeds",
        components:{
            ProjectPost,
        },
        data(){
            return{
                posts: [
                    {
                        id:'1',
                        title:'What is Nexus?',
                        disc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
                            'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
                        views:'10',
                        votes:'10',
                        answers:'12',
                        author:'Yaduvanshi Nitish Kumar',
                        authorPic:'',
                    },{
                        id:'1',
                        title:'What is Nexus?',
                        disc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
                            'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
                        views:'10',
                        votes:'10',
                        answers:'12',
                        author:'Yaduvanshi Nitish Kumar',
                        authorPic:'',
                    },{
                        id:'1',
                        title:'What is Nexus?',
                        disc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
                            'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
                        views:'10',
                        votes:'10',
                        answers:'12',
                        author:'Yaduvanshi Nitish Kumar',
                        authorPic:'',
                    },
                ],

            }
        }
    }
</script>

<style scoped lang="scss">
    .newsfeeds{
        min-height: 87.5vh;
        box-shadow: rgba(#1C6B99,0.2) 0 0.2rem 1rem;
        & h3{
            font-size: 1.6rem;
            padding-top: 1.4rem;
            padding-bottom: 1.4rem;
            background-color: rgba(#e5f5ff,1);
            text-align: left;
            padding-left: 2rem;
            & span{
                border-bottom: #1C6B99 solid 0.2rem;
                padding: 1rem;
            }
        }
    }
</style>