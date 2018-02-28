
<?php 

	$_DELETE = array();
	$_PUT = array();
	$method = $_SERVER['REQUEST_METHOD'];
	if($method == "PUT"){
		parse_str(
			file_get_contents("php://input"),
			$_PUT
		);
	}elseif($method == "DELETE"){
		parse_str(
			file_get_contents("php://input"),
			$_DELETE
		);

	}



?>

	
<div class="get">

	<div class="from">
		
		<input type="text" name="name" id="name">
		<input type="submit" id="search" name="search" value="Search">

	</div>

</div>


<div class="post">

	<p class="c02"> 
		Hello <?php if( isset($_POST["name"])){ echo $_POST["name"]; } ?> <br>

		We happy *-*!!
	</p>

</div>

