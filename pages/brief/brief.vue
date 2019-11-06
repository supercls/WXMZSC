<template>
	<view class= "brief">
	    <view class= "brief_img">
	        <image src= "../../static/brief/img_jianjie@2x.png" />
	    </view>
	     <view class= "brief_download">
	        <button @click= "guide">下载指南</button>
	    </view>
	   <view 
	        class= "brief_pop"
	        v-if= "isShow">
	        <view class="brief_pop_box">
	            <text class= "brief_text1">iOS用户安装指南</text>
	            <view class= "brief_claim">
	                <text class= "brief_text2">1、APP Store搜索“母子健康APP”</text>
	                <text class= "brief_text2">2、点击“获取”</text>
	            </view>
	            <image class= "brief_pop_img" src= "../../static/brief/ios@2x.png" />
	            <text class= "brief_text1">Android用户安装指南</text>
	            <view class= "brief_claim">
	                <text class= "brief_text2">1、应用市场  搜索“母子健康APP”</text>
	                <text class= "brief_text2">2、点击“安全下载”</text>
	            </view>
	            <image class= "brief_pop_img" src= "../../static/brief/android@2x.png" />
	            <button 
	                class= "brief_btn"
	                @click= "closeGuide">
	                我知道了
	            </button>
	        </view>
	    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShow: false
			}
		},
		methods: {
			guide (){
				this.isShow = true;
			},
		 closeGuide() {
			 this.isShow = false;
		  }
		}
	}
</script>

<style>
	.brief {
		width: 100%;
		box-sizing: border-box;
	}

	.brief_img {
		width: 100%;
		margin-top: 60rpx;
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.brief_img image {
		width: 690rpx;
		height: 748rpx;
	}

	.brief_download {
		position: fixed;
		width: 100%;
		box-sizing: border-box;
		padding: 0 30rpx;
		left: 0;
		bottom: 100rpx;
	}

	.brief_download button {
		background-color: #ff70b5;
		color: #fff;
	}

	.brief_pop {
		position: fixed;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,.8);
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		overflow: auto;
	}
	.brief_pop_box {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 60rpx 0;
	}

	.brief_pop_box text {
		color: #fff;
		font-family: 'PingFangSC-Regular';  
	}

	.brief_text1 {
		margin-top: 90rpx;
		color: 36rpx;
		
		font-weight: 700;
	}

	.brief_claim {
		padding-top: 10rpx;
		display: flex;
		flex-direction: column;
	}

	.brief_claim .brief_text2 {
		margin-top: 30rpx;
		color: 30rpx;
	}

	.brief_pop_img{
		margin-top: 30rpx;
		width: 386rpx;
		height: 232rpx;
	}

	.brief_btn {
		margin-top: 80rpx;
		color: #fff;
		width: 260rpx;
		height: 80rpx;
		line-height: 76rpx;
		border: 2px solid #fff;
		background-color: transparent;
		border-radius: 40rpx;
	}
</style>
