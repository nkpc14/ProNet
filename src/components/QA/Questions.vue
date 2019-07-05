<template>
        <div class="questions">
            <div class="questions-header">
                <ul>
                    <li ><a class="active" href="">Latest</a></li>
                    <li><a href="">Votes</a></li>
                    <li><a href="">Unanswred</a></li>
                </ul>
            </div>
            <Question></Question>
            <!--<Question></Question>-->
            <!--<Question></Question>-->
        </div>
</template>

<script>
    import Question from '@/components/QA/Question'
    export default {
        name: "Questions",
        components:{
            Question
        }
    }
</script>

<style scoped lang="scss">
        .questions{
            height: 100%;
            width: 65vw;
            /*background-color: red;*/
            padding-top: 1rem;

            &-header{
                height: 5rem;
                /*background-color: grey;*/
                & ul{
                    display: flex;
                    & li{
                        display: block;
                        & a{
                            text-decoration: none;
                            font-size: 1.8rem;
                            font-family: Adobe Fan Heiti Std;
                            letter-spacing: 0.4rem;
                            margin-left: 3rem;
                            padding-bottom: 0.5rem;
                            color: rgba(#000,0.4);
                        }
                    }
                }
            }
        }

    .active{
        border-bottom: solid 0.5rem rgba(#1C6B99,0.5);
    }
</style>