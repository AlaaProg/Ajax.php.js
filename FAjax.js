var req = new Request();

var con = select(".content")

req.start = function(){

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

