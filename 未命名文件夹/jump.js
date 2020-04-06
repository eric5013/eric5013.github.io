console.log('预加载成功');
//定义跳转页面
var pageNum = 1;

//若为1，则跳转主页面
//若为0，则跳转维护页面


if (pageNum == 1) {
	window.location.href="404/index.html";
	console.log('加载维护页面');
} else {
	window.location.href="main.html"
	console.log('加载主页面');
}