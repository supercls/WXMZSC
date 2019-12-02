<template>
	<view class="page">
		<img src="../../static/find/findBg.png" alt="" class= "f-imgBg">
		<view class="register">
			<view class="r-box">
				<text class="r-text">在线登记</text>
				<view class="r-options">
					<view class="o-box"  @click= "pageJump('1')">
						<img src=".../../static/find/yf.png" alt="" class= "o-img">
						<text class="o-text o-text1">孕妇建卡</text>
					</view>
					<view class="o-box"  @click= "pageJump('2')">
						<img src="../../static/find/hj.png" alt="" class= "o-img">
						<text class="o-text o-text2">婚检登记</text>
					</view>
					<view class="o-box"  @click= "pageJump('3')">
						<img src="../../static/find/yj.png" alt="" class= "o-img">
						<text class="o-text o-text3">孕检登记</text>
					</view>
				</view>
			</view>
		</view>
		<view class= "img-box">
			<view class="f-img"  @click= "pageJump('4')">
				<img src="../../static/find/baogao.png" alt="" class= "img">
			</view>
			<view class="f-img f-img1"  @click= "pageJump('5')">
				<img src="../../static/find/zixun.png" alt="" class= "img">
			</view>
		</view>
	<!-- 	<view class="xx">
			
		</view> -->
		<Popup
			title= "温馨提示"
			:showNumber= showNumber
		>
			<view slot= "popup" class="popup">
				<view class="p-text">
					<text>您所在的地区暂未开通服务</text>
				</view>
				<view class="p-btn">
					<view class= "cancel btn" @click= "success()">
						<text class= "p-text">知道了</text>
					</view>
				</view>
			</view>
		</Popup>
		
	</view>
</template>

<script>
	import Popup from '../../components/propUp/index.vue'
	import '../../common/popup.scss'
	import { mapGetters } from 'vuex'
	import { webServer } from '../../config.js'
	
	export default {
		data() {
			return {
				showNumber: '0', // 0表示隐藏弹窗,
				userInfoData: {} //数据填充
			}
		},
		onShow() {
			// console.log(uni.getStorageSync('openId'))
		},
		
		components: {
			Popup
		},
		
		computed:{
			...mapGetters([
				'userInfo'
			])
		},
		
		onShow(){
			this.userInfoData = JSON.parse(this.userInfo)
		},
		
		methods: {	
			
			// 弹窗提示
			
			showModal() {
				uni.showModal({
				    title: '温馨提示',
				    content: '您所在的地区暂未开通服务',
					showCancel: false,
					confirmColor: '#FF70B5',
					success: (res) =>{
						if(res.confirm){
							  this.isDad= !this.isDad
						}else if (res.cancel) {
							console.log('用户取消了')
						}
					}
				});
			},
			
			
			//页面跳转
			jump(data) {
			 	const path = `xcx.web/Area/${data}?deviceType=5&womanId=${this.userInfoData.WomanId}&machineCode=${this.userInfoData.WeChatOpenId}&districtNo=${this.userInfoData.DistrictNo}`
				return path
			},
			
			// 页面跳转
			pageJump(num){
				// console.log(data)
				switch (num){
					case '1':
						if(this.userInfoData.DistrictNo.substr(0,2)=='41'){
							const PregnantRegister= webServer + this.jump('Demo/PregnantRegister/Main.html')
							// const PregnantRegister= 'https://mzjksc.yystars.com/xcx.web/Area/Demo/PregnantRegister/Main.html?deviceType=3&womanId=2000274&machineCode=a0f96e871e854f528423ccc5289e89b8&WomanId=2000274&APPType=mzsc'
							const PregnantRegisterData = encodeURIComponent(JSON.stringify(PregnantRegister))
							uni.navigateTo({
							    url: `../../pages/Web/index?url= ${PregnantRegisterData}`
							})
						}else {
							this.showModal()
						}
						
						break;
					case '2':
						this.showModal()
						break;
					case '3':
						this.showModal()
						break;
					case '4':
						if(this.userInfoData.DistrictNo.substr(0,2)=='41'){
							const SCBG= webServer + this.jump('Demo/Report/SCBG/index.html')
							// const SCBG= 'https://mzjksc.yystars.com/xcx.web/Area/Demo/Report/SCBG/index.html?deviceType=5&womanId=2000274&machineCode=a0f96e871e854f528423ccc5289e89b8&userCode=17051026667&WomanId=2000274&APPType=mzsc'
							const SCBGData = encodeURIComponent(JSON.stringify(SCBG))
							uni.navigateTo({
								url: `../../pages/Web/index?url= ${SCBGData}`
							})
						}else {
							this.showModal()
						}
						
						break;
					case '5':
						const weChat= webServer + this.jump('Demo/weChat/chat.html')
						// const weChat= 'https://mzjksc.yystars.com/xcx.web/Area/Demo/weChat/chat.html?WomanId=2000274&deviceType=5&districtNo=410101&machineCode=a0f96e871e854f528423ccc5289e89b8&WomanId=2000274&APPType=mzsc'
						const weChatData = encodeURIComponent(JSON.stringify(weChat))
						uni.navigateTo({
						    url: `../../pages/Web/index?url= ${weChatData}`
						})
						break;
				}
				
			}
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
