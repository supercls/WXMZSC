
class CacheStorage {      //数据存储
	constructor(dataKey) {
	    this.dataKey = dataKey
	}
	setInfo(info){
		return new Promise((resolve,reject) => {
			uni.setStorage({              //本身为异步
			    key: this.dataKey,
			    data:JSON.stringify(info),
			    success: function () {
			        console.log('success');
					resolve()
			    },
				fail: function (e) {
					reject(e)
				}
			});
		})
	}
	getInfo(){
		return new Promise((resolve,reject) => {
			uni.getStorage({
			    key: this.dataKey,
			    success: function (res) {
					console.log(res)
			        resolve(JSON.parse(res.data || '{}'))
			    },
				fail: function (e) {
					reject(e)
				}
			});
		})
	}
}

export default CacheStorage  
