import RequestMn from './request.js'

export function login(data){   //登录接口
	return new RequestMn().get({
		url:'Woman/RefreshArticles',
		method:'GET',            
		data:data
	})
}