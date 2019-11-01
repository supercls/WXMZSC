import CacheStorage from './auth.js'

const UserInfo = new CacheStorage('MZSC_USER_STORAGE')  //登录用户的信息
const UserWX = new CacheStorage('MZSC_WEIXIN_USER')   //微信用户信息

export { 
	UserInfo,
	UserWX
}

