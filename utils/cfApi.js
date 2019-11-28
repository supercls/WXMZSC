import HTTP from './http'

class CF extends HTTP {
	getOpenId(data) {
		return this.request({
			url: 'Woman/GetOpenId',
			data
		})
	} 
	
	refreshArticles(data) {
		return this.request({
			url: 'Woman/RefreshArticles',
			data
		})
	} 
	
	// 获取百度百科详情
	GetArticleById(data) {
		return this.request({
			url: 'Information/GetArticleById',
			data
		})
	} 
	
	// 获取我的收藏详情
	
	GetMyCollection(data) {
		return this.request({
			url: 'Information/GetMyCollection',
			data
		})
	}
	
	
	// 添加我的收藏
	SaveMyCollection(data) {
		return this.request({
			url: 'Information/SaveMyCollection',
			data,
			method:'POST'
		})
	}
	
	// 删除我的收藏
	DeleteMyCollection(data) {
		return this.request({
			url: 'Information/DeleteMyCollection',
			data,
			method:'POST'
		})
	}
	
	// 修改个人信息
	UpdateBaskInfo(data){
		return this.request({
			url: 'Woman/UpdateBaskInfo',
			data,
			method:'POST'
		})
	}
	
	// 头像上传
	UploadImage(data) {
		return this.request({
			url: 'Woman/UploadImage',
			data,
			method:'POST'
		})
	}
	
}

export {
	CF
}