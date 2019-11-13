import Vue from 'vue'
import Vuex from 'vuex'
import { UserOpenId,UserInfo} from '../utils/common.js'
import getters from './getters'

Vue.use(Vuex)
const store = new Vuex.Store({
	state:{
		openID:UserOpenId.getInfo().openId ||'',
		userInfo:UserInfo.getInfo() ||''
	},
	mutations:{
		setOpenID(state,data){
			state.openID = data.openId
			UserOpenId.setInfo(data)
		},
		setUserInfo(state,data){
			state.userInfo = data
			UserInfo.setInfo(data)
		}
	},
	actions:{
		
	},
	getters
})
export default store