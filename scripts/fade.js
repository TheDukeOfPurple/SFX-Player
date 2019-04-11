function fadeout(audioId) {
	var sound = document.getElementById('sound'+audioId);
	var originalVol = sounds[audioId][4];
	if (originalVol == 1) {originalVol -= .01};
	var fadeLength = sounds[audioId][6];
	var fadeSteps = sounds[audioId][7];
	var stepsElapsed = 0;	
	var logMult = Math.log(.01)/Math.log(originalVol)/fadeSteps
	var fade = setInterval(function() {
		sound.volume = Math.pow(originalVol, logMult*stepsElapsed);
		console.log(sound.volume);
		if (stepsElapsed >= fadeSteps) {
			
			sound.pause();
			//set the volume back to its predetermined value
			sound.volume = sounds[audioId][4];
			clearInterval(fade);
		}
		stepsElapsed++;
	}, fadeLength*1000/fadeSteps);
	
}
