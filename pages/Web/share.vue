<template>
	<view class="view">
		<!-- <button open-type= "share" type='default'>分享</button> -->
		<web-view :src="urlHttps"></web-view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				urlHttps: ''
			}
		},
		onLoad() {
			this.urlHttps= 'https://mzjksc.yystars.com/YYQ.Web/V5.2.9/Area/Slidebar/MaternalMessenger/Main.html?deviceType=3&currentChapter=%E5%AD%95%E4%BA%A7%E6%9C%9F%E7%AF%87&subsidiaryParams=&machineCode=50f99df5730a4335ba3e951d4f7bbb49&WomanId=2000363&APPType=mzsc'
		},
		onShareAppMessage(res) {
			console.log(res)
			return {
				title: '怀孕初期孕妈妈可能发生哪些变化',
				path: 'https://mzjksc.yystars.com/YYQ.Web/V5.2.9/Area/Information/Encyclopedias/Detail.html?deviceType=3&ArticleId=7692667f2eb546d780a991f0a0f19630&machineCode=50f99df5730a4335ba3e951d4f7bbb49&WomanId=2000363&APPType=mzsc'
			}
		}
	}
	
</script>

<style>

</style>
