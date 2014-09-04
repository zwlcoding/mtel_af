//初始化默认设置
$.ui.animateHeaders = false; //禁止头部动画
$.ui.useOSThemes = false; //禁止自动选择皮肤
$.ui.autoLaunch = false; //自动初始化
$.ui.openLinksNewTab = false; //禁止在新窗口打开页面？
$.ui.splitview = false; //禁止大于某个分辨率自动展开菜单
$.ui.backButtonText = " "; //设置后退按钮文字
$.ui.resetScrollers = true; //后退禁止页面回到顶部

//获取当前页面id
//$.ui.activeDiv.id

//启动页面
var init = function init() {
	setTimeout(function() {
		$.ui.launch();
		/**
		 * 设置页面默认过度方式
		 * $.ui.availableTransitions.参数;
		 * slide
		 * fade
		 * pop
		 * flip
		 * none(无切换动画)
		 */
		$.ui.availableTransitions["default"] = $.ui.availableTransitions.slide;//
	}, 2000)
};
document.addEventListener("DOMContentLoaded", init, false);

//存session
function setSS(key, data) {
	sessionStorage.setItem(key, data);
}
//取session
function getSS(key) {
	return sessionStorage.getItem(key);
}
//存缓存（永久直到卸载app或清除数据）
function setLS(key, data) {
	console.log(key + '已写入缓存');
	localStorage.setItem(key, data);
}

function getLS(key) {
	return localStorage.getItem(key);
}
//时间戳
function getTimestamp() {
	var timestamp = Date.parse(new Date());
	return timestamp / 1000;
}

//第一判断是否存在某个缓存
//第二判断释放存在这个缓存的时间戳  ( 某个数据在写入缓存的同时写入一个时间戳 )
//第三获取当前的时间戳减去保存的时间戳
// 86400s 为 60*60*24 的值，一天的秒数
if ( getLS("test") && getLS("test_time") &&  ( getTimestamp - getLS("test_time") ) < 86400  ) {
	//coding
}else{
	//coding
};


 
