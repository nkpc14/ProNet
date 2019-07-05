<template>
  <div>
    <Navigation style="position:absolute;"  v-bind:class="{navigation:navigationValue}"></Navigation>
    <DashboardMenu v-if="$route.params.page === 'home'" ></DashboardMenu>
<!--    <QA v-if="$route.params.page === 'qa'" ></QA>-->
    <BiddingDashboard v-if="$route.params.page === 'bid'" ></BiddingDashboard>
    <HireProjectUpload v-if="$route.params.page === 'hire'" ></HireProjectUpload>
    <FreelancerDashboard v-if="$route.params.page === 'fdashboard'"></FreelancerDashboard>
    <BiddingPost v-if="$route.params.page === 'bidPost'"></BiddingPost>
    <ComingSoon v-if="$route.params.page === 'csoon' || $route.params.page === 'qa'"></ComingSoon>

  </div>
</template>

<style scoped lang="scss">
    .navigation{
      background-image: url("../assets/Blue Shape Top.png") ;
      height: 100vh;
      width: 100vw;
      background-size: 100vw 70vh;
      background-repeat: no-repeat;
    }
</style>

<script>
  import Navigation from '@/components/Navigation.vue'
  import DashboardMenu from '@/components/DashboardMenu.vue'
  import BiddingDashboard from '@/components/Bidding/BiddingDashboard'
  import HireProjectUpload from '@/components/Bidding/HireProjectUpload'
  import QA from '@/views/QA'
  import FreelancerDashboard from '@/components/freelancer/FreelancerDashboard'
  import BiddingPost from '@/components/Bidding/BiddingPost'
  import ComingSoon from '@/components/404/ComingSoon'

  export default {
    name:"dashbaord",
    data() {
      return {
        urls: "",
        navigationValue:false,

      }
    },
    components:{
      Navigation,
      DashboardMenu,
      QA,
      BiddingDashboard,
      HireProjectUpload,
      FreelancerDashboard,
      BiddingPost,
      ComingSoon
    },
    created() {
      if(to.params.page ==='home'){
        this.navigationValue=true;
      }else{
        this.navigationValue=false;
      }
    }
    ,
    watch:{
      '$route'(to,from){
        if(to.params.page ==='home'){
          this.navigationValue=true;
        }else{
          this.navigationValue=false;
        }
      }
    }

  }
</script>