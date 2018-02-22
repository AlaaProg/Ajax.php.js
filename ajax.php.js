

var Ajax = function (prm){

	if (window.XMLHttpRequest) {
	    var ajax = new XMLHttpRequest();
	}else if(window.ActiveXObject){ 
		var ajax = new ActiveXObject("Microsoft.XMLHTTP");
	}

	if(prm.method){
		method = prm.method.toUpperCase();
	}else{
		method = "GET";
	}

	if(prm.method == "GET"){
		prm.url = prm.url+"?"+prm.argv;
	}

	// toUpperCase
	ajax.open(method,prm.url,true);

	// start
	ajax.addEventListener('loadstart', function(e) {
		if(prm.start){ prm.start() }
	});
	// chnage
	ajax.addEventListener('readystatechange',function(e){
		if(prm.change){
			prm.change(this);
		}
	});

	// done
	ajax.addEventListener('loadend', function(e) {
		if (this.readyState == 4){
			if (this.status == 200){
				if(prm.done){
					
					prm.done( { 
						dom      :h2dom( "AjaxResponseDocument" , this.responseText ),
						text :this.responseText
					 })
				}
			}else{ 
				if(prm.error){ 
					prm.error({ 
						status:this.statusText,
						text  :this.responseText
					})
				}
			}
		}
	});


	if (prm.header){
	 	Object.keys(prm.header).forEach(function(key){
	 		ajax.setRequestHeader(key,prm.header[key]);
	 	});
 	}else{
 		
 		if(method == "POST"){
			ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		}
 	}

 	
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
