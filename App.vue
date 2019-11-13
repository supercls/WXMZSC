<script>
	export default {
		onLaunch() {  //本身异步
			console.log('App Launch')
		},
		globalData: {  
			checkLoad: false
		}
	}
</script>

<style>
	@import "common/uni.css";
	/*每个页面公共css */
</style>
