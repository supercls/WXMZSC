<template>
	<view class="wrap-user">
		<view class="user-logo">
			<text>母子健康</text>
		</view>
		<view class="user-center">
			<view class="item">
				<image src="../../static/user/user_1.png" mode="" class="uni-img"></image>
				<input class="uni-input" type="number" placeholder-class="placeholder"  placeholder="请输入手机号" maxlength="11" v-model="userCode"/>
			</view>
			<view class="item">
				<image src="../../static/user/user_2.png" mode="" class="uni-img"></image>
				<input class="uni-input" placeholder-class="placeholder"  placeholder="请输入密码"  password v-model="userPassword"/>
			</view>
		</view>
		<view class="user-bottom">
			<button type="primary" :loading="loading" class="but" @tap="submit">登录</button>
			 <view class="bot">
				 <navigator hover-class="none" url="/pages/User/rejister"><text>用户注册</text></navigator>
				 <navigator hover-class="none" url="/pages/User/reset"><text>忘记密码</text></navigator>
			 </view>
		</view>
		<view class="user-fixed">
			<navigator hover-class="none" url="/pages/User/rejister"><text>关于我们</text></navigator>
			<text class="t1">|</text>
			<navigator hover-class="none" url="/pages/User/rejister"><text>游客访问</text></navigator>
		</view>
	</view>
</template>

<script>
	import {login} from '../../utils/api.js'
	export default {
		data() {
			return {
				loading:false,
				userCode:'',
				userPassword:''
			}
		},
		onLoad() {
			
		},
		methods: {
			submit(){
				console.log(this.userCode)
				login({
					period:1,
					periodDays:0
				}).then(res =>{
					console.log(res)
				}).catch(err =>{
					
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
