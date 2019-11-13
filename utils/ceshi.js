import HTTP from './http'

class Ceshi extends HTTP {
	getOpenId(data) {
		return this.request({
			url: 'Woman/GetOpenId',
			data: data
		})
	} 
	
	refreshArticles(data) {
		return this.request({
			url: 'Woman/RefreshArticles',
			data: data
		})
	} 
}

export {
	Ceshi
}