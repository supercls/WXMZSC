//配置 测试和线上环境
let apiServer = ''
let webServer= ''

if(process.env.NODE_ENV === 'development'){
    // 开发环境
    apiServer = 'https://mzjksc.yystars.com/xcx.api/api/'  //http://localhost:1442/api/---https://mzjksc.yystars.com/xcx.api/api/
	webServer = 'https://mzjksc.yystars.com/'
}else{
    // 生产环境
    apiServer = 'https://mzjksc.yystars.com/xcx.api/api'
	WebServer = 'https://mzjksc.yystars.com'
}


export {webServer,apiServer}