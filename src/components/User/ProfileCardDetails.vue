<template>
   <div class="profileDetailCard">
       <ProfileCardDetailsTop></ProfileCardDetailsTop>
       <ProfileCardDetailsBottom></ProfileCardDetailsBottom>
   </div>
</template>

<script>
    import ProfileCardDetailsTop from './ProfileCardDetailsTop'
    import ProfileCardDetailsBottom from './ProfileCardDetailsBottom'
    export default {
        name: "ProfileCardDetails",
        components:{
            ProfileCardDetailsTop,
            ProfileCardDetailsBottom
        }
    }
</script>

<style scoped lang="scss">
    .profileDetailCard{
        box-shadow: rgba(#1C6B99,0.2) 0 0.2rem 1rem;
        height: 87.5vh;
    }
</style>