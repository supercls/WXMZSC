import Vue from 'vue'
import App from './App'
import store from './store/index'
import { apiServer ,webServer} from './config.js'

Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.prototype.$apiServer = apiServer
Vue.prototype.$WebServer = webServer

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
