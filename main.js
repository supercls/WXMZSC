import Vue from 'vue'
import App from './App'
import store from './store/index'

let apiServer=''
uni.getSystemInfo({    //同步
    success: function (res) {
		res.brand == 'devtools'? apiServer='http://localhost:1442/api/' : ''
    }
});

Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.prototype.$apiServer = apiServer
Vue.prototype.$WebServer = 'http://mzjksc.yystars.com:5603/'

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
