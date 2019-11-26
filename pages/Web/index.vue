<template>
	<view>
		<web-view :src="urlHttps"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				urlHttps:''
			}
		},
		onLoad(option) { 
			const item = JSON.parse(decodeURIComponent(option.url ||'{}'));
			console.log(item)
			this.urlHttps=item
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	
</style>
