import { apiServer } from '../config.js'

class Configs {
	constructor() {
	    this.URL = apiServer
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
	get(models = {}){
		return new Promise((resolve,reject) => {   //loading按需添加
			uni.request({
				...this.ConfigStr,
			    url: this.URL+models.url,
				method:models.method,   //注意大小写
			    data: models.data,
			    success: (res) => {
					let data = JSON.parse(res.data)
					if(res.statusCode == 200 && data.isSuccess){
						resolve(JSON.parse(res.data))
					}
					else if(res.statusCode == 200 && !data.isSuccess){
						uni.showToast({
						    title: data.msg ||'',
							icon:'none',
						    duration: 1500
						});
						reject(res)
					}
			        else{
						uni.showToast({
						    title: `${res.statusCode}+JSON.stringify(res.data.Message)`,
							icon:'none',
						    duration: 1500
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