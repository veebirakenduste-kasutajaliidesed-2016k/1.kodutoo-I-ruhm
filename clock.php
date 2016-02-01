<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<link rel="stylesheet" type="text/css" href="style.css">
	<title>Lahe kell</title>
	<script src="clock.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
</head>
<body id="giphy">

<?php
$url = "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=dc6zaTOxFJmzC&limit=5";
var_dump(json_decode(file_get_contents($url)));
?>
	<!--<script>
		function gifs(){
			
			var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=dc6zaTOxFJmzC&limit=5");
			xhr.done(function(data) { console.log("success got data", data); });
			console.log(xhr.status);
		
		};
	</script>*/-->
	<div id="clock"></div>
</body>
</html>