/*有问题联系我,qq: 541720500*/
var canvas = new fabric.Canvas('canvas');

canvas.setBackgroundImage('./bg.jpg', canvas.renderAll.bind(canvas)); // 设置背景图
var canvasImgCount = 0; // 总插入图片数量
const canvasImgMax = 3; // 最多小图数量为3
const canvasImgPer = 15; // 每超过1个图片需要额外增加15元
// var text = new fabric.Text('hello world', { left: 100, top: 100 });   // 添加文字
// canvas.add(text);  
	// canvas.clear().renderAll();// 清空画布
function addImg(imgId){
	var imgElement = document.getElementById(imgId);
	var imgInstance = new fabric.Image(imgElement, {
		left: 50,
		top: 50,
		// angle: 30, // 旋转角度
		width:400, // 小图的默认宽度
		height:400, // 小图的默认高度
		opacity: 0.9 // 透明
		});
	canvas.add(imgInstance);

	var canvasImgLength = canvas._objects.length;
	refreshCount();
	if(canvasImgLength > canvasImgMax) alert('需付费:￥' + (canvasImgLength - canvasImgMax) * canvasImgPer);
}
function refreshCount()
{
	var inputCount = document.getElementById("imgCount");
	inputCount.value = canvas._objects.length;
}
canvas.on('mouse:dblclick', db)
// canvas.on('event:mousedblclick', db)
function db (e) {
	console.log(e.target)
	canvas.remove(e.target);
	refreshCount();
}
function saveImg() {
	// console.log(canvas.toSVG());  
  	// window.open(img);  // 服务器端运行 有的浏览器不好用

	var type = 'png';
	var imgData = canvas.toDataURL(type);
  	document.getElementById("finalImg").src = imgData;
  	document.getElementById("finalBase64").value = imgData;




  	//********** 下面是打开新页面下载图片部分 不需要可以删除:  *************//

	/**
	 * 获取mimeType
	 * @param  {String} type the old mime-type
	 * @return the new mime-type
	*/
	var _fixType = function(type) {
	   type = type.toLowerCase().replace(/jpg/i, 'jpeg');
	   var r = type.match(/png|jpeg|bmp|gif/)[0];
	   return 'image/' + r;
	}; 

	// 加工image data，替换mime type
	imgData = imgData.replace(_fixType(type),'image/octet-stream');

	/**
	 * 在本地进行文件保存
	 * @param  {String} data     要保存到本地的图片数据
	 * @param  {String} filename 文件名
	 */
	var saveFile = function(data, filename){
	    var save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
	    save_link.href = data;
	    save_link.download = filename;

	    var event = document.createEvent('MouseEvents');
	    event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
	    save_link.dispatchEvent(event);
	};

	// 下载后的文件名
	var filename = '合成图 .' + type;
	// download
	saveFile(imgData,filename);


}
// console.log(JSON.stringify(canvas.toJSON()));  // json序列化 已被修改只用
// canvas.loadFromJSON(json); // 从json读取画布的方法