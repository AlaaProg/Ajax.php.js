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
			// GET REQUEST //
			Ajax({
				url   :'testAjax.php',
				argv  :"name=alaa",
				done:(d)=>{
					console.log(d.dom);
				}
			});
	

		</script>
	</div>
	</body>
</html>

