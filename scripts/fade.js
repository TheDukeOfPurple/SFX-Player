function fadeout(audioId) {
	var sound = document.getElementById('sound'+audioId);	// audio element stored to modify easily
	var originalVol = sounds[audioId][4];
	if (originalVol == 1) {originalVol -= .01};		// if the volume starts at 100%, it needs to be reduced so that it can be raised to a power
	var fadeLength = sounds[audioId][6];
	var fadeSteps = fadeLength*60;	//  number of times to decrease the volume within the fadeout. the constant here can be changed to modify the smoothness of the fade.
	var stepsElapsed = 0;	// iterator
	var logMult = (Math.log(.01) / Math.log(originalVol)) / fadeSteps;	// algebra to find the correct exponent
	var fade = setInterval(function() {	// loops each fade step until done fading out
		sound.volume = Math.pow(originalVol, logMult*stepsElapsed);
		console.log(sound.volume);
		if (stepsElapsed >= fadeSteps) {
			sound.pause();	// stop playback
			sound.volume = sounds[audioId][4];	// set the volume back to its predetermined value
			clearInterval(fade);	// stop looping
		}
		stepsElapsed++;
	}, fadeLength * 1000 / fadeSteps);
	
}
