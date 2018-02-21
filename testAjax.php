<<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>TestAjax</title>
	<link rel="stylesheet" href="">
</head>
<body>
	
<div class="content">
	<pre>
		
		<?php 
			if(!empty($_POST)){
				print_r($_POST);
			}elseif(!empty($_GET)){
				print_r($_GET);
			}else{
				echo "HEllo WOrld";
			}
		?>
		
	</pre>

</div>

</body>
</html>