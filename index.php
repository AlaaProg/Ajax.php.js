<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">

	<title> Test Php & Ajax </title>
	<link rel="stylesheet" href="style.css">
</head>
	<body>
	<div class="body">
		<h1> Test Php & Ajax </h1>
		<div id="TAjax">
			 
		</div>



		<script src="ajax.php.js" type="text/javascript" charset="utf-8"></script>

		<script>
			// select id #TAjax 
			var ta = select('#TAjax')
			Ajax({

				url:"testAjax.php",
				argv:"name=alaa",
				start:()=>{
					ta.text("Loading ...");
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
					ta.text(e.status);
					ta.css ("color","red");
				}

			});

		</script>
		</script>
	</div>
	</body>
</html>

