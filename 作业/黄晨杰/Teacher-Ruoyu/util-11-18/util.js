var Util = (function(){

	// 简单数据类型判断
	function isNumber(ele, complexBool){
		if(arguments.length === 1 || arguments[1] === "false"){
			return typeof ele === "number" ? true : false;
		}else{
			return Object.prototype.toString.call(ele) === "[object Number]" ? true : false;
		}
	}

	function isString(ele, complexBool){
		if(arguments.length === 1 || arguments[1] === "false"){
			return typeof ele === "string" ? true : false;
		}else{
			return Object.prototype.toString.call(ele) === "[object String]" ? true : false;
		}
	}

	function isBoolean(ele, complexBool){
		if(arguments.length === 1 || arguments[1] === "false"){
			return typeof ele === "boolean" ? true : false;
		}else{
			return Object.prototype.toString.call(ele) === "[object Boolean]" ? true : false;
		}
	}

	// 引用数据类型判断
	function isObject(ele){
		return Object.prototype.toString.call(ele) === "[object Object]" ? true : false;
	}

	function isArray(ele){
		// 跨 iframe 解决方案
		return Object.prototype.toString.call(ele) === "[object Array]" ? true : false;
		// return ele instanceof Array ? true : false;
		// return ele.constructor === Array ? true : false;
	}

	function isFunction(ele){
		// 老版本 Chrome7 之前和 Firefox5 之前正则表达式也别识别成 function
		return Object.prototype.toString.call(ele) === "[object Function]" ? true : false;
		// return typeof ele === "function" ? true : false;
	}

	function isDate(ele){
		return Object.prototype.toString.call(ele) === "[object Date]" ? true : false;
	}

	// JSON对象操作
	function JSONTraverse(ele){
		for(var i in ele){
			console.log(i + " : " + ele[i]);
		}
	}

	function JSONClone(ele, deepBool){
		// deepBool 是否是 深度拷贝
		var cloneEle = {};
		if(arguments.length == 1 || arguments[1] == false){
			for(var i in ele){
				cloneEle[i] = cloneObject(ele[i]);
			}
		}else{
			for(var i in ele){
				cloneEle[i] = cloneObject(ele[i]);
			}
			cloneEle.constructor = ele.constructor;
		}

		return cloneEle;
	}

	// private function: using recursion to clone all objs
	function cloneObject(src){
		var _src = null;

		if(isNumber(src) || isString(src) || isBoolean(src) || src === null ||  src === undefined){
			_src = src;
		}else{
			if(isString(src, true)){
				_src = String(src);
			}else if(isNumber(src, true)){
				_src = Number(src);
			}else if(isBoolean(src, true)){
				_src = Boolean(src);
			}else if(isDate(src, true)){
				_src = Date(src);
			}else if(isObject(src)){
				_src = Object(src);
			}else if(isArray(src)){
				_src = Array(src);
			}

			for(var i in src){
				_src[i] = arguments.callee(src[i]);
			}
		}
		return _src;
	}

	function isEmptyJSON(ele){
		if(!isObject(ele)){
			return false;
		}
		if(Object.keys){
			// 高版本浏览器可以支持这种写法
			return Object.keys(obj).length > 0;
		}
		for(var prop in ele){
			if(ele.hasOwnProperty(prop)){
				return false;
			}
		}
		return true;
	}

	var object1 = {
	  apple: 0,
	  banana: { weight: 52, price: 100 },
	  cherry: 97
	};
	var object2 = {
	  banana: { price: 200 },
	  durian: 100
	};
	 
	// Merge object2 into object1, recursively
	$.extend( true, object1, object2 );
	 
	var printObj = typeof JSON !== "undefined" ? JSON.stringify : function( obj ) {
	  var arr = [];
	  $.each( obj, function( key, val ) {
	    var next = key + ": ";
	    next += $.isPlainObject( val ) ? printObj( val ) : val;
	    arr.push( next );
	  });
	  return "{ " +  arr.join( ", " ) + " }";
	};
 
	$( "#log" ).append( printObj( object1 ) );

	function JSONParseUrl(ele){
		var str = null;
		for(var i in ele){

		}
	}

	// 数组操作
	function sortArray(ele){
		
	}

	return { 
		isNumber: isNumber,
		isString: isString,
		isBoolean: isBoolean,
		isObject: isObject,
		isArray: isArray,
		isFunction: isFunction
	}
})();