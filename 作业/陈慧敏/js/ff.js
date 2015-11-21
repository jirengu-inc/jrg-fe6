var fj = function(id){
	return document.getElementById(id);
}
fj.dom = (function(){
	return{
		lastSibling:function(node){
			var tempNode = node.parentNode.lastChild;
			if(!!tempNode&&tempNode.nodeType!==1){
				tempNode = this.previous(tempNode);
			}
			return tempNode;
		},
		firstSibling:function(node){
			var tempNode = node.parentNode.firstChild;
			if(!!tempNode&&tempNode.nodeType!==1){
				tempNode = this.next(tempNode);
			}
			return tempNode;
		},
		previous:function(node){
			var tempNode = node.previousSibling;
			while(!!tempNode&&tempNode.nodeType!==1){
				tempNode = tempNode.previousSibling;
			}
			return tempNode;
		},
		next:function(node){
			var tempNode = node.nextSibling;
			while(!!tempNode&&tempNode.nodeType!==1){
				tempNode = tempNode.nextSibling;
			}
			return tempNode;
		},
		getText:function(node){
			if(!node.hasChildNodes()||node.childNodes.length!=1||node.childNodes[0].nodeType!=3){
				return false;
			}
			return node.textContent;
		},
		setText:function(node,String){
			if(node.nodeType==1){
				node.textContent=String=;
			}else{
				return false;
			}
		}
	}
})()