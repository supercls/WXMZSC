<template>
	<view class= "page">
		<view class= "top" >
			<image src="../../static/mine/background.png" class= "bgImg"></image>
			<view class= "header">
				<view class= "flex avatar">
					<image src="../../static/mine/icon-avatar.png" class= "avatarImg"></image>
				</view>	
				<view class= "nickname flex">
					<text class="nicknameText">{{ nickname }}</text>
					<image src="../../static/mine/nickname.png" class="nicknameImg"></image>
				</view>
				<view class="current flex">
					<text class="currentText">{{ iphone }}</text>
				</view>
				<view class="current flex">
					<text class="currentText">{{ add }}</text>
				</view>
			</view>
		</view>
		<view class= "list">
			<view 
				class="detail flex" 
				v-for= "item in listData"
				:key= "item.id"
				@click= "pageJump(item.id)"
				>
				<image :src= "item.imgUrl" alt="" class= "d-img1">
				<text class= "d-text">{{ item.name }}</text>
				<image src="../../static/mine/jiantou.png" alt="" class= "d-img2">
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				nickname: '您还没有昵称', //昵称
				iphone: '17021026667', // 手机号
				add: '江苏省苏州市吴中区' ,// 地址
				listData: [ // 列表信息
					{name: '我的手册', imgUrl: '../../static/mine/shouce.png', id: '1'},
					{name: '母婴信使', imgUrl: '../../static/mine/xinshi.png', id: '2'},
					{name: '我的收藏', imgUrl: '../../static/mine/shoucang.png', id: '3'},
					{name: '帮助与反馈', imgUrl: '../../static/mine/fankui.png', id: '4'},
					{name: '系统与设置', imgUrl: '../../static/mine/shezhi.png', id: '5'},
					{name: 'APP下载指南', imgUrl: '../../static/mine/zhinan.png', id: '6'}
				], 
				
			}
		},
		methods: {
			pageJump( num ){
				// console.log(num)
				switch(num){
					case  '1':
					    uni.navigateTo({
					       // url: '../../pages/Web/index?url=http://mzjksc.yystars.com:5603/YYQ.Web/V5.2.9/Area/agreement/agreement.html'
					    })
						break;
					case  '2':
					    uni.navigateTo({
					       // url: '../../pages/view/index?id=2'
					    })
						break;
					case  '3':
					    uni.navigateTo({
					       // url: '../../pages/view/index?id=3'
					    })
						break;
					case  '4':
					    uni.navigateTo({
					       // url: '../../pages/view/index?id=4'
					    })
						break;
					case  '5':
					    uni.navigateTo({
					       // url: '../../pages/view/index?id=5'
					    })
						break;
					case  '6':
					    uni.navigateTo({
					       url: '../../pages/brief/brief'
					    })
						break;
				}
			}
		}
	}
</script>

<style  lang= 'scss'>
	.page {
		.bgImg {
			width: 750rpx;
			height: 390rpx;
		}
		.top {
			width: 750rpx;
			height: 390rpx;
			position: relative;
			.header {
				position: absolute;
				top:45rpx;
				left: 50%;
				transform: translate(-50%, 0);
			/* 	padding-top: 45rpx;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center; */
				.avatar {
					.avatarImg {
						width:160rpx;
						height: 160rpx;
					}
				}

				.nickname {
					.nicknameText {
						color: #333;
						font-size: 30rpx;
					}
					.nicknameImg {
						width: 28rpx;
						height: 28rpx;
						margin-left: 10rpx;
					}
				}
				
				.current {
					.currentText {
						color: #999;
						font-size: 28rpx;
					}
				}
			}
		}
		
		.list {
			width: 750rpx;
			box-sizing: border-box;
			padding: 0 30rpx;
			margin-top: 10rpx;
			background-color: #fff;
			.detail {
				width: 100%;
				height: 105rpx;
				border-bottom: 1px solid #E5E5E5;
				.d-img1 {
					width: 42rpx;
					height:42rpx;
				}
				.d-text {
					margin-left: 20rpx;
					font-size: 32rpx;
					color: #333;
					flex: 1;
					
				}
				.d-img2 {
					width: 16rpx;
					height: 28rpx;
				}
			}
		}
		.flex {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
		}

	}
</style>
