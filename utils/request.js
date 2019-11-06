import Vue from 'vue'

class Configs {
	constructor() {
	    this.URL = Vue.prototype.$apiServer
		this.ConfigStr= {
			header: {
				'content-type': 'application/x-www-form-urlencoded' 
			},
			dataType: 'json',
		}
	}
}
class RequestMn extends Configs {
	constructor() {
		super()
	}
	get(models){
		return new Promise((resolve,reject) => {   //loading按需添加
			uni.request({
				...this.ConfigStr,
			    url: this.URL+models.url,
				method:models.method,   //注意大小写
			    data: models.data,
			    success: (res) => {
					if(res.statusCode == 200 && JSON.parse(res.data).isSuccess){
						resolve(JSON.parse(res.data))
					}
			        else{
						uni.showToast({
						    title: JSON.stringify(res.data.Message || JSON.parse(res.data).msg),
							icon:'none',
						    duration: 2000
						});
						reject(res)
					}
			    },
				fail: (err) => {
					uni.showToast({
					    title: JSON.stringify(err ||'{}'),
						icon:'none',
					    duration: 1500
					});
					reject(err)
				},
				complete: () => {
					
				}
			});
		})
	}
}

export default RequestMn