<template>
	<view class="wrap-user">
		<view class="user-logo">
			<text>母子健康</text>
		</view>
		<view class="user-center">
			<view class="item">
				<image src="../../static/user/user_1.png" mode="" class="uni-img"></image>
				<input class="uni-input" type="number" placeholder-class="placeholder"  placeholder="请输入手机号" maxlength="11" v-model="userObj.mobileTel"/>
			</view>
			<view class="item">
				<image src="../../static/user/user_2.png" mode="" class="uni-img"></image>
				<input class="uni-input" placeholder-class="placeholder"  placeholder="请输入密码"  password v-model="userObj.passWord"/>
			</view>
		</view>
		<view class="user-bottom">
			<button type="primary" :loading="loading" :disabled="disabled" class="but" @tap="submit">登录</button>
			 <view class="bot">
				 <navigator hover-class="none" url="/pages/User/rejister"><text>用户注册</text></navigator>
				 <navigator hover-class="none" url="/pages/User/reset"><text>忘记密码</text></navigator>
			 </view>
		</view>
		<view class="user-fixed">
			<navigator hover-class="none" url="/pages/User/aboutUs"><text>关于我们</text></navigator>
			<text class="t1">|</text>
			<navigator hover-class="none" url="/pages/User/visitor"><text>游客访问</text></navigator>
		</view>
	</view>
</template>

<script>
	import {login} from '../../utils/api.js'
	import {mapGetters} from 'vuex'
	import md5 from '../../utils/md5.js'
	export default {
		data() {
			return {
				loading:false,
				userObj:{
					mobileTel:'',
					passWord:'',
					openId:''
				},
				disabled:false
			}
		},
		computed:{
			...mapGetters([
				'openID'
			])
				
		},
		onLoad() {
		},
		methods: {
			submit(){
				if(this.userObj.mobileTel == '' || this.userObj.mobileTel.length != 11){
					uni.showToast({
						title: '请输入正确的手机号',
						icon:'none',
						duration: 2000
					})
					return false
				}
				if(this.userObj.passWord == ''){
					uni.showToast({
						title: '请输入账号密码',
						icon:'none',
						duration: 2000
					})
					return false
				}
				this.loading = true
				this.disabled = true
				this.userObj.passWord = md5.hex_md5(this.userObj.passWord).toUpperCase()
				this.userObj.passWord = md5.hex_md5(this.userObj.passWord).toUpperCase()   //md5加密转大写
				this.userObj.openId = this.openID;
				login({...this.userObj}).then(res =>{
					this.$store.commit('setUserInfo',JSON.stringify(res.dtData[0]))
					uni.switchTab({
						url: '/pages/Home/Home'
					})
					this.disabled = false
					this.loading = false
					// #ifndef MP-WEIXIN  
						this.$store.commit('setOpenID',{openId: res.dtData[0].MachineCode})
					// #endif
				}).catch(err =>{
					this.loading = false
					this.disabled = false
				})
			}
		}
	}
</script>

<style lang="scss">
	.wrap-user {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding:0 60rpx 0 60rpx;
		.user-logo{
			padding:74rpx 0 0 0;
			text{
				font-size: 60rpx;
				color: #FF70B5;
				font-weight: Medium;
			}
		}
		.user-center{
			margin-top: 74rpx;
			width: 100%;
			.item{
				display: flex;
				border-bottom: 1rpx solid #E5E5E5;
				align-items: center;
				padding: 30rpx 0;
				.uni-img{
					width: 26rpx;
					height: 28rpx;
					margin-right: 19rpx;
					display: inline-block;
				}
				.placeholder{
					color: #999;
				}
				.uni-input{
					font-size: 32rpx;
					color: #333333;
				}
			}
		}
		.user-bottom{
			.but{
				margin-top: 118rpx;
				width: 630rpx;
				height: 88rpx;
				background-color: #F069A9;
				color: #fff;
				font-size: 36rpx;
				border-radius: 44rpx;
			}
			.bot{
				margin-top: 40rpx;
				display: flex;
				navigator{
					flex: 1;
					text-align: center;
				}
				text{
					font-size: 28rpx;
					color: #FF70B5;
				}
			}
		}
		.user-fixed{
			position: fixed;
			bottom: 50rpx;
			display: flex;
			justify-content: center;
			text{
				color: #999999;
				font-size: 28rpx;
			}
			.t1{padding:0 10rpx}
		}
	}
</style>
