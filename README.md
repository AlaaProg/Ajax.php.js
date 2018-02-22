# Ajax.php.js


``` 

Ajax({
	method: 'GET' // default GET 
	url   :'url',
	argv  :"key=val&key=val",
	done:(d)=>{
		// d object { dom, text }
		// dom == resulty = doucment( <ajaxresponsedocument></ajaxresponsedocument> )
	},
	error:(e)=>{
		// e object { status, text }
	},
	start:()=>{
		// in start connect 
	},
	chnage:(xhr)=>{
		// 
	},
	header:{
		// key : value// 
	}
});
```


```
select(' TagName or id or ClassName ')=>{
	append(element)
	childeOf(index)
	remove()
	text() return HTML | text(val) set
	css(k,v)
	set(k,v) and get(k) and del(k) -> attr
	element 
}
```
### example 

```
<script src="ajax.php.js" type="text/javascript" charset="utf-8"></script>
<script>
	// select id #TAjax 
	var ta = select('#TAjax')
	Ajax({

		url:"testAjax.php",
		argv:"name=alaa",
		start:()=>{
			ta.text("Loading ...")
			ta.css ("color","blue");
		},
		done:(d)=>{

			ta.text(" ");
			ta.append(
				// select class .content from testAjax.php 
				select('.content',d.dom).element 
				// and add To id #TAjax
			);
			ta.css ("color","#333");
		},
		error:(e)=>{
			ta.text(e.status)
			ta.css ("color","red");
		}

	});
</script>
```
