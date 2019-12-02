<template>
	<view class="page">
		<view class= "version">
			<image class= "v-img" src="../../static/user/Bitmap.png" mode=""></image>
			<text class= "v-text v-text1">母子健康</text>
			<text class= "v-text">V2.0.0</text>
		</view>
		<view class="contact">
			<view class="list" @click= "makePhoneCall">
				<img class= "l-img" src="../../static/user/dh.png" alt="">
				<text class="l-text1">联系电话</text>
				<text class="l-text2">4009699611</text>
			</view>
			<view class="list">
				<img class= "l-img" src="../../static/user/yx.png" alt="">
				<text class="l-text1">电子邮件</text>
				<text class="l-text2">2853955151@qq.com</text>
			</view>
			<view class="list">
				<img class= "l-img" src="../../static/user/qq.png" alt="">
				<text class="l-text1">客服QQ</text>
				<text class="l-text2">2853955151</text>
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
		methods: {
			makePhoneCall() {
				uni.makePhoneCall({
				    phoneNumber: '4009699611' //
				});
			}
		}
	}
</script>

<style lang="scss">
	.page {
		.version {
			padding-top: 100rpx;
			width: 750rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			.v-img {
				width: 182rpx;
				height: 182rpx;
			}
			.v-text {
				font-size: 32rpx;
				color: #666
			}
			.v-text1 {
				margin-top: -24rpx
			}
		}
		.contact {
			width: 750rpx;
			box-sizing: border-box;
			padding: 0 60rpx;
			background-color: #fff;
			margin-top: 100rpx;
			.list {
				width: 100%;
				height:105rpx;
				border-bottom: 1px solid #E5E5E5;
				display: flex;
				flex-direction: row;
				align-items: center;
				.l-img {
					width: 26rpx;
					height: 26rpx;
				}
				.l-text1 {
					font-size: 32rpx;
					color: #333333;
					margin-left:20rpx ;
					flex: 1;
				}
				
				.l-text2 {
					font-size: 28rpx;
					color: #FF70B5;
				}
			}
		}
	}
</style>
