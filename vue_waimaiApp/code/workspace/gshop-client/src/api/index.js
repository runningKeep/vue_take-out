import ajax from './ajax'
// const baseUrl = 'http://localhost:4000'
const baseUrl = '/api'
const BASE_URL = '/api'
// export const reqAddress = (geohash) =>ajax(`${baseUrl}/position/${geohash}`)
export const reqAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`)

export const reqFoodList = () =>ajax(`${BASE_URL}/index_category`)

export const reqShops = (latitude,longitude) =>ajax(`${BASE_URL}/shops`,{latitude,longitude})

export const reqShopList = (geohash,keyword) =>ajax(`${BASE_URL}/search_shops/`,{geohash,keyword})  //请求体方式怎么写

export const reqCaptcha = () =>ajax(`${BASE_URL}/captcha/`)

export const userLoad = ({name,pwd,captcha}) =>ajax(`${BASE_URL}/login_pwd/`,{name,pwd,captcha},'POST')

export const reqCode = (phoneNum) =>ajax(`${BASE_URL}/sendcode/`,{phoneNum})

export const phoneCaptchaLoad = (phoneNum,code) =>ajax(`${BASE_URL}/login_sms/`,{phoneNum,code},'POST')

export const reqUserinfo = () =>ajax(`${BASE_URL}/userinfo/`)

export const logOut = () =>ajax(`${BASE_URL}/logout/`)

  
//mock接口
export const reqShopInfo = () =>ajax('/shopinfo')
export const reqShopRatings = () =>ajax('/shopratings')
export const reqShopGoods = () =>ajax('/shopgoods') 