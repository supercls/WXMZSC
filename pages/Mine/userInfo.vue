<template>
	<view class="wrap-mine page">
		<view class="content">
			<view class="mine-item">
				<image src="../../static/mine/icon-avatar.png" mode="" class="item-img"></image>
				<text class="item-text" @tap="uploadImg">修改头像</text>
				<image src="../../static/mine/icon_right.png" mode="" class="item-icon"></image>
			</view>
			<view class="empty"></view>
			<view class="mine-item" @click= "modifyNickname()">
				<text class="item-left">我的昵称</text>
				<text class="item-text">上海臻鼎健康</text>
				<image src="../../static/mine/icon_right.png" mode="" class="item-icon"></image>
			</view>
			<view class="mine-item">
				<text class="item-left">密码</text>
				<navigator hover-class="none" url="/pages/User/reset"><text class="item-text">修改密码</text></navigator>
				<image src="../../static/mine/icon_right.png" mode="" class="item-icon"></image>
			</view>
			<view class="mine-item">
				<text class="item-left">手机号</text>
				<text class="item-text">18399999999</text>
				
			</view>
			<view class="mine-item" @tap="changeDis">
				<text class="item-left">我的地区</text>
				<text class="item-text" >{{USER.userDis}}</text>
				<image src="../../static/mine/icon_right.png" mode="" class="item-icon"></image>
			</view>
		</view>
		<lotus-address v-on:choseVal="choseValue" :lotusAddressData="lotusAddressData"></lotus-address>
		<Popup
			title= "昵称修改"
			:showNumber= showNumber
		>
			<view slot= "popup" class="popup">
				<view class="p-input">
					<input 
						type="text" 
						placeholder="请输入昵称"  
						v-model= "nickname"
						class="input"
					/>
				</view>
				<view class="p-btn">
					<view class= "cancel btn" @click= "calse()">
						<text>取消</text>
					</view>
					<view class= "line"></view>
					<view class= "success btn" @click="success()">
						<text>确认</text>
					</view>
				</view>
			</view>
			
		</Popup>
	</view>
</template>

<script>
	import lotusAddress from '../../components/picker-address/lotusAddress.vue'
	import Popup from '../../components/propUp/index.vue'
	import '../../common/popup.scss'
	import { mapGetters } from 'vuex'
	export default{
		data(){
			return{
				showNumber: '0', // 0表示隐藏弹窗
				nickname: '', // 现有的昵称
				USER:{
					userDis:'北京市',
					
				},
				lotusAddressData:{
					visible:false,
					provinceName:'',
					cityName:'',
					townName:'',
				},
			}
		},
		computed:{
			...mapGetters([
				'openID'
			])
		},
		watch:{
			openID(val){
				console.log(val)
			}
		},
		components:{
			lotusAddress,
			Popup
		},
		onLoad() {
			console.log(this.$store.state.openID)
		},
		methods:{
			// 昵称弹窗
			modifyNickname() {
				this.showNumber = '1'
			},
			
			//关闭弹窗
			calse() {
				this.showNumber = '0'
			},
			
			//确认
			success() {
				this.showNumber = '0';
				console.log(this.nickname)
			},
			
			uploadImg(){   //修改头像
				uni.chooseImage({
				    count: 1, 
				    sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album','camera'], //从相册选择
				    success: function (res) {
						console.log(res)
				        console.log(JSON.stringify(res.tempFilePaths));
				    },
					fail: function (err) {
						uni.showToast({
						    title: JSON.stringify(err),
							icon:'none',
						    duration: 2000
						});
					}
				});
			},
			changeDis() { //调用地址PICKER  //确认回调
				this.lotusAddressData.visible = true;
			},
			choseValue(res){   //确认回调
				console.log(res);
				this.lotusAddressData.visible = res.visible;
				this.lotusAddressData.provinceName = res.province;
				this.lotusAddressData.cityName = res.city;
				this.lotusAddressData.townName = res.town;
				this.USER.userDis = `${res.province} ${res.city} ${res.town}`; 
			}
		}
	}
</script>
<style lang="scss">
	.wrap-mine{
		width: 100%;
		.content{
			background: #fff;
		}
		.mine-item{
			display: flex;
			height: 130rpx;
			margin:0 30rpx;
			line-height: 130rpx;
			background: #fff;
			align-items: center;
			border-bottom: 1rpx solid #E5E5E5;
			.item-img{
				width: 98rpx;
				height: 98rpx;
				border-radius: 50%;
				justify-content: center;
			}
			navigator{
				flex: 1;
				text-align: right;
			}
			.item-text{
				flex: 1;
				text-align: right;
				padding-right: 20rpx;
				font-size: 28rpx;
				color: #999999;
			}
			.item-icon{
				width: 14rpx;
				height: 26rpx;
			}
			.item-left{
				color: #333;
				font-size: 32rpx;
				font-weight: Regular;
			}
		}
		.empty{
			width: 100%;
			height: 10rpx;
			background: #F2F2F2;
		}
	}
</style>