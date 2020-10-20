<template>
    <section class="msite">
        <!--首页头部-->
        <!-- <header class="header">
          <span class="header_search">
            <i class="iconfont icon-sousuo"></i>
          </span>
          <span class="header_title">
            <span class="header_title_text ellipsis">昌平区北七家宏福科技园(337省道北)</span>
          </span>
          <span class="header_login">
            <span class="header_login_text">登录|注册</span>
          </span>
        </header> -->
        <HeaderTop :title="address.name">
          <span class="header_search" slot="left" @click="$router.push('/search')">
            <i class="iconfont icon-sousuo"></i>
          </span>
           <span class="header_login" slot="right" >
            <span class="header_login_text" v-if="!userInfo._id" >登录|注册</span>
            <span class="iconfont icon-person" v-else></span>
          </span>
        </HeaderTop>
        <!--首页导航-->
        <nav class="msite_nav">
          <div class="swiper-container" v-if="categorys.length">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(minarr,index) in categorysArr" :key="index">
                <a href="javascript:" class="link_to_food" v-for="(food,index) in minarr" :key="index">
                  <div class="food_container">
                    <img :src="baseImgUrl+food.image_url">
                  </div>
                  <span>{{food.title}}</span>
                </a>
              </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination" ></div>
          </div>
          <img src="./images/msite_back.svg" alt="" v-else>
        </nav>
        <!--首页附近商家-->
        <div class="msite_shop_list">
          <div class="shop_header">
            <i class="iconfont icon-xuanxiang"></i>
            <span class="shop_header_title">附近商家</span>
          </div>
        </div>
        <ShopList></ShopList>
      </section>
</template>

<script>
  import HeaderTop from '../../components/HeaderTop/HeaderTop'
  import ShopList from '../../components/ShopList/ShopList'
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import 'swiper/swiper-bundle.min.css'
  import 'swiper/swiper-bundle.min.js'
  export default {
    data(){
      return {baseImgUrl:'https://fuss10.elemecdn.com'
      }
    },
    mounted(){
    //   new Swiper('.swiper-container',{
    //     loop:true,
    //     pagination: {
    //     el: '.swiper-pagination',
    //     clickable:true
    // },
    // });
    this.$store.dispatch('getShops')
    },
    computed:{
      ...mapState(['address', 'categorys', 'userInfo']),
      categorysArr(){
        const arr = []
        let minarr=[]
        const {categorys}=this
        categorys.forEach(c => {
          if(minarr.length===8){
          minarr=[]
        };
        if(minarr.length===0){
          arr.push(minarr)
        }
        minarr.push(c)
        });
        return arr
          }
    },
   watch:{
      categorys(value){
        this.$nextTick(
          ()=>{
            new Swiper('.swiper-container',{
              loop:true,
                pagination: {
                el: '.swiper-pagination',
            },
            }

            )
          }
        )
      }
    },
    components:{
      HeaderTop,
      ShopList
    }
  }

</script>

<style lang='stylus'>
  @import '../../common/stylus/mixins.styl'
  .msite  //首页
    width 100%
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 0
        .shop_icon
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px
</style>