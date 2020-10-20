import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../pages/MSite/MSite'
import Search from '../pages/Search/Search'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Login from '../pages/Login/Login'
import Shop from '../pages/Shop/Shop'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings'

Vue.use(VueRouter)

export default new VueRouter({

    routes:[
        {
            path:'/msite',
            component:MSite,
            meta:{
              showFooter:true
            }
        },
        {
            path:'/search',
            component:Search,
            meta:{
              showFooter:true
            }
        },
        {
            path:'/order',
            component:Order,
            meta:{
              showFooter:true
            }
        },
        {
            path:'/profile',
            component:Profile,
            meta:{
              showFooter:true
            }
        },
        {
            path:'/login',
            component:Login
        },
        {
            path:'/shop',
            component:Shop,
            children:[
              {
                path:'/shop/shopgoods',
                component:ShopGoods
              },
              {
                path:'/shop/shopinfo',
                component:ShopInfo
              },
              {
                path:'/shop/shopratings',
                component:ShopRatings
              },
              {
                path: '',
                redirect: '/shop/shopgoods'
              }
            ]
        },
        {
            path:'/',
            component:MSite,
            meta:{
              showFooter:true
            }
        }
    ]
})