import RequestMn from './request.js'

export function getOpenId(data){   //获取openId
	return new RequestMn().get({
		url:'Woman/GetOpenId',
		method:'GET',            
		data:data
	})
}

export function register(data){   //注册
	return new RequestMn().get({
		url:'Woman/Register',
		method:'POST',            
		data:data
	})
}

export function login(data){   //登录
	return new RequestMn().get({
		url:'Woman/LoginIn',
		method:'POST',            
		data:data
	})
}

export function resetPassword(data){   //忘记密码
	return new RequestMn().get({
		url:'Woman/ResetPassword',
		method:'POST',            
		data:data
	})
}