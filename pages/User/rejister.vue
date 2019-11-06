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
				<image src="../../static/user/user_3.png" mode="" class="uni-img"></image>
				<input class="uni-input" placeholder-class="placeholder"  placeholder="请输入短信验证码"  type="number" v-model="userMessage"/>
				<text class="timeSpan" :class="{active:isSend}"  @tap="sendCode" :disabled="isSend">{{times}}</text>
			</view>
			<view class="item">
				<image src="../../static/user/user_2.png" mode="" class="uni-img"></image>
				<input class="uni-input" placeholder-class="placeholder"  placeholder="请输入登录密码"  password v-model="userPassword"/>
			</view>
			<view class="item">
				<image src="../../static/user/user_4.png" mode="" class="uni-img"></image>
				<input class="uni-input" placeholder-class="placeholder"  placeholder="请选择所在区域" disabled  v-model="userDw" @tap="openPicker"/>
			</view>
		</view>
		<view class="user-tc">
			<view  @tap="aggreeBt" class="user-tc-v">
				<image :src="imgSrc" mode=""></image>已阅读并同意
			</view>
			<text class="user-tc-t1" @tap="junmpUrl('/Area/agreement/agreement.html')">《用户协议及隐私条款》</text>
		</view>
		<view class="user-bottom">
			<button type="primary" :loading="loading" class="but" @tap="submit" 
			:class="{active:imgSrc=='../../static/user/Cicon1.png'}" :disabled="imgSrc=='../../static/user/Cicon.png'">注册</button>
		</view>
		<lotus-address v-on:choseVal="choseValue" :lotusAddressData="lotusAddressData"></lotus-address>
	</view>
</template>

<script>
	import {login} from '../../utils/api.js'
	import lotusAddress from '../../components/picker-address/lotusAddress.vue'
	export default {
		data() {
			return {
				loading:false,
				userCode:'',
				userPassword:'',
				userDw:'',
				userMessage:'',
				times:'发送验证码',
				isSend:false,
				seconds:null,
				lotusAddressData:{
					visible:false,
					provinceName:'',
					cityName:'',
					townName:'',
				},
				imgSrc:'../../static/user/Cicon.png'
			}
		},
		components:{
			lotusAddress
		},
		onLoad() {

		},
		methods: {
			aggreeBt(){
				this.imgSrc=='../../static/user/Cicon.png'? this.imgSrc='../../static/user/Cicon1.png': this.imgSrc='../../static/user/Cicon.png'
			},
			junmpUrl(url){
				let urlHttps = encodeURIComponent(JSON.stringify(this.$WebServer + url + '?name=llllll'))
				//#ifdef MP-WEIXIN
				uni.navigateTo({
				    url: `/pages/Web/index?url=${urlHttps}`,
				});
				//#endif
				
				//#ifndef MP-WEIXIN
				Window.open(urlHttps)
				//#endif
			},
			submit(){
				console.log(this.userCode)
				
			},
			sendCode(){
				if(this.isSend) return false
				this.seconds = 60
				let timeOut = setInterval(() =>{
					this.isSend=true
					this.seconds--;
					this.times=`${this.seconds}s后重新发送`
					if(this.seconds==0){
						clearInterval(timeOut)
						this.isSend=false
						this.times="发送验证码"  
					}
				},1000)
			},
			openPicker() {
				this.lotusAddressData.visible = true;
			},
			choseValue(res){  //res数据源包括已选省市区与省市区code
				console.log(res);
				this.lotusAddressData.visible = res.visible;
				this.lotusAddressData.provinceName = res.province;
				this.lotusAddressData.cityName = res.city;
				this.lotusAddressData.townName = res.town;
				this.userDw = `${res.province} ${res.city} ${res.town}`; 
			}
		},
		
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
				.timeSpan{
					color: #FF70B5;
					font-size: 28rpx;
				}
				.active{
					color: #ccc;
				}
				.uni-img{
					width: 26rpx;
					height: 28rpx;
					display: inline-block;
					margin-right: 28rpx;
				}
				.placeholder{
					color: #999;
				}
				.uni-input{
					font-size: 32rpx;
					color: #333333;
					flex:1;
				}
			}
		}
		.user-bottom{
			.but{
				margin-top: 118rpx;
				width: 630rpx;
				height: 88rpx;
				background-color:#999;
				color: #fff;
				font-size: 36rpx;
				border-radius: 44rpx;
			}
			.active{
				background-color: #FF70B5;
			}
			.bot{
				margin-top: 40rpx;
				display: flex;
				text{
					flex: 1;
					text-align: center;
					font-size: 28rpx;
					color: #FF70B5;
				}
			}
		}
		.user-tc{
			width: 100%;
			margin-top: 60rpx;
			.user-tc-v{
				display: inline-block;
			}
			image{
				width: 30rpx;
				height: 30rpx;
				margin-right: 20rpx;
				vertical-align: -3.5rpx;
			}
			text{
				font-size: 28rpx;
				color: #999999;
			}
			.user-tc-t1{
				color: #FF70B5;
			}
		}
	}
</style>
