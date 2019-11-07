<script>
	import {getOpenId} from './utils/api.js'
	export default {
		onLaunch() {  //本身异步
			//#ifdef MP-WEIXIN
			uni.login({                  //异步回调太多，全部同步，等openId获取成功后再执行入口页面的请求
			  provider: 'weixin',
			  success: (loginRes) => {
				  getOpenId({code:loginRes.code}).then(res=> {
					 this.$store.commit('setOpenID',{openId: res.msg})
				  }).catch(err =>{
					  console.log(err)
				  })
			  },
			  fail: (err) => {
			  	uni.showToast({
			  	    title: JSON.stringify(err),
			  		icon:'none',
			  	    duration: 2000
			  	});
			  }
			});
			//#endif
			console.log('App Launch')
		},
		globalData: {  
			checkLoad: false
		}
	}
</script>

<style>
	@import "common/uni.css";
	/*每个页面公共css */
</style>
