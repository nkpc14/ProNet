<template>
    <div class="pl-5 pr-5 container">
        <hr>
        <div class="container row align-items-start flex-column pt-4">
            <p class="h4 text-justify font-main">Contact Info:</p>
            <span class="h5 font-main mt-4 font-light">Email Address</span>
            <p class="h4 font-main">{{email}}</p>
            <span class="h5 font-main mt-4 font-light">Address:</span>
            <p class="h4 font-main text-justify">{{address}}</p>
        </div>
        <div class="container row align-items-start flex-column pt-2">
            <p class="h4 font-main mt-4">Custom Information</p>
            <span class="h5 font-main mt-4 font-light">LinkedIn:</span>
            <p class="h4 font-main">{{linkedIn}}</p>
            <span class="h5 font-main font-light">Github:</span>
            <p class="h4 font-main">{{github}}</p>
            <span class="h5 font-main font-light">Mobile:</span>
            <p class="h4 font-main">{{mobile}}</p>
        </div>
        <div class="container row align-items-start flex-column pt-2">
            <p class="h4 font-main mt-5">Tags</p>
            <div class="tags">
                {{tags}}
            </div>
        </div>
        <hr>
        <div class="container row align-items-start flex-column">
            <p class="h4 align-items-end font-light align-items-end space">Nexus</p>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "ProfileCardDetailsBottom",
        data(){
            return{
                email:'nkpc14@gmail.com',
                address:'Professors colony civil line Ballia',
                linkedIn:'nkpc14@gmail.com',
                github:'http://www.github.com/nkpc14',
                mobile:'7376977077',
                tags:[]
            }
        },
        created(){
            axios.get().then(response =>{
                console.log(response)
            }).catch(err =>{
                console.log(err)
            })
        }
    }
</script>

<style scoped lang="scss">
    .font-main{
     font-family: Adobe Fan Heiti Std,sans-serif;
    }
    .font-light{
        font-family: Adobe Fan Heiti Std,sans-serif;
        opacity: 0.5;
    }
    .tags{
        height: 11.5rem;
    }
</style>