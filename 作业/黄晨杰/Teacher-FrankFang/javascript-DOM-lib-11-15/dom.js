var DOM_handle = (function(){
	var lastSibling = function(node){
		var _tempNode = node.parentElement.lastChild;
		while(!!_tempNode && _tempNode.nodeType != 1){
			_tempNode = _tempNode.previousSibling;
		}

		return _tempNode;
	};

	var firstSibling = function(node){
		var _tempNode = node.parentElement.firstChild;
		while(!!_tempNode && _tempNode.nodeType != 1){
			_tempNode = _tempNode.nextSibling;
		}

		return _tempNode;
	};

	var previousElement = function(node){
		var _tempNode = node.previousSibling;
		while(!!_tempNode && _tempNode.nodeType != 1){
			_tempNode = _tempNode.previousSibling;
		}

		return _tempNode;
	};

	var nextElement = function(node){
		var _tempNode = node.nextSibling;
		while(!!_tempNode && _tempNode.nodeType != 1){
			_tempNode = _tempNode.nextSibling;
		}

		return _tempNode;
	};

	var getText = function(node){
		var _tempNode = node.firstChild;
		while(!!_tempNode && (_tempNode.nodeType != 3 || /^\s+$/.test(_tempNode.nodeValue))){
			_tempNode = _tempNode.nextSibling;
		}

		return _tempNode;

	};

	var setText = function(node, text){
		if(!node.hasChildNodes() && node.nodeType == 1){
			var _textNode = document.createTextNode(text);
			node.appendChild(_textNode);
		}else{
			var _tempNode = node.firstChild;
			while(!!_tempNode && (_tempNode.nodeType != 3 || /^\s+$/.test(_tempNode.nodeValue))){
				_tempNode = _tempNode.nextSibling;
			}

			return _tempNode.nodeValue = text;
		}
	};


	return {
		lastSibling: lastSibling,
		firstSibling: firstSibling,
		previousElement: previousElement,
		nextElement: nextElement,
		getText: getText,
		setText: setText
	};
}());