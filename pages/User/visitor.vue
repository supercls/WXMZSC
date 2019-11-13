<template>
	<view class="visitor">
		<img src="../../static/user/visitor.png" class= "i-img" alt="">
		<view 
			class= "b-login btn" 
			@click= "jumpLogin"
			>
		    用户登录
		</view>
		<view 
			class= "b-browse btn"
			@click= "jumpBrowse"
			>
			浏览手册
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			jumpLogin() {
				uni.navigateTo({
					url: '../../pages/User/index'
				})
			},
			
			jumpBrowse() {
				uni.navigateTo({
					url: '../../pages/Web/index'
				})
			}
		}
	}
</script>

<style lang="scss">
	.visitor {
		width: 750rpx;
		height: 100vh;
		background-color: #A4E0F8;
		display: flex;
		flex-direction: column;
		align-items: center;
		.i-img {
			margin-top: 36rpx;
			width: 710rpx;
			height: 677rpx;
		}
		.btn {
			margin-top: 80rpx;
			width: 630rpx;
			height: 88rpx;
			line-height: 88rpx;
			text-align: center;
			border-radius: 8rpx;
			font-size: 36rpx;
		}
		.b-login {
			background-color: #F069A9;
			color: #fff;
		}
		.b-browse {
			background-color: #fff;
			color: #F069A9;
		}
	}
</style>
