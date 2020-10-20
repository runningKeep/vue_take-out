import Vue from 'vue'
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART,
  RECEIVE_SEARCH_SHOPS
} from './mutations-types'

export default{
  [RECEIVE_ADDRESS](state,{address}){
    state.address=address
  },
  [RECEIVE_CATEGORYS](state,{categorys}){
    state.categorys=categorys
  },
  [RECEIVE_SHOPS](state,{shops}){
    state.shops=shops
  },
  [RECEIVE_USER_INFO](state,{userinfo}){
    state.userInfo=userinfo
  },
  [RESET_USER_INFO](state){
    state.userInfo=''
  },
//mock接口
  [RECEIVE_INFO](state, {info}) {
    state.info = info
    },
    [RECEIVE_RATINGS](state, {ratings}) {
    state.ratings = ratings
    },
    [RECEIVE_GOODS](state, {goods}) {
    state.goods = goods
    },
    [INCREMENT_FOOD_COUNT]( state,{food}) {
      if(!food.count){
      Vue.set(food,'count',1)
      state.cartfoods.push(food)
    }else{
      food.count++
    }
    },
    [DECREMENT_FOOD_COUNT]( state,{food}) {
      if(food.count){
        food.count--
        if(food.count===0){
          let index = state.cartfoods.indexOf(food)
          state.cartfoods.splice(index,1)
        }
      }
      },
      [CLEAR_CART](state,{callback}) {
        state.cartfoods.forEach(
          food =>{
            food.count=0
          },          
        )
        state.cartfoods=[]
        callback && callback()
        },

      [RECEIVE_SEARCH_SHOPS](state, {searchShops}) {
        state.searchShops = searchShops
        }

}