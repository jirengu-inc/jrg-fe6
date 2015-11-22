var Util = (function(){

	function isNumber(ele){
		return typeof Number(ele) === "number" ? true : false;
	}

	return { 
		isNumber: isNumber,
		isString: isString,
		isBoolean: isBoolean,
		isObject: isObject,
		isJSON: isObject,
		isArray: isArray,
		isFunction: isFunction
	}
})();