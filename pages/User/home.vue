<template>
	<view>
		<view class="home-index">
			<!--微信开发能力open-type-->
			<image src="../../static/user/logo.png" mode="" class="img1"></image>
			<image src="../../static/user/mzjk.png" mode="" class="img2"></image>
			<image src="../../static/user/yxhh.png" mode="" class="img3"></image>
		</view>
		<view class="home-bottom">
			<button type="primary"  @tap="getWxUser">立即体验</button>
			<text>国家卫生健康委员会</text>
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
			uni.showLoading({
				title:'正在登录...',
				mask:true
			})
			//#ifdef MP-WEIXIN
			uni.login({                  //等openId获取成功后再执行入口页面的请求
			  provider: 'weixin',
			  success: (loginRes) => {
				  getOpenId({code:loginRes.code}).then(res=> {
					 this.$store.commit('setOpenID',{openId: res.msg})
					 getUserInfo({openId:this.openID}).then(data =>{
						 this.$store.commit('setUserInfo',JSON.stringify(data.dtData[0]))  
						 uni.hideLoading()
						 uni.switchTab({
						     url: '/pages/Home/Home'
						 });
					 }).catch(err =>{
						 uni.hideLoading()
						 console.log("获取用户信息失败"+JSON.stringify(err))  //不作自动跳转，用户手动点击
					 })
				  }).catch(err =>{
					  uni.hideLoading()
					  console.log(err)
				  })
			  },
			  fail: (err) => {
				uni.hideLoading()
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
			getWxUser(res){
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
		margin-top: 270rpx;
		text-align: center;
		.img1{
			width: 320rpx;
			height: 320rpx;
		}
		.img2{
			width: 480rpx;
			margin-top: -40rpx;
			height: 78rpx;
		}
		.img3{
			width: 384rpx;
			margin-top: 42rpx;
			height: 44rpx;
		}
	}
	.home-bottom{
		position: absolute;
		bottom:130rpx;
		left: 0;
		right: 0;
		text-align: center;
		button{
			width: 312rpx;
			height: 86rpx;
			line-height: 86rpx;
			background: #F97AB3;
			margin:20rpx auto;
			border:none;
		}
		text{
			font-size: 24rpx;
			color:#F97AB3;
		}
	}
</style>