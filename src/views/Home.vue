<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    <MainSection />
    <BiddingSection />
    <QA/>
  </div>
</template>
<style lang="scss">

</style>
<script>
// @ is an alias to /src
import MainSection from '@/components/MainSection.vue'
import BiddingSection from '@/components/BiddingSection.vue'
import QA from '@/components/Q and A.vue'

export default {
  name: 'home',
  components: {
    MainSection,
    BiddingSection,
    QA
  }
}
</script>
