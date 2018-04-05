function fadeout(audioId) {
	var sound = document.getElementById(audioId);
	//get just the array index number of the audio player in question
	var idNum = (audioId.substr(5)-1);
	
	var fadeAudio = setInterval(function () {

		var fadeOutInterval = 0.95;
		if (sound.volume >= 0.01){
			// this needs to be logarhythmic!!!
			sound.volume = sound.volume * fadeOutInterval;
		} else {if (sound.volume > 0) {sound.volume = 0;}}
		
		// When volume at zero stop interval "loop"
		if (sound.volume <= 0) {
			//pause the playback
			sound.pause();
			//set the volume back to its predetermined value
			sound.volume = sounds[idNum][5];
			//discontinue the intervalling
			clearInterval(fadeAudio);
		}
	}, 40);
	
}
