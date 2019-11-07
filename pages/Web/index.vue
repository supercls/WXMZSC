<template>
	<view>
	        <web-view :webview-styles="webviewStyles" :src="urlHttps"></web-view>
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
				urlHttps:''
			}
		},
		onLoad(option) { 
			const item = JSON.parse(decodeURIComponent(option.url ||'{}'));
			this.urlHttps=item
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	
</style>
