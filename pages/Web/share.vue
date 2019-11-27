<template>
	<view class="view">	
		 <view class="title">
		 	<p>{{ title }}</p>
		 </view>
		<view class="rich-text">
			<rich-text :nodes="html" space="nbsp" class= "rich"></rich-text>  
		</view>
		<view class= "operate">
			<view class= "share current" @click= "collect"> 
				<img :src="IsCollection == 0 ? '../../static/web/collect.png': '../../static/web/collectPick.png'" alt="">
				<p >收藏</p>
			</view>
			<view class="line">
			</view>
			<button class= "collect current" open-type= "share">
				<img src="../../static/web/share.png" alt="">
				<p>分享</p>	
			</button>
		</view>
	</view>
</template>

<script>
	import { CF } from '../../utils/cfApi'
	const cf = new CF()
	export default {
		data(){
			return {
				title: '', //文章标题
				html: '', // 接收展示的html,
				IsCollection: 0, // 文章是否被收藏
				articleId: '', // 百科编号
				WomanId: '' // 用户编号
			}
		},
		onLoad(options) {
			this.GetArticleById (options)
		},
		// 
		methods: {	
			// 获取详情
			GetArticleById(options) {
				console.log(options)
				this.articleId = options.articleId
				this.WomanId = options.WomanId
				let data = {
					articleId: this.articleId ,
					WomanId: this.WomanId
				}
				cf.GetArticleById(data).then((res)=>{
					const dtData = res.dtData[0]
					console.log(res)
					this.title= dtData.ArticleTitle
					this.IsCollection = dtData.IsCollection
					this.html = this.htmlEscape(dtData.ArticleContent) 
				})
			},
			
			// 点击收藏或者 取消收藏
			collect () {
				this.IsCollection == 0 ? this.SaveMyCollection() : this.DeleteMyCollection()	
			},
			
			// 收藏请求
			SaveMyCollection(){
				const data = {
					id: this.articleId,
					WomanId: this.WomanId
				}
				
				cf.SaveMyCollection(data).then((res)=>{
					console.log(res)
					this.IsCollection = 1
				
					
					uni.showToast({
					    title: '收藏成功',
					    duration: 2000
					});
				})
			},
			
			// 取消收藏
			DeleteMyCollection() {
				const data = {
					id: this.articleId,
					WomanId: this.WomanId
				}
				cf.DeleteMyCollection(data).then((res)=>{
					console.log(res)
					this.IsCollection = 0
					uni.showToast({
					    title: '取消收藏成功',
					    duration: 2000
					});
				})
			},
			
			// 
			
			
			// 整理文档里的特殊符号
			htmlEscape (html){
			    var reg = /(&lt;)|(&gt;)|(&amp;)|(&quot;)/g;
			    return html.replace(reg,function(match){
					switch(match){
						case "&lt;":
						    return "<";
						case "&gt;":
						    return ">"
						case "&amp;":
							return "&";
						case "&quot;":
							return "\""
					}
				});
			}	
		},
		onShareAppMessage(res) {
			return {
				title: this.title
			}
		}
	}
	
</script>

<style lang="scss">
	.view  {
		width: 750rpx;
		box-sizing: border-box;
		padding: 0 30rpx;
		.title {
			margin-top: 20rpx;
			width: 100%;
			border-bottom: 1px solid #E5E5E5;
			p {
				font-size: 32rpx;
				color: #FF70B5;
				padding: 20rpx 0;
			}
		}
		.rich-text {
			margin-bottom: 88rpx;
		}
		.rich {
			color: #666;
			font-size: 30rpx;
			line-height: 2;
			
		}
		.operate {
			width: 750rpx;
			height: 88rpx;
			position: fixed;
			bottom: 0;
			left: 0;
			display: flex;
			flex-direction: row;
			align-items: center;
			border-top:1px solid #F2F2F2;
			background-color: #fff;
			p {
				font-size: 26rpx;
				color: #333333;
			}
			img {
				width: 36rpx;
				height: 36rpx;
			}
			.line {
				width: 2rpx;
				height: 38rpx;
				border-right: 2rpx dashed #C0C0C0;
			}
			.collect {
				background-color: transparent;
				line-height: normal;
			}
			.collect::after {
				width: 0;
				height: 0;
			}
			.current {
				height: 88rpx;
				display: flex;
				flex-direction: row;
				justify-content: center;
				flex: 1;
				align-items: center;
				p {
					margin-left: 20rpx;
				}
			}
		}
	}
	
</style>
