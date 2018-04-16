 function swapStyleSheet() {
	var currentStyle = document.getElementById("pagestyle").getAttribute("href");
	if(currentStyle == "styles.css") {
		document.getElementById("pagestyle").setAttribute("href", "whapham.css");
	} else if(currentStyle == "whapham.css") {
		document.getElementById("pagestyle").setAttribute("href", "styles.css");
	}
      
}

