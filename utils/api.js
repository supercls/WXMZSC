import RequestMn from './request.js'

export function getOpenId(data){   //获取openId
	return new RequestMn().get({
		url:'Woman/GetOpenId',
		method:'GET',            
		data:data
	})
}

export function getUserInfo(data){   //获取用户注册信息
	return new RequestMn().get({
		url:'Woman/GetWoman',
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

export function getIndexPageData(data){  //获取首页数据
	return new RequestMn().get({
		url:'Woman/GetIndexPageData',
		method:'GET',
		data:data
	})
}

export function refreshArticles(data){  //刷新孕育指导
	return new RequestMn().get({
		url:'Woman/RefreshArticles',
		method:'GET',
		data:data
	})
}

export function updateBookPeriod(data){   //切换篇章
	return new RequestMn().get({
		url:'Woman/UpdateBookPeriod',
		method:'GET',
		data:data
	})
}

export function GetMobileVerifyCode(data){   //获取短信验证码
	return new RequestMn().get({
		url:'Woman/GetMobileVerifyCode',
		method:'GET',
		data:data
	})
}