<template>
    <div class="question-container">
        <div class="question-container__left">
            <p class="question-container__left--title">What is Nexus?</p>
            <p class="question-container__left--info">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>
        <div class="question-container__right">
            <div class="question-container__right--top">
                <div class="question-container__right--top-1">
                    <span class="question-container__right--top-1-value">10</span>
                    <span class="question-container__right--top-1-view">View</span>
                </div>
                <div class="question-container__right--top-2">
                    <span class="question-container__right--top-2-value">10</span>
                    <span class="question-container__right--top-2-votes">Votes</span>
                </div>
                <div class="question-container__right--top-3">
                    <span class="question-container__right--top-3-value">10</span>
                    <span class="question-container__right--top-3-answer">Answer</span>
                </div>
            </div>
            <div class="question-container__right--bottom">
                <div class="question-container__right--bottom-1">
                    <img src="../../assets/QA/path.png" alt="">
                    <span>View</span>
                </div>
                <div class="question-container__right--bottom-2">
                    <img src="../../assets/QA/ic_bookmark.png" alt="">
                    <span>Votes</span>
                </div>
                <div class="question-container__right--bottom-3">
                    <img src="../../assets/QA/ic_share.png" alt="">
                    <span>Answer</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Question"
    }
</script>

<style scoped lang="scss">
    .question-container{
        display: flex;
        height: 20rem;
        width: 98%;
        font-size: 1.6rem;
        /*background-color: red;*/
        margin-left: 1%;
        border: rgba(#1C6B99,0.2) solid 0.1rem;
        padding: 1rem;
        margin-bottom: 1rem;
        &__left{
            height: 20rem;
            flex-grow: 3;
            display: flex;
            flex-direction: column;
            align-content: start;
            &--title{
                font-family: Adobe Gothic Std;
                letter-spacing: 0.2rem;
                float: left;
            }

            &--info{
                font-family: Adobe Naskh;
            }
        }

        &__right{
            height: 20rem;
            width: 24rem;
            flex-grow: 1;
            /*background-color: green;*/
            justify-content: space-around;
            display: flex;
            flex-direction: column;
            border: rgba(#1C6B99,0.2) solid 0.1rem;
            /*padding: 1rem;*/
            &--top{
                display: flex;
                justify-content: space-around;
                align-items: center;
                /*background-color: red;*/
                &-1{
                    display: flex;
                    flex-direction: column;
                    &-value{
                        border-radius: 100%;
                        background-color: #BCD5EE;
                        padding: 0.8rem;
                        height: 3rem;
                        width: 3rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    &-view{
                        margin-top: 0.5rem;
                        font-size: 1.2rem;
                    }
                }
                &-2{
                    display: flex;
                    flex-direction: column;
                    border-radius: 100%;
                    &-value{
                        border-radius: 100%;
                        background-color: #BCD5EE;
                        padding: 0.8rem;
                        height: 3rem;
                        width: 3rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    &-votes{
                        font-size: 1.2rem;
                        margin-top: 0.5rem;

                    }
                }
                &-3{
                    display: flex;
                    flex-direction: column;
                    border-radius: 100%;
                    &-value{
                        border-radius: 100%;
                        background-color: #BCD5EE;
                        padding: 0.8rem;
                        height: 3rem;
                        width: 3rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    &-answer{
                        font-size: 1.2rem;
                        margin-top: 0.5rem;
                    }
                }
            }

            &--bottom{
                display: flex;
                justify-content: space-around;
                align-items: center;
                &-1{
                    display: flex;
                    flex-direction: column;
                    & img{
                        height: 3rem;
                        width: 3rem;
                    }
                    & span{
                        font-size: 1.2rem;
                        margin-top: 0.5rem;
                    }
                }
                &-2{
                    display: flex;
                    flex-direction: column;
                    border-radius: 100%;
                    & img{
                        height: 3rem;
                        width: 3rem;
                    }
                    & span{
                        font-size: 1.2rem;
                        margin-top: 0.5rem;

                    }
                }
                &-3{
                    display: flex;
                    flex-direction: column;
                    border-radius: 100%;
                    & img{
                        height: 3rem;
                        width: 3rem;
                    }
                    & span{
                        font-size: 1.2rem;
                        margin-top: 0.5rem;
                    }
                }


            }
        }
    }
</style>