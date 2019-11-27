<template>
	<view class="collect">
		<view class="list" 
			v-for="(item, index) in listData"
			:key= "index"
			
			@click= "jumpDetal(item)"
		>
			<view class="l-title">
			    <view class="title">{{ item.ArticleName }}</view>
			    <view class="add">{{ item.ArticleType }}</view>
			</view>
			<view class="l-date">
			    {{ treatTime(item.CreateTime) }}
			</view>
			<view class="l-img">
			    <img src="../../static/mine/icon_right.png" alt="">
			</view>
		</view>
		<view class="pageNo" v-if= "listData.length == 0">
			<img src="../../static/mine/no.png" alt="" class= "img">
			<text class= "p">暂无收藏</text>
		</view>
	</view>
</template>

<script>
	import { CF } from '../../utils/cfApi'
	const cf = new CF()
	export default {
		data() {
			return {
				listData: [], // 接收数据
				womanId: '' // 用户编号
			}
		},
		onLoad(options) {
			this.womanId = options.womanId;
		},
		onShow(){
			this.GetMyCollection()
		},
		methods: {
			
			// 获取收藏数据
			GetMyCollection() {
				uni.showLoading({
					title:'加载中...',
					mask: true
				})
				const data = {
					womanId: this.womanId
				}
				cf.GetMyCollection(data).then((res)=>{
					  this.listData= res.dtData
					  uni.hideLoading()
				})
			},
			
			// 处理时间
			treatTime (date) {
                if(date){
                    var dateArr =  date.split(' ');
                    return dateArr[0]
                }
			},
			
			//跳转详情页
			jumpDetal(data) {
				uni.navigateTo({
					url: `../../pages/Web/share?WomanId=${data.UserId}&articleId=${data.ArticleId}` ,
				})
			}
		}
	}
</script>

<style lang="scss">
	.collect {
		width: 750rpx;
		height: 100vh;
		background-color: #F2F2F2;
		.list {
			width: 100%;
			box-sizing: border-box;
			padding: 0 15px;
			height: 70px;
			background-color: #fff;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			border-top: 1px solid #E5E5E5;
			.l-title {
			    flex: 1;
				.title{
					font-size: 30rpx;
					color: #333;
				}
				.add {
					margin-top: 6rpx;
					font-size: 26rpx;
					color: #666;
				}
				
			}
			.l-date {
				margin-right: 5rpx;
				font-size: 24rpx;
				color: #999;				
			}
			.l-img {
				img {
					width: 12rpx;
					height: 18rpx;
				}
			}
		}
		
		.pageNo {
			width: 750rpx;
			padding-top: 230rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			.img {
				width: 340rpx;
				height: 340rpx;
			}
			.p {
				font-size: 30rpx;
				color: #666;
				margin-top: 40rpx;
			}
		}
	}
</style>
