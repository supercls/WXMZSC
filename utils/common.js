import CacheStorage from './auth.js'

const UserInfo = new CacheStorage('MZSC_USER_STORAGE')  //登录用户的信息
const UserOpenId = new CacheStorage('MZSC_WEIXIN_OPENID')   //微信用户openID

export { 
	UserInfo,
	UserOpenId
}

