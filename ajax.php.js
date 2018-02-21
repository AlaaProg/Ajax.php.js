
var request = function (prm){
	var respText,ajax ;
	if (window.XMLHttpRequest) {
	    ajax = new XMLHttpRequest();
	}else if(window.ActiveXObject){ 
		ajax = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	ajax.onreadystatechange = function(){
		if (this.readyState == 4){
			if (this.status == 200){
				if(prm.response){
					tagName = prm.url.split('/').reverse()
					prm.response( h2dom( tagName[0].split('.')[0],this.responseText ) )
				}

			}else{if(prm.error){prm.error(ajax.statusText);}}
		}
 	}


 	ajax.open(prm.method,prm.url,true);

 	Object.keys(prm.header).forEach(function(key){
 		ajax.setRequestHeader(key,prm.header[key]);
 	});

 	
	ajax.send(prm.argv);

}



var select = function (id_class,dom=document){

	var element = dom.querySelectorAll(id_class)[0];
	
	return {

		text: function (value=""){ 
			if (value != ""){
				return element.innerHTML = value
			}else{ return element.innerHTML; }
		},
		
		css: function(key,value=""){
			if(value != ""){
				element.style[key] = value;
			}else{ return element.style[key]; }
		},
		setattr: function(key,value){
			element.setAttribute(key,value);
		},
		getattr: function(key){
			return element.getAttribute(key);
		},
		delattr: function(key){
			element.removeAttribute(key);
		},
		append: function(elem){
			element.append(elem);
		},
		remove: function(){
			element.remove();
		},
		childOf:function(id_num=null){
			if(id_num != null){
				return select(id_class+" "+element.children[id_num].tagName.toLowerCase(),dom);
			}
			
		},
		get element(){ return element }
	}
	
}

function h2dom(tagName,html){
	var tag = document.createElement(tagName);
	tag.innerHTML = html 
	return tag
}
