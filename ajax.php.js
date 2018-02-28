

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

	if (!id_class || id_class == ""){
		var element = dom
	}else{
		var element = dom.querySelectorAll(id_class)[0];
	}
	return {

		text: function (value=""){ 
			if (value != ""){
				element.innerText = value
			}else{ return element.innerText; }

			return this
		},
		html: function (value=""){ 
			if (value != ""){
				element.innerHTML = value
			}else{ return element.innerHTML; }

			return this
		},
		
		css: function(key,value=""){
			if(value != ""){
				element.style[key] = value;
			}else{ return element.style[key]; }

			return this
		},
		setattr: function(key,value){
			element.setAttribute(key,value);
			return this
		},
		getattr: function(key){
			return element.getAttribute(key);
		},
		delattr: function(key){
			element.removeAttribute(key);
			return this
		},
		append: function(elem){
			element.append(elem);
			return this
		},
		remove: function(NElem){

			if (NElem){
				element.removeChild(
					select(NElem,element)
					.element
				);
				return this
			}else{
				element.remove();
			}
		},
		hide:function(){
			element.style.display = 'none';

			return this
		},
		show:function(){
			element.style.display = '';

			return this			
		},
		back:function(){
			return select(
				"",
				dom=element.parentElement
			);
		},
		value:function(){
			return element.value
		},
		find:function(n){
			return select(n,element);

		},
		event:function(NEvent,func){
			element.addEventListener(NEvent,func);
			return this;
		},
		get el(){ return element }
	}
	
}

function h2dom(tagName,html){
	var tag = document.createElement(tagName);
	tag.innerHTML = html
	return tag
}


class Request{

	constructor(){
		this.start = function(){  }
		this.error = function(){  } 
	}

	_get(url,func){

		Ajax({
			url:url,
			done:func,
			error:this.error,
			start:this.start
		});

	}


	_post(url,argvs,func){

		Ajax({
			method:"POST",
			url:url,
			argv:argvs,
			done:func,
			error:this.error,
			start:this.start

		});

	}

	_put(url,argvs,func){

		Ajax({
			method:"PUT",
			url:url,
			argv:argvs,
			done:func,
			error:this.error,
			start:this.start
			
		});

	}

	_delete(url,argvs,func){

		Ajax({
			method:"DELETE",
			url:url,
			argv:argvs,
			done:func,
			error:this.error,
			start:this.start
			
		});

	}


}
