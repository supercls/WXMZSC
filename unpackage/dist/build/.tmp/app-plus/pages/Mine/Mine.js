(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/Mine/Mine"],{"7dfc":function(e,a,n){"use strict";var t=function(){var e=this,a=e.$createElement;e._self._c},i=[];n.d(a,"a",function(){return t}),n.d(a,"b",function(){return i})},"90f4":function(e,a,n){"use strict";n.r(a);var t=n("7dfc"),i=n("d9b1");for(var c in i)"default"!==c&&function(e){n.d(a,e,function(){return i[e]})}(c);n("98bf");var r=n("2877"),o=Object(r["a"])(i["default"],t["a"],t["b"],!1,null,null,null);a["default"]=o.exports},"98bf":function(e,a,n){"use strict";var t=n("b1fc"),i=n.n(t);i.a},b1fc:function(e,a,n){},d9b1:function(e,a,n){"use strict";n.r(a);var t=n("e487"),i=n.n(t);for(var c in t)"default"!==c&&function(e){n.d(a,e,function(){return t[e]})}(c);a["default"]=i.a},e487:function(e,a,n){"use strict";(function(e,t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;n("2f62");var i={data:function(){return{nickname:"您还没有昵称",iphone:"17021026667",add:"江苏省苏州市吴中区",listData:[{name:"我的手册",imgUrl:"../../static/mine/shouce.png",id:"1"},{name:"母婴信使",imgUrl:"../../static/mine/xinshi.png",id:"2"},{name:"我的收藏",imgUrl:"../../static/mine/shoucang.png",id:"3"},{name:"帮助与反馈",imgUrl:"../../static/mine/fankui.png",id:"4"},{name:"系统与设置",imgUrl:"../../static/mine/shezhi.png",id:"5"},{name:"APP下载指南",imgUrl:"../../static/mine/zhinan.png",id:"6"}]}},onLoad:function(){e.getStorage({key:"MZSC_USER_STORAGE",success:function(e){console.log(t(e.data," at pages\\Mine\\Mine.vue:60"))}})},methods:{pageJump:function(a){switch(a){case"1":var n="https://mzjksc.yystars.com/xcx.mzsc/Area/MyHandbook/ManageHandbooks.html?deviceType=5&name=&idCard=&districtNo=410101&districtName=%E6%B2%B3%E5%8D%97%E7%9C%81%20%E9%83%91%E5%B7%9E%E5%B8%82%20%E5%B8%82%E8%BE%96%E5%8C%BA&machineCode=50f99df5730a4335ba3e951d4f7bbb49&WomanId=2000363&APPType=mzsc",t=encodeURIComponent(JSON.stringify(n));e.navigateTo({url:"../../pages/Web/index?url= ".concat(t)});break;case"2":var i="https://mzjksc.yystars.com/xcx.web/Area/Slidebar/MaternalMessenger/Main.html?deviceType=5&currentChapter=%E5%AD%95%E4%BA%A7%E6%9C%9F%E7%AF%87&subsidiaryParams=&machineCode=50f99df5730a4335ba3e951d4f7bbb49&WomanId=2000363",c=encodeURIComponent(JSON.stringify(i));e.navigateTo({url:"../../pages/Web/index?url= ".concat(c)});break;case"3":e.navigateTo({url:"../../pages/Mine/collect?womanId=2000363"});break;case"4":var r="https://mzjksc.yystars.com/xcx.web/Area/Slidebar/HelpAndFeedback/FeedBack.html?deviceType=5&machineCode=50f99df5730a4335ba3e951d4f7bbb49&WomanId=2000363&APPType=mzsc",o=encodeURIComponent(JSON.stringify(r));e.navigateTo({url:"../../pages/Web/index?url= ".concat(o)});break;case"5":e.navigateTo({url:"../../pages/Mine/setting"});break;case"6":e.navigateTo({url:"../../pages/brief/brief"});break;case"7":e.navigateTo({url:"../../pages/Mine/userInfo"});break}}}};a.default=i}).call(this,n("6e42")["default"],n("0de9")["default"])},eb06:function(e,a,n){"use strict";(function(e){n("3bf2"),n("921b");t(n("66fd"));var a=t(n("90f4"));function t(e){return e&&e.__esModule?e:{default:e}}e(a.default)}).call(this,n("6e42")["createPage"])}},[["eb06","common/runtime","common/vendor"]]]);