function fadeout(audioId) {
	var sound = document.getElementById('sound'+audioId);
	
	var fadeAudio = setInterval(function () {

		var fadeOutInterval = 0.95;
		if (sound.volume >= 0.01){
			// this needs to be logarithmic!!!
			//sound.volume = sound.volume * fadeOutInterval;
			sound.volume = sound.volume/(Math.log(sound.volume)/Math.log(10));
		} else {if (sound.volume > 0) {sound.volume = 0;}}
		
		// When volume at zero stop interval "loop"
		if (sound.volume <= 0) {
			//pause the playback
			sound.pause();
			//set the volume back to its predetermined value
			sound.volume = sounds[audioId][4];
			//discontinue the intervalling
			clearInterval(fadeAudio);
		}
	}, 40);
	
}
