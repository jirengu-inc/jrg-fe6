fj.dom=(function(){
	return{
		lastSibling:function(node){
			var tempNode= node.parentNode.lastChild
			if(!!tempNode&&tempNode.nodeType !== 1){
				tempNode=this.previous(tempNode)
			}
			return tempNode
		},
		firstSibling:function(node){
			var tempNode = node.parentNode.firstChild
			if(!!tempNode&&tempNode.nodeType !== 1){
				tempNode=this.next(tempNode)
			}
			return tempNode
		},
		previous:function(node){
			var tempNode = node.previousSibling
			while(!!tempNode&&tempNode.nodeType!==1){
				tempNode = tempNode.previousSibling
			}
			return tempNode
		},
		next:function(node){
			var tempNode = node.nextSibling
			while(!!tempNode&&tempNode.nodeType !== 1){
				tempNode=tempNode.nextSibling
			}
			return tempNode
		},
		getChildText:function(node){
			if(!node.hasChildNodes() ) return false
			var tempNode = node.firstChild
			while(!!tempNode && (tempNode.nodeType != 3 || /^\s+$/.test(tempNode.nodeValue))){
				tempNode =tempNode.nextSibling
				}
			return tempNode.nodeValue||false
			},

		setChildText:function(node){
			if(!node.hasChildNodes())return false
			var tempNode = node.firstChild
			while(!!tempNode&&(tempNode.nodeType != 3||/^\s+$/.test(tempNode.nodeValue))){
				tempNode = tempNode.nextSibling
			}
			if(tempNode) return tempNode.nodeValue = text
				else return false
			}
		}
		
	}
})