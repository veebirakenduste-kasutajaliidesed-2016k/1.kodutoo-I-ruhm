 window.onload = function(){
	var xhr = document.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=dc6zaTOxFJmzC&limit=5");
	xhr.done(function(data) { console.log("success got data", data); });
 };