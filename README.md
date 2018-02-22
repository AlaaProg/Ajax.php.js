# Ajax.php.js


``` 

Ajax({
	// method: default GET 
	url   :'testAjax.php',
	argv  :"name=alaa",
	done:(d)=>{
		// d object { dom, text }
		// dom == resulty = doucment( <ajaxresponsedocument></ajaxresponsedocument> )
		// get Class '#TAjax' from testAjax.php
		
		d.dom.getElementsByClassName('#TAjax');
		// or 
		select(''#TAjax'');
		
	},
	error:(e)=>{
		// e object { status, text }
	}
	start:()=>{
		// in start connect 
	}
	header:{
		// key : value// 
	}
});
```


```
select()=>{
	append()
	childeOf(index)
	remove(element)
	text()
	css(k,v)
	set(k,v) and get(k) and del(k) -> attr
	element 
}
```
