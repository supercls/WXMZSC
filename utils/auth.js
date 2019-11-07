
class CacheStorage {      //数据存储,避免异步
	constructor(dataKey) {
	    this.dataKey = dataKey
	}
	setInfo(info){
		try {
			uni.setStorageSync(this.dataKey, JSON.stringify(info));  //同步
		} catch (e) {
			uni.showToast({
				title: JSON.stringify(e),
				icon:'none',
				duration: 1000
			});
			console.log(e)
		}
	}
	getInfo(){
		return (JSON.parse(uni.getStorageSync(this.dataKey) || '{}'))
	}
}

export default CacheStorage  
