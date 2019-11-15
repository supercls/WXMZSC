<template>
	<view>
		<view class="home-index">
			<button type="primary" open-type="getUserInfo" @getuserinfo="getuserinfo">手机号登录</button>
			<button type=""  @tap="jumpOther">游客访问</button>
		</view>
		
	</view>
</template>
<script>
	import {getOpenId,getUserInfo} from '../../utils/api.js'
	import {UserInfo} from '../../utils/common.js'
	import {mapGetters} from 'vuex'
	export default{
		data(){
			return{
				
			}
		},
		computed:{
			...mapGetters([
				'openID'
			])
		},
		onLoad(){
			//#ifdef MP-WEIXIN
			uni.login({                  //等openId获取成功后再执行入口页面的请求
			  provider: 'weixin',
			  success: (loginRes) => {
				  getOpenId({code:loginRes.code}).then(res=> {
					 this.$store.commit('setOpenID',{openId: res.msg})
					 getUserInfo({openId:this.openID}).then(data =>{
						 console.log(data)
						 uni.switchTab({
						     url: '/pages/Home/Home'
						 });
					 }).catch(err =>{
						 console.log("获取用户信息失败"+JSON.stringify(err))  //不作跳转，用户手动点击
					 })
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
		},
		methods:{
			getuserinfo(res){
				const isAu = res.detail.userInfo
				if(isAu){
					UserInfo.setInfo(JSON.stringify(isAu))
					this.$store.commit('setUserInfo',JSON.stringify(isAu))
				}
				uni.navigateTo({
					url:'/pages/User/index'
				})
			},
			jumpOther(){
				uni.navigateTo({
					url:'/pages/User/visitor'
				})
			}
		},
		components:{
			
		}
	}
</script>
<style lang="scss">
	.home-index{
		margin-top: 50vh;
		button{
			margin:20rpx 50rpx;
		}
	}
</style>