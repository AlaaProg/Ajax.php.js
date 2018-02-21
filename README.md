# Ajax.php.js


``` 

<script src="ajax.php.js" type="text/javascript" charset="utf-8"></script>

<script>

request ({
	method:"POST",
	url:"testAjax.php",
	argv:"name=ali",
	header:{
		"Content-Type":"application/x-www-form-urlencoded",
		"Content-type":"text/html; charset=utf-8;",
		"Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"
	},
	response:function(){

		var ta = select('#TAjax');
		ta.text('success');
		ta.css('color',"green");

	},
	error:function(er){
		alert(er);
	}

});

</script>


```

```
var req = request({

	method:"POST",
	url:"testAjax.php",
	argv:"name=ali",
	header:{
		"Content-Type":"application/x-www-form-urlencoded",
		"Content-type":"text/html; charset=utf-8;",
		"Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"
	},
	response:function(data){
		// add class conten(testAjax.php) in (index.php)body
		select("body").append( select(".content",data).element );
		var cont = select('.content');

		// or
		document.body.append(
			data.getElementsByClassName('.content')
		);
		var cont = document.getElementsByClassName('.content')

	},
	error:function(er){
		// er return status text
		alert(er);
	}

});

```
