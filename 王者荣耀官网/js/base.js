// -------------------------------------------浏览器兼容性问题处理方法---1111111-------------------------------------------------------------------------------

// 获取对象
// id 获取  document.getElementById()   $("#con")
// class 获取 document.getElementsByClassName()  $(".con")
// 标签 获取  document.getElementsByTagName()   $("div")

function $(str) {
	var s = str.substr(0, 1); // # . 
	var ss = str.substr(1); //#con ==> con
	switch (s) {
		case "#":
			return document.getElementById(ss);
			break;
		case ".":
			return getClass(ss);
			break;
		default:
			return document.getElementsByTagName(str);
	}
}
// 使用格式：$("#ID名") || $(".类名") || $("标签名")

// -----------------------------------------------------------------2222222---------------------------------------------------------------------------------

// 多类名切割选取

function getClass(classname) {
	// 如果有方法名,是兼容ie6,7,8
	// getElementsByClassName方法不兼容ie6,7,8浏览器
	if (document.getElementsByClassName) {
		return document.getElementsByClassName(classname);
	}

	var con = document.getElementsByTagName("*");  //获取所有标签

	var arr = []; //存放所有满足条件数组
	// 循环所有标签
	for (var i = 0; i < con.length; i++) {
		// li
		// con aa bb
		var spl = con[i].className.split(" "); //数组
		// 字符串切割后的数组
		for (var j = 0; j < spl.length; j++) {

			if (spl[j] == classname) {
				arr.push(con[i]);
			}
		}
	}

	return arr;
}

// -----------------------------------------------------------------3333333---------------------------------------------------------------------------------

// 滚动条浏览器兼容
// window.pageXOffset 火狐
// document.documentElement.scrollTop ie9及其他浏览器
// document.body.scrollLeft 谷歌浏览器

function scroll() {
	if (window.pageXOffset != null) {
		return {
			top: window.pageYOffset,
			let: window.pageXOffset
		};
	}
	if (document.compatMode == "CSS1Compat") {
		return {
			top: document.documentElement.scrollTop,
			left: document.documentElement.scrollLeft
		}
	}
	return {
		top: document.body.scrollTop,
		left: document.body.scrollLeft
	}
}
// 使用格式:scroll().top || scroll().left

// -----------------------------------------------------------------4444444---------------------------------------------------------------------------------

// 滚动滚动条时，不选择文本文字
function removeAllRange() {
	window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
}
// 使用格式：removeAllRange();

// -----------------------------------------------------------------5555555---------------------------------------------------------------------------------

// 解决client宽高兼容
function client() {
	//ie9+ 最新浏览器兼容
	if (window.innerHeight != null) {
		return {
			width: window.innerWidth,
			height: window.innerHeight
		}
	}

	if (document.compatMode === "CSS1Compat") {  //标准浏览器兼容
		return {
			width: document.documentElement.clientWidth,
			height: document.documentElement.clientHeight,
		}
	}
	// 怪异浏览器
	return {
		width: document.body.clientWidth,
		height: document.body.clientHeight
	}

}

// 使用格式：client().width || client().height

// -------------------------------------------------------------------6666666-------------------------------------------------------------------------------

// 阻止冒泡
function bubble(event) {
	var event = event || window.event;

	if (event && event.stopPropagation) {

		event.stopPropagation();  //标准浏览器 w3c
	} else {
		event.cancleBubble = true;  //ie6,7,8 ie浏览器
	}
}

// 使用格式：bubble();

// --------------------------------------------------------------------7777777------------------------------------------------------------------------------
        // 获取top,left,width,height等样式的数值
        // 可获取行内式、内嵌式、外链式样式
        // btn.style.left 只能获取行内式样式
        // obj == btn | attr == left
 

        // function fun(){}             -----函数 
        // fun                          -----函数体
        // fun()                        -----调用函数
        // -----------------------------------------
        // var fun = function(){}       -----函数
        // fun                          -----函数体
        // fun()                        -----调用函数
       
function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];//兼容ie浏览器
    } else {
        return window.getComputedStyle(obj, null)[attr];//兼容标准浏览器
    }
}
		
// 使用格式：getStyle(对象，"样式");
// getStyle(div,"left");

// ----------------------------------------------------------------------8888888----------------------------------------------------------------------------

// 缓动方法
function animate(obj ,json,time,callback){
	clearInterval(obj.timer); //首次清除定时器
	
	obj.timer = setInterval(function(){
		
		var flag = true // 用来判断是否停止定时器
		for( attr in json){
			var current = 0;
			if(attr == "opacity"){
				current = Math.round(getStyle(obj,attr)*100) || 0; //0.3 == 30
			}else{
				current = parseInt(getStyle(obj,attr)); //属性值
			}
			
			var step = (json[attr] - current) /10;//步长
			
			step = step >0 ? Math.ceil(step) : Math.floor(step);
			
			// 判断透明度
			if(attr == "opacity"){
				if("opacity" in obj.style){  //浏览器兼容问题
					obj.style.opacity = (current + step) /100; //0-1 0.3
				}else{
					obj.style.filter = "alpha(opacity:" + (current + step) * 10 + ")";
				}
			}else if(attr == "zIndex"){
				obj.style.zIndex = json[attr];
			}else{
				obj.style[attr] = current + step +"px";
			}
			
			// 目标的距离 != 对象距离
			if(json[attr] != current){  //只要其中一个不满足条件,不停止定时器
				flag = false;
			}
		}
		// 清除定时器
		if(flag){
			clearInterval(obj.timer);
			
			// alert("运动结束！！！");
			if(callback){
				callback(); //回调函数  运行函数
			}
		}
		
		
	},time)
}
// 调用格式：animate(div, {"top": 200},function(){alert("aa")});  
// 调用格式：animate(div, {"left": 200},function(){alert("aa")});
// 调用格式：animate(div, {"width": 200},function(){alert("aa")});
// 调用格式：animate(div, {"height": 200},function(){alert("aa")});
// 调用格式：animate(div, {"opacity": 正常数值(1-10)*10},function(){alert("aa")});  是正常数值的10倍
// 调用格式：animate(div, {"zIndex": 数值大小不限制},function(){alert("aa")});

//{"top": 200}对象  
//function(){alert("aa")}函数体
// animate(标签内容对象,对象,函数);

// --------------------------------------------------------------------------------------------------------------------------------------------------