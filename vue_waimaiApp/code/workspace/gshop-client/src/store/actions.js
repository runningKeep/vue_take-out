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
import {
  reqAddress,
  reqFoodList,
  reqShops, 
  reqUserinfo,
  logOut,
  reqShopInfo,
  reqShopRatings,
  reqShopGoods,
  reqShopList} from '../api'
export default{
  async getAddress({commit,state}){
    const geohash = state.latitude+','+state.longitude
    const result = await reqAddress(geohash)
    if(result.code===0){
      const address = result.data
      commit(RECEIVE_ADDRESS,{address})
    }
  },
  async getFoodList({commit}){
    const result = await reqFoodList()
    if(result.code===0){
      const categorys =result.data
      commit(RECEIVE_CATEGORYS,{categorys})
    }
  },
  async getShops({commit,state}){
    const result = await reqShops(state.latitude,state.longitude)
    if(result.code===0){
      const shops =result.data
      commit(RECEIVE_SHOPS,{shops})
    }
  },
  recordUser({commit},user){
    commit(RECEIVE_USER_INFO,{user})
  },
  async getUserinfo({commit}){
    const result =await reqUserinfo()
    if(result.code===0){
      const userinfo =result.data
      commit(RECEIVE_USER_INFO,{userinfo})
    }
  },
  async reqlogout({commit}){
    const result =await logOut()
    if(result.code===0){
      commit(RESET_USER_INFO)
    }
  },
//--------------------------------------MOCK接口
  async getShopInfo({commit}) {
    const result = await reqShopInfo()
    if(result.code===0) {
    const info = result.data
    info.score = 3.5
    commit(RECEIVE_INFO, {info})
    }
    },
    async getShopGoods({commit}, cb) {
      const result = await reqShopGoods()
      if(result.code===0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
      // 如果组件中传递了接收消息的回调函数 , 数据更新后 , 调用回调通知调用的组件
      cb && cb()
      }
      },

      // 异步获取商家评价列表
    async getShopRatings({commit},fn) {
      const result = await reqShopRatings()
      if(result.code===0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})
      fn && fn()
      }
      },

      changeFoodCount({commit},{isadd,food}) {
        if(isadd){
          commit(INCREMENT_FOOD_COUNT,{food})
        }else{
          commit(DECREMENT_FOOD_COUNT,{food})
        }
      },
      clearCart({commit},fn) {
        const callback = fn                                //直接传fn
          commit(CLEAR_CART,{callback})
        },

    async getShopList({commit,state},keyword) {
      const geohash = state.latitude+','+state.longitude
      const result = await reqShopList(geohash,keyword)
      if(result.code===0) {
      const searchShops = result.data
      commit(RECEIVE_SEARCH_SHOPS, {searchShops})
      }
      }
  
        
}