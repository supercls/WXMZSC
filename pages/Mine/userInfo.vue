<template>
	<view class="wrap-mine page">
		<view class="content">
			<view class="mine-item">
				<image :src="imgPath !== ''? imgPath : '../../static/mine/icon-avatar.png'"mode="" class="item-img"></image>
				<text class="item-text" @tap="uploadImg">修改头像</text>
				<image src="../../static/mine/icon_right.png" mode="" class="item-icon"></image>
			</view>
			<view class="empty"></view>
			<view class="mine-item" @click= "modifyNickname()">
				<text class="item-left">我的昵称</text>
				<text class="item-text">
					{{ nicknameData? nicknameData : '您暂时还没有' }}
				</text>
				<image src="../../static/mine/icon_right.png" mode="" class="item-icon"></image>
			</view>
			<view class="mine-item">
				<text class="item-left">密码</text>
				<navigator hover-class="none" url="/pages/User/reset"><text class="item-text">修改密码</text></navigator>
				<image src="../../static/mine/icon_right.png" mode="" class="item-icon"></image>
			</view>
			<view class="mine-item">
				<text class="item-left">手机号</text>
				<text class="item-text">
					{{ getMobileTel() }}
				</text>
				
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
	import { CF } from '../../utils/cfApi.js'
	import { getUserInfo } from '../../utils/api.js'
	const cf = new CF();
	export default{
		data(){
			return{
				showNumber: '0', // 0表示隐藏弹窗
				nickname: '', // 现有的昵称
				nicknameData: '', // 渲染需要的数据
				userInfoData: {}, // 填充数据
				imgPath:'', // 图片地址 
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

		components:{
			lotusAddress,
			Popup
		},
		
		computed:{
			...mapGetters([
				'userInfo'
			])
		},
		
		onLoad() {
			this.getData()
			this.pressAdd()
		},
		
		methods:{
			//数据处理
			getData() {
				this.userInfoData = JSON.parse(this.userInfo)
				this.nicknameData = this.userInfoData.NickName? this.userInfoData.NickName: ''
				this.nickname = this.userInfoData.NickName? this.userInfoData.NickName: ''
				this.imgPath = this.userInfoData.ImagePath? 'https://mzjksc.yystars.com/' + this.userInfoData.ImagePath: ''
				
				
			},
			//处理地区默认选项
			pressAdd() {
				this.USER.userDis = this.userInfoData.DistrictFullName;
				let arr = this.USER.userDis.split(' ')
				this.lotusAddressData= {
					visible:false,
					provinceName: arr[0],
					cityName: arr[1],
					townName: arr[2]
				}
			},
			
			// 图片编辑
			// iconImage(){
			// 	return 	this.userInfoData.ImagePath?'https://mzjksc.yystars.com/' + this.userInfoData.ImagePath : this.imagePath
			// },
			
			//电话号码处理
			getMobileTel() {
				if(this.userInfoData.MobileTel){
					return this.userInfoData.MobileTel.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2")
				}
			},
			
			// 打开弹窗
			modifyNickname() {
				this.showNumber = '1'
			},
			
			//关系修改昵称弹窗
			calse() {
				this.showNumber = '0'
			},
			
			//确认修改昵称
			success() {
				this.showNumber = '0'
				this.nicknameData = this.nickname
				const data= {
					nickName: this.nickname,
					machineCode: this.userInfoData.MachineCode,
				}
				
				cf.UpdateBaskInfo(data).then((res)=>{
					if(res.isSuccess){
						 this.getUserInfo()
					}
				}).catch(err=>{
					console.log(err)
				})
			},
			
			
			// 图像上传和base64转码
			uploadImg(){  
				uni.chooseImage({
				    count: 1, 
				    sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album','camera'], //从相册选择
				    success: response =>{
						uni.getFileSystemManager().readFile({
						    filePath: response.tempFilePaths[0], //选择图片返回的相对路径
						    encoding: 'base64', //编码格式
						    success: res => { //成功的回调	
								const arr = response.tempFilePaths[0].split('.');
								let data= {
									womanId: this.userInfoData.WomanId,
									imageData: res.data,
									suffix: `${arr[arr.length - 1]}`
								}
								console.log(data)
								cf.UploadImage(data).then(res=>{
									this.imgPath= 'https://mzjksc.yystars.com/' + res.dtData[0].ImagePath
									this.$store.commit('setUserInfo',JSON.stringify(res.dtData[0]))
								}).catch(err=>{
									console.log(err)
								})
						    }
						
						})
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
				this.lotusAddressData.visible = true
			},
			
			//地址选中确认回调
			choseValue(res){  
				console.log(res);
				this.lotusAddressData.visible = res.visible
				this.lotusAddressData.provinceName = res.province
				this.lotusAddressData.cityName = res.city
				this.lotusAddressData.townName = res.town
				this.USER.userDis = `${res.province} ${res.city} ${res.town}`;
				
				const data = {
					machineCode: this.userInfoData.MachineCode,
					districtFullName: this.USER.userDis,
					districtNo: res.cityCode
					// nickName: '123'
				}
				
				cf.UpdateBaskInfo(data).then((res)=>{
					if(res.isSuccess){
						 this.getUserInfo()
					}
				}).catch(err=>{
					console.log(err)
				})
				
			},
			
			// 拉取信息
			getUserInfo() {
				const data = {
					openId: this.userInfoData.MachineCode
				}
				uni.showLoading()
				getUserInfo(data).then(data=>{
					this.$store.commit('setUserInfo',JSON.stringify(data.dtData[0]))
					uni.hideLoading()
				}).catch(err=>{
					console.log(err)
				})
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