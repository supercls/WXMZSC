<template>
	<view :class="[isShow ?  'show' : 'hide', 'popUp']">
		<!-- content showA -->
		<view :class="[showNumber === '1' ? 'showA' : 'hideA', 'content']">
			<view class= "title">
				<text class= "t-title">{{ title }}</text>
			</view>
			<view class= "slot">
				<slot name= "popup"></slot>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		// isShow ? 'show' : 'hide'
		data() {
			return {
				isShow: false
			}
		},
		props:{
			title: {
				type: String,
				default() {
					return ''
				}
			},
			showNumber: {
				type: String,
				 default() {
					 return 0
				 }
			}
			
		},
		watch: {
			showNumber(newVal) {
				if(newVal === '1'){
					this.isShow = true
				}else {
					
					setTimeout(()=>{
						this.isShow = false
					},500);
				}
			}
		},
		
		methods:{
		}
		
	}
</script>

<style lang= "scss">
	.show {
		display: block;
	}
	.hide {
		display: none;
	}
	.popUp {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,.3);
		.content {
			width: 630rpx;
			background-color: #fff;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			border-radius: 10rpx;
			box-sizing: border-box;
			.title {
				text-align: center;
				padding: 30rpx 0;
				.t-title {
					width: 100%;
					font-size: 32rpx;
				}
			}
			.slot {
				width: 100%;
			}
		}
		
		
		.showA {
		  animation: show-item .3s ease-in forwards;
		  
		}
		.hideA {
		  animation: hide-item .3s ease-in forwards;
		}
		@keyframes hide-item {
		  0% {
		    opacity: 1;
		  }
		  50% {
		    opacity: 0.5;
		  }
		  100% {
		    opacity: 0;
		  }
		}
		@keyframes show-item {
		  0% {
		    opacity: 0;
		  }
		  50% {
		    opacity: 0.5;
		  }
		  100% {
		    opacity: 1;
		  }
		}
	}
	

</style>
