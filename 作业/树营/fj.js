
var fj = function (id) {
    return document.getElementById(id);
};

fj.init = function(){
    this.develop.init();
};

fj.dom = (function(){
    return {
        lastSibling: function(node){
            var tempNode = node.parentNode.lastChild;
            if(!!tempNode && tempNode.nodeType !== 1){
                tempNode = this.previous(tempNode);
            }
            return tempNode;
        },
        firstSibling: function(node){
            var tempNode = node.parentNode.firstChild;
            if(!!tempNode && tempNode.nodeType !== 1){
                tempNode = this.next(tempNode);                
            }
            return tempNode;
        },
        previous: function(node){
            var tempNode = node.previousSibling;
            while(!!tempNode && tempNode.nodeType !== 1){
                tempNode = tempNode.previousSibling;
            }
            return tempNode;
        },
        next: function(node){
            var tempNode = node.nextSibling;
            while(!! tempNode && tempNode.nodeType !== 1){
                tempNode = tempNode.nextSibling;
            }
            return tempNode;
        },
        getChildText: function(node){
            if( !node.hasChildNodes() ){
                return false;
            };
            var tempNode = node.firstChild;
            while( !!tempNode && ( tempNode.nodeType != 3 || /^\s+$/.test(tempNode.nodeValue) ) ){
                tempNode = tempNode.nextSibling;
            }
            return tempNode.nodeValue || false;
        },
        setChildText: function(node, text){
            if( !node.hasChildNodes() ){
                return false;
            }
            var tempNode = node.firstChild;
            while( !!tempNode && (tempNode.nodeType != 3 || /^\s+$/.test(tempNode.nodeValue)) ){
                tempNode = tempNode.nextSibling;
            }
            if(tempNode){
                return tempNode.nodeValue = text;
            } else {
                return false;
            }
        },
        createTextElement: function(elementName, text){
            var element = document.createElement(elementName.toLowerCase());
            element.appendChild(document.createTextNode(text));
            return element;
        },
        createLink: function(href, text){
            var link = this.createTextElement('a', text);
            link.setAttrbuite('href', href);
            return link;
        }
    }
})()

fj.event = (function(){
    return {
        geKeyCode: function(e){
            var key;
            if(window.event){
                key = window.event.keyCode;
            } else {
                key = e.keyCode;
            }
            return key;
        },
        getTarget: function(e){
            // var target = window.event?window.event.srcElement:e.target;
            var target;
            if(window.event) {
                target = window.event.srcElement;
            } else {
                target = e.target;
            }
            if(!target){
                return false;
            }
            while(target.nodeType != 1 && target.nodeName.toLowerCase() !== 'body'){
                target = target.parentNode;
            }
            return target;
        },
        stopBubble: function(e){
            if( e && e.stopPropagation ){
                e.stopPropagation();
            } else if( window.event ){
                window.event.cancelBubble = true;
            }
        },
        preventDefault: function(e){
            if( e && e.preventDefault ){
                e.preventDefault();
            }else if( window.event ){
                window.event.returnValue = false;
            }
        },
        add: function(e){
            if(node.addEventListener){
                node.addEventListener(eventType, fn, false);
            } else if(node.attachEvent){
                node.attachEvent('on' + eventType, fn);
            } else {
                node['on' + eventType] = fn;
            }
        },// FIXME: ie浏览器中使用add方法可以多次添加同一fn, 而在Firefox中只有一次
        remove: function(node, eventType, fn){
            if(node.removeEventListener){
                node.removeEventListener(eventType, fn, false);
            } else if (node.detachEvent){
                node.detachEvent('on' + eventType, fn);
            } else {
                node['on' + eventType] = false;
            }
        }
    }
})()

fj.css = (function(){
    return {
        swap: function(node, oldCssClass, newCssClass){
            if(!this.has(node, oldCssClass) || !!this.has(node, newCssClass)){
                return false;
            }
            var reg = new RegExp('\\b' + oldCssClass + '\\b');
            node.className = node.className.replace(reg, newCssClass);
        },
        add: function(node, cssClass){
            if( this.has(node, cssClass) ) {
                return true;
            }
            node.className += (' ' + cssClass);
        },
        remove: function(node, cssClass){
            var reg = new RegExp('\\b' + cssClass + '\\b');
            node.className = node.className.replace(reg, '');
        },
        has: function(node, cssClass){
            var reg = new RegExp('\\b' + cssClass + '\\b');
            return reg.test(node.className);
        }
    }
})()

fj.develop = (function(){
    return {
        enabled: true,
        developTip: [],
        init: function(){
            if(!fj.develop.enabled){
                return;
            }
            fj.event.add(window, 'error', function(msg, url, line){
                var text = (new Date()-0) + ': ' + msg + ' ' + line;
                console && console.log(text);
                fj.developTip.push(msg);
            })
        }
    }
})()

void function(){
    fj.init()
}()