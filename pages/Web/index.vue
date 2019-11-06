<template>
	<view>
	        <web-view :webview-styles="webviewStyles" :src="url"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				webviewStyles:{
					progress: {
						color: '#FF70B5'
					}
				},
				url:''
			}
		},
		onLoad(option) { 
			const item = JSON.parse(decodeURIComponent(option.url));
			console.log(item)
			this.url=item
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	
</style>
