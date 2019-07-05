<template>
    <div class="top">
        <WhiteButtonLarge name="Browse Project" class="white-button"></WhiteButtonLarge>
        <PostButton></PostButton>
    </div>
</template>

<script>
    import  WhiteButtonLarge from '@/components/Plugins/WhiteButtonLarge'
    import  PostButton from '@/components/Plugins/PostButton'
    export default {
        name: "ProfileDetailCardTop",
        components:{
            WhiteButtonLarge,
            PostButton
        }
    }
</script>

<style scoped lang="scss">

    .top{
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
        /*background-color: red;*/
        height: 25rem;
    }
</style>