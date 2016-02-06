<?php
$url = "http://api.giphy.com/v1/gifs/search?q=henry&api_key=dc6zaTOxFJmzC&limit=10";
//print_r(json_decode(file_get_contents($url)));
?>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<link rel="stylesheet" type="text/css" href="style.css">
	<title>Lahe kell</title>
	<script>
		var json = <?php echo file_get_contents($url); ?>;
	</script>
	<script src="clock.js"></script>
</head>
<body id="giphy">
	<div id="clock"></div>
	<div id="musa">
		<audio controls loop>
			<source src="sonk.mp3" type="audio/mpeg">
			Your browser does not support the audio element.
		</audio>
	</div>
</body>
</html>