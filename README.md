# Ajax.php.js


``` 

var req = new Request();


req.start = function(){

	// run with all requests 

}

req.error = function(e){
	// run with all requests 
	alert(e.status);
}


req._get("url",function(d){
	
});

req._post("url","argvs=alaa",function(d){
	
});

req._put("url","argvs=alaa",function(d){
	
});

req._put("url","argvs=alaa",function(d){
	
});



```


```
select('element')
.css("key","value") 
.css("key")
.find("element") // search inset element 
.remove() // delete self
.remove("element") // delete child
.append("element")
.setattr(key,value)
.getattr("key")
.delattr("key")
.text() // return value text 
.text("value") // set text to element 
.html() // return element 
.html("value") // setElement 
.back() //  back to Element 
.show() //
.hide() // 
.el     // return element(document)
```
### example 

```
<script src="ajax.php.js" type="text/javascript" charset="utf-8"></script>
<script>
	var req = new Request();

	var con = select(".content")

	req.start = function(){
		console.log("Start Looding.......")
	}

	req.error = function(e){
		alert(e.status);
	}

	req._get("testAjax.php",function(d){

		var from = select(".get",d.dom).find(".from")
		con.append(
			from.el
		);


		select("#search").event("click",function(){
			req._post(
				"testAjax.php",
				"name="+from.find("#name").value(),

				function(d){
					if(con.find(".post").el){
						con.find(".post").html(select(".post",d.dom).html());
					}else{
						con.append(select(".post",d.dom).el);
					}
				}
			);
		});
	});

</script>
```
