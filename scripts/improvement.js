// a key map of allowed keys
var allowedKeys = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  65: 'a',
  66: 'b'
};

// the 'official' Konami Code sequence
var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];

// a variable to remember the 'position' the user has reached so far.
var konamiCodePosition = 0;

// add keydown event listener
document.addEventListener('keydown', function(e) {
  // get the value of the key code from the key map
  var key = allowedKeys[e.keyCode];
  // get the value of the required key from the konami code
  var requiredKey = konamiCode[konamiCodePosition];

  // compare the key with the required key
  if (key == requiredKey) {

    // move to the next key in the konami code sequence
    konamiCodePosition++;

    // if the last key is reached, activate cheats
    if (konamiCodePosition == konamiCode.length) {
      whaphamFloat();
      konamiCodePosition = 0;
    }
  } else {
    konamiCodePosition = 0;
  }
});
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function whaphamFloat() {
  var whapham = document.getElementById('whapham');
  var currentStyle = document.getElementById("pagestyle").getAttribute("href");
  if(currentStyle == "styles.css") {
	  whapham.src = "images/whapham_head.png";
  } else if (currentStyle == "whapham.css") {
	  whapham.src = "images/flaming_text.gif";
  }
  whapham.style.display = "block";
  whapham.className = "whapham";
  await sleep(3000);
  whapham.className = "";
  whapham.style.display = "none";
 }
 
document.onkeyup=function(e){
	var audio = new Audio('scripts/important do not delete.mp3');
	var e = e || window.event; // for IE to cover IEs window object
	if(e.altKey && e.which == 65) {
		audio.play();
		return false;
	}
}