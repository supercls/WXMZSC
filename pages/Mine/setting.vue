<template>
	<view class="page">
		<view class= "option">
			<view class="o-list" @click="switchDad">
				<text class="o-text1">切换爸爸/妈妈身份</text>
				<text class="o-text2">{{ isDad? '我是准爸/宝爸':'我是准妈/宝妈' }}</text>
				<img class="o-img" src="../../static/mine/jiantou.png" alt="">
			</view>
			<view class="o-list">
				<text class="o-text1"  @click= "jumpPage(1)">用户协议及隐私条款</text>
				<img class="o-img" src="../../static/mine/jiantou.png" alt="">
			</view>
			<view class="o-list" @click= "jumpPage(2)">
				<text class="o-text1">关于我们</text>
				<img class="o-img" src="../../static/mine/jiantou.png" alt="">
			</view>
		</view>
		<view class="btn">
			<button type="primary" class= "b-btn">
				退出登录
			</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isDad: true
			}
		},
		
		methods: {
			// 跳转页面
			jumpPage(num){
				if(num == 1) {
					uni.navigateTo({
						url:'../../pages/Web/index'
					})
				}else {
					uni.navigateTo({
						url:'../../pages/User/aboutUs'
					})
				}
			},
			
			// 身份切换
			switchDad(){
				uni.showModal({
				    title: '提示',
				    content: '确定要切换爸爸/妈妈的身份?',
					success: (res) =>{
						if(res.confirm){
							  this.isDad= !this.isDad
						}else if (res.cancel) {
							console.log('用户取消了')
						}
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	.page {
		position: relative;
		.option {
			width: 750rpx;
			box-sizing: border-box;
			padding: 0 30rpx;
			background-color: #fff;
			.o-list {
				width: 100%;
				height: 105rpx;
				border-bottom: 1px solid #E5E5E5;
				display: flex;
				flex-direction: row;
				align-items: center;
				
			}
			.o-text1 {
				flex: 1;
				font-size: 32rpx;
				color: #333;
			}
			.o-text2 {
				font-size: 28rpx;
				color: #999;
				margin-right: 10rpx;
			}
			.o-img {
				width: 16rpx;
				height: 28rpx;
				margin-top: 5rpx;
			}
			
		}
		.btn {
			width: 750rpx;
			position: absolute;
			left: 0;
			bottom: 88rpx;
			.b-btn{
				width: 630rpx;
				height: 88rpx;
				color: #FF70B5;
				background-color: #fff;
			}
		}
	}
</style>
