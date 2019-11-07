import Vue from 'vue'
import Vuex from 'vuex'
import { UserOpenId } from '../utils/common.js'
import getters from './getters'

Vue.use(Vuex)
const store = new Vuex.Store({
	state:{
		openID:UserOpenId.getInfo().openId ||''
	},
	mutations:{
		setOpenID(state,data){
			state.openID = data.openId
			UserOpenId.setInfo(data)
		}
	},
	actions:{
		
	},
	getters
})
export default store