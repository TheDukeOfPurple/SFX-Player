var goodBG = true;
function changeBG() {
	var body = document.getElementsByTagName("body")[0];
	if(goodBG) {
		body.style.backgroundImage = "url(images/lincoln_background.jpg)";
		document.getElementById("whapham").className = "none"
		goodBG = false;
	} else {
		body.style.backgroundImage = "url(images/whapham_background.jpg)";
		document.getElementById("whapham").className = "shake"
		goodBG = true;
	}
}
