<template>
    <div class="work mb-5 pb-5 flex-column">
        <div class="work__head">
            <h3>My Work</h3>
        </div>
        <div v-if="$route.params.page === 'qa'" class="work__post-holder">
            <CartItem :titles="titleCart" :price="priceCart"></CartItem>
            <CartItem :titles="titleCart" :price="priceCart"></CartItem>
            <CartItem :titles="titleCart" :price="priceCart"></CartItem>
            <CartItem :titles="titleCart" :price="priceCart"></CartItem>
        </div>
        <div  class="work__post-holder">
            <div class="container overflow-hidden">
                <MyWorkProjectPost :title="titleProject" :desc="descs"></MyWorkProjectPost>
                <MyWorkProjectPost :title="titleProject" :desc="descs"></MyWorkProjectPost>
                <MyWorkProjectPost :title="titleProject" :desc="descs"></MyWorkProjectPost>
            </div>
        </div>
        <p style="font-size: 1.3rem" class=" btn btn-info font-weight-bold mt-3 mt-lg-5">See more</p>
    </div>
</template>

<script>
    import CartItem from '@/components/olx/CartItems'
    import MyWorkProjectPost from '@/components/freelancer/MyWorkProjectPost'
    import axios from 'axios'
    export default {
        name: "MyWork",
        components:{
            CartItem,
            MyWorkProjectPost
        },
        data(){
            return{
                titleProject:'Product Title',
                descs:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                titleCart:'',
                priceCart:''
            }
        },
        created(){
            if($route.params.page === 'qa'){
                axios.get('').then(response=>{
                    this.titles = response.data.titles
                    this.userProfilePic = response.data.descs
                }).catch(err =>{
                    console.log(err)
                })
            }else{
                axios.get('').then(response=>{
                    this.titles = response.data.titles
                    this.userProfilePic = response.data.descs
                }).catch(err =>{
                    console.log(err)
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .work{
        height: 63vh;
        box-shadow: rgba(#1C6B99,0.2) 0 0.2rem 1rem;
        margin-top: 2rem;
        & h3{
            font-size: 1.6rem;
            padding-top: 1.4rem;
            padding-bottom: 1.4rem;
            background-color: rgba(#e5f5ff,1);
        }
    }
</style>