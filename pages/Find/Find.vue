<template>
	<view class="page">
		<img src="../../static/find/findBg.png" alt="" class= "f-imgBg">
		<view class="register">
			<view class="r-box">
				<text class="r-text">在线登记</text>
				<view class="r-options">
					<view class="o-box">
						<img src=".../../static/find/yf.png" alt="" class= "o-img">
						<text class="o-text o-text1">孕妇建卡</text>
					</view>
					<view class="o-box">
						<img src="../../static/find/hj.png" alt="" class= "o-img">
						<text class="o-text o-text2">婚检登记</text>
					</view>
					<view class="o-box">
						<img src="../../static/find/yj.png" alt="" class= "o-img">
						<text class="o-text o-text3">孕检登记</text>
					</view>
				</view>
			</view>
		</view>
		<view class= "img-box">
			<view class="f-img">
				<img src="../../static/find/baogao.png" alt="" class= "img">
			</view>
			<view class="f-img f-img1">
				<img src="../../static/find/zixun.png" alt="" class= "img">
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onShow() {
			console.log('-------------------------')
			console.log(uni.getStorageSync('openId'))
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.page {
		position: relative;
		background-color: #fff;
		.f-imgBg {
			width: 750rpx;
			height: 512rpx;
		}
		.register {
			position: absolute;
			top: 300rpx;
			left: 0;
			width: 750rpx;
			height: 310rpx;
			box-sizing: border-box;
			padding: 0 30rpx;
			.r-box {
				width: 100%;
				box-sizing: border-box;
				padding-top: 40rpx;
				height: 310rpx;
				background-color: #fff;
				border-radius: 10rpx;
				box-shadow:7px 10px 20px #eee;
				.r-text {
					font-size: 32rpx;
					color:#333;
					padding-left: 40rpx;
					
				}
				.r-options {
					margin-top: 30rpx;
					width: 100%;
					box-sizing: border-box;
					padding: 0 60rpx;
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					
					.o-box {
						width: auto;
						height: 140rpx;
						display: flex;
						flex-direction: column;
						.o-img {
							width: 103rpx;
							height: 103rpx;
						}
						.o-text {
							font-size: 26rpx;
						}
						.o-text1 {
							color: #657FED;
						}
						.o-text2 {
							color: #F67947;
						}
						.o-text3 {
							color: #279DF6;
						}
					}
				}
			}
		}
		.img-box {
			width: 750rpx;
			box-sizing: border-box;
			padding: 10rpx 30rpx 0;
			margin-top: 130rpx;
			background-color: #fff;
			.f-img1 {
				margin-top: 40rpx;
			}
			.f-img {	
				width: 100%;
				.img {
					width: 100%;
					height: 180rpx;
				}
			}
			
		}
	}
</style>
