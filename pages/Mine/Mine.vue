<template>
	<view class= "page">
		<view class= "top" >
			<image src="../../static/mine/background.png" class= "bgImg"></image>
			<view class= "header" @click= "pageJump('7')">
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
	
	import { Ceshi } from '../../utils/ceshi'
	const ceshi = new Ceshi()
	
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
		
		onLoad() {
			uni.login({                  //异步回调太多，全部同步，等openId获取成功后再执行入口页面的请求
			  provider: 'weixin',
			  success: (data)=>{
				 let obj = {
					code: data.code
				 }
				 ceshi.getOpenId(obj).then(res=>{
					 console.log(res)
				 })
				 
				 
			  },
			})
		},
		
		
		methods: {
			pageJump( num ){
				// console.log(num)
				switch(num){
					case  '1':
					const ManageHandbooks= 'https://mzjksc.yystars.com/xcx.mzsc/Area/MyHandbook/ManageHandbooks.html?deviceType=5&name=&idCard=&districtNo=410101&districtName=%E6%B2%B3%E5%8D%97%E7%9C%81%20%E9%83%91%E5%B7%9E%E5%B8%82%20%E5%B8%82%E8%BE%96%E5%8C%BA&machineCode=50f99df5730a4335ba3e951d4f7bbb49&WomanId=2000363&APPType=mzsc'
					const ManageHandbooksData = encodeURIComponent(JSON.stringify(ManageHandbooks))
					    uni.navigateTo({
					       url: `../../pages/Web/index?url= ${ManageHandbooksData}`
					    })
						break;
					case  '2':
						const MaternalMessenger= 'https://mzjksc.yystars.com/xcx.web/Area/Slidebar/MaternalMessenger/Main.html?deviceType=5&currentChapter=%E5%AD%95%E4%BA%A7%E6%9C%9F%E7%AF%87&subsidiaryParams=&machineCode=50f99df5730a4335ba3e951d4f7bbb49&WomanId=2000363'
						const MaternalMessengerData = encodeURIComponent(JSON.stringify(MaternalMessenger))
					    uni.navigateTo({
					       url: `../../pages/Web/index?url= ${MaternalMessengerData}`
					    })
						break;
					case  '3':
						const Collection= 'https://mzjksc.yystars.com/xcx.web/Area/Slidebar/Collection/Main.html'
						const CollectionData = encodeURIComponent(JSON.stringify(Collection))
					    uni.navigateTo({
					        url: `../../pages/Web/index?url= ${CollectionData}`
					    })
						break;
					case  '4':
						const HelpAndFeedback = 'https://mzjksc.yystars.com/xcx.web/Area/Slidebar/HelpAndFeedback/FeedBack.html?deviceType=5&machineCode=50f99df5730a4335ba3e951d4f7bbb49&WomanId=2000363&APPType=mzsc'
					    const HelpAndFeedbackData= encodeURIComponent(JSON.stringify(HelpAndFeedback))
						uni.navigateTo({	
					       url: `../../pages/Web/index?url= ${HelpAndFeedbackData}`
					    })
						break;
					case  '5':
					    uni.navigateTo({
					       url: '../../pages/Mine/setting'
					    })
						break;
					case  '6':
					    uni.navigateTo({
					       url: '../../pages/brief/brief'
					    })
						break;
					case  '7':
					    uni.navigateTo({
					       url: '../../pages/Mine/userInfo'
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
