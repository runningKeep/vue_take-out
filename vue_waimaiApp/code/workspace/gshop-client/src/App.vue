<template>
    <div id="app">
        <router-view/>
        <FooterGuider v-show="$route.meta.showFooter"/>
    </div>
</template>

<script>
  import FooterGuider from './components/FooterGuide/FooterGuider'
  // import {reqFoodList} from './api'
  import {mapActions} from 'vuex'
  export default {
     mounted(){
      this.$store.dispatch('getAddress')
      this.$store.dispatch('getFoodList')
      this.$store.dispatch('getUserinfo')
      
      // const result = await reqFoodList()
      // console.log(result)
    },
    methods:{
    },
    components:{
        FooterGuider
    }
  }
</script>

<style lang="stylus">
    #app
      width 100%
      height 100%
      background #f5f5f5
      position relative     

</style>