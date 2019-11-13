import  apiServer from '../config.js'

class HTTP {
	// 对请求进行封装
	request({ url, data, method = 'GET' }) {
		return  new Promise((resolve, reject)=>{
			 this._request( url, resolve, reject, data, method )
		})  
	}
	
	// 请求详情
	_request(url, resolve, reject, data, method) {
		uni.request({
			url: apiServer + url,
			header: {
				'content-type': 'application/x-www-form-urlencoded',
			},
			method: method,
			data: data,
			success:(res)=> {
				let data = JSON.parse(res.data)
				if(data.isSuccess) {
					resolve(JSON.parse(res.data))
				}else {
					this._show_error(data.msg)
					reject(JSON.parse(res.data))
				}
			},
			fail: (err) => {
				console.log(err)
				this._show_error(err)
				reject(err)
			},
			 
		})
	}
	
	// 请求错误提示
	_show_error(err) {
		uni.showToast({
		    title: JSON.stringify(err ||'{}'),
			icon:'none',
		    duration: 3000
		});
	}
	
	
}

export default HTTP