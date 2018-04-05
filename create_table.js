// Load up an array with all of the information
	
	// *** Change this information.  When adding a line, make sure all lines end with a comma except the last ***
	// *** The format below is: sequential number (very important!), page number, dialog or action cue, name of file (must be located in the audio_files folder), desired volume, start time (seconds)
	var sounds = [
		['1','Pre-Show',' ','Pre-Show Woods Ambience','preshow.wav','0.8','0'],
		['2','50','Bakers Wife: What I would not give to be in your shoes','Beanstalk Grow 1','rumble.wav','0.8','0'],
		['3','75','Applause after it takes two','Hen','chicken.wav','0.4','0'],
		['4','94','Jack: She only milks for me','Milky white air','air milky white.wav','0.4','0'],
		['5','108','Intermission','Intermission Woods Ambience',' ','0.8','0'],
		['6','114','Baker: why expand when we could simply move to another cottage?','Baby Cry (MAYBE EDIT SOME OF THESE TO MAKE THEM SOUND DIFFERENT)','baby CRY.wav','0.2','7.4'],
		['7','115','ALL: I am so happy!','Earthquake (NEED TO ADD CRASH AT END)','earth quake.wav','0.9','0'],
		['8','122','Cinderella: Oh good friends, what news have you?','Birds','bird.wav','0.4','0'],
		['9','122','Cinderella: What of mothers grave?','Birds 2','bird.wav','0.4','6'],
		['10','122','Cinderella: What kind of trouble?','Birds 3','bird.wav','0.4','7'],
		['11','122','Cinderella: A princess is not supposed to go into the woods unescorted.','Birds 4','bird.wav','0.4','5.5'],
		['12','122','Cinderella: Thank you, birds!','Birds 5','bird.wav','0.4','0'],
		['13','131','Bakers Wife: Calm down!','Baby Cry 2','baby CRY.wav','0.2','16'],
		['14','132','Bakers Wife: Shh!','Giant Steps','giant steps 1.wav','0.99','0'],
		['15','137','Narrator: I am not the lad!', 'Sam falls', 'sam falls.wav','0.8','0'],
		['16','140','Steward: no do not step on-','giant step/squish','rapunzel dies.wav','0.9','0'],
		['17','152','after Moments in the Woods, bakers wife starts to leave','Crow','crow call.wav','0.05','0'],
		['18','153','when bakers wife starts to leave','Giant Steps 2','giant steps 1.wav','0.99','0'],
		['19','170','Baker: Give me my son!','Baby Cry 3','baby CRY.wav','0.2','7.4'],
		['20','170','Little Red: She is too tall to suprise','Birds (MAYBE EDIT SOME OF THESE TO MAKE THEM SOUND DIFFERENT)','bird.wav','0.4','0'],
		['21','170','Cinderella: I need your help more now than ever.','Bird 2','bird.wav','0.4','6'],
		['22','170','Cinderella: What of the prince?.','Bird 3','bird.wav','0.3','7'],
		['23','170','Cinderella: How can you help?.','Bird 4','bird.wav','0.4','5'],
		['24','170','Cinderella: You could do that?.','Bird 5','bird.wav','0.5','6'],
		['25','171','Cinderella: How can I ever thank you?.','Bird 6','bird.wav','0.6','0'],
		['26','172','Baker: Come on.','Baby Cry 4','baby noises.wav','0.2','0'],
		['27','180','ALL: Someone is on your side-','Giant Steps 3','giant steps 1.wav','0.99','0'],
		['28','180','Giant: And I shall leave your kingdom-','Bird Attack','birdsattack.wav','0.8','0'],
		['29','181','Red: She does not look happy-','giant hit','hit.wav','0.9','0'],
		['30','181','She is beginning to fall this way!','Giant Crash','giantfall.wav','0.8','0'],
		['31','183','Baker: How sad is it that my son will never know her.','Baby Cry 5','baby CRY.wav','0.2','16'],
		['32','184','Baker: But how will I go about being a father with no one to mother my child?','Baby Cry 6','baby CRY.wav','0.2','7.4'],
		['33','184','Bakers Wife: Tell him what you know.','Baby Cry 7','baby CRY.wav','0.2','16'],
	];

function create_table(){
	
	
	
	// *** set the path for the folder location.  All backslashes in the path need to be 2 backslashes ***
	var path = "audio_files/";
	// *** Don't change anything below this line!!! *** 
	//var path = "C:\\TheatreSound\\SFX_Player\\audio_files\\";  // path for sound laptop
	//var path = "C:\\Steve\\Aves Theatre\\SFX_Player\\audio_files\\";  //path for Steve's computer
	//var path = "audio_files/";  //path for online - works on local machine too!
	var html = "";
	// generate html code to be sent to the browser later
	html += "<tr style=\"font-weight:bold;text-decoration:underline;\"><td>pg.</td><td>Script Ref</td><td>Name</td><td></td><td>Volume</td><td></td><td></td>";
	
	for (i = 0; i <= (sounds.length-1); i++) {
		html += "<tr>";
			html += "<td>"+sounds[i][1]+"</td>";
			html += "<td>"+sounds[i][2]+"</td>";
			html += "<td>"+sounds[i][3]+"</td>";
			html += "<td>";
				if (sounds[i][3] !== "Intermission"){
					html += "<audio id=\"sound"+sounds[i][0]+"\" controls=\"controls\" preload=\"auto\">";
						html += "<source src=\""+path+sounds[i][4]+"\" type=\"audio/mpeg\">";
						html += "Audio Player Error: did you use the right file path?";
					html += "</audio>";
				}
			html += "</td>";
			
			if (sounds[i][3] !== "Intermission"){
				html += "<td><span id=\"sound"+sounds[i][0]+"vol\">error</span></td>";
				html += "<td><div style=\"display:block; padding: 2px 4px 2px 4px; background: #ff7d30;color:#ffffff; cursor:url(images/cursors/pointer-32px.png), auto;\" onclick=\"fadeout('sound"+sounds[i][0]+"')\">Fade Out</td>";
				html += "<td>(don't forget to write all volume settings to the code)</td>";
			}
			
		html += "</tr>";
	}
	
	// send the accumulated html code to the browser
	document.getElementById("sound_table").innerHTML = html;
	
	// set the initial volumes and start points
	for (i = 0; i <= (sounds.length-1); i++) {
		if (sounds[i][3] !== "Intermission"){
			var audio = document.getElementById("sound"+sounds[i][0]+"");
			audio.volume = sounds[i][5];
			audio.currentTime = sounds[i][6];
		}
	};
	
	// Add event listeners to display current volume level
	// Yes, I know this is totally ridiculous.  It's late.
	var aud = document.getElementById("sound"+sounds[0][0]);
		aud.onvolumechange = function() {
			document.getElementById("sound"+sounds[0][0]+"vol").innerHTML = aud.volume.toFixed(2);
		};
	if ((sounds.length >=2) && (sounds[1][3] !== "Intermission")){
		var aud2 = document.getElementById("sound"+sounds[1][0]);
			aud2.onvolumechange = function() {
				document.getElementById("sound"+sounds[1][0]+"vol").innerHTML = aud2.volume.toFixed(2);
			};
	}
	if ((sounds.length >=3) && (sounds[2][3] !== "Intermission")){
		var aud3 = document.getElementById("sound"+sounds[2][0]);
			aud3.onvolumechange = function() {
				document.getElementById("sound"+sounds[2][0]+"vol").innerHTML = aud3.volume.toFixed(2);
			};
	}
	if ((sounds.length >=4) && (sounds[3][3] !== "Intermission")){
		var aud4 = document.getElementById("sound"+sounds[3][0]);
			aud4.onvolumechange = function() {
				document.getElementById("sound"+sounds[3][0]+"vol").innerHTML = aud4.volume.toFixed(2);
			};
	}
	if ((sounds.length >=5) && (sounds[4][3] !== "Intermission")){
		var aud5 = document.getElementById("sound"+sounds[4][0]);
			aud5.onvolumechange = function() {
				document.getElementById("sound"+sounds[4][0]+"vol").innerHTML = aud5.volume.toFixed(2);
			};
	}
	if ((sounds.length >=6) && (sounds[5][3] !== "Intermission")){
		var aud6 = document.getElementById("sound"+sounds[5][0]);
			aud6.onvolumechange = function() {
				document.getElementById("sound"+sounds[5][0]+"vol").innerHTML = aud6.volume.toFixed(2);
			};
	}
	if ((sounds.length >=7) && (sounds[6][3] !== "Intermission")){
		var aud7 = document.getElementById("sound"+sounds[6][0]);
			aud7.onvolumechange = function() {
				document.getElementById("sound"+sounds[6][0]+"vol").innerHTML = aud7.volume.toFixed(2);
			};
	}
	if ((sounds.length >=8) && (sounds[7][3] !== "Intermission") ){
		var aud8 = document.getElementById("sound"+sounds[7][0]);
			aud8.onvolumechange = function() {
				document.getElementById("sound"+sounds[7][0]+"vol").innerHTML = aud8.volume.toFixed(2);
			};
	}
	if ((sounds.length >=9) && (sounds[8][3] !== "Intermission")){
		var aud9 = document.getElementById("sound"+sounds[8][0]);
			aud9.onvolumechange = function() {
				document.getElementById("sound"+sounds[8][0]+"vol").innerHTML = aud9.volume.toFixed(2);
			};
	}
	if ((sounds.length >=10) && (sounds[9][3] !== "Intermission")){
		var aud10 = document.getElementById("sound"+sounds[9][0]);
			aud10.onvolumechange = function() {
				document.getElementById("sound"+sounds[9][0]+"vol").innerHTML = aud10.volume.toFixed(2);
			};
	}
	if ((sounds.length >=11) && (sounds[10][3] !== "Intermission")){
		var aud11 = document.getElementById("sound"+sounds[10][0]);
			aud11.onvolumechange = function() {
				document.getElementById("sound"+sounds[10][0]+"vol").innerHTML = aud11.volume.toFixed(2);
			};
	}
	if ((sounds.length >=12) && (sounds[11][3] !== "Intermission")){
		var aud12 = document.getElementById("sound"+sounds[11][0]);
			aud12.onvolumechange = function() {
				document.getElementById("sound"+sounds[11][0]+"vol").innerHTML = aud12.volume.toFixed(2);
			};
	}
	if ((sounds.length >=13) && (sounds[12][3] !== "Intermission")){
		var aud13 = document.getElementById("sound"+sounds[12][0]);
			aud13.onvolumechange = function() {
				document.getElementById("sound"+sounds[12][0]+"vol").innerHTML = aud13.volume.toFixed(2);
			};
	}
	if ((sounds.length >=14) && (sounds[13][3] !== "Intermission")){
		var aud14 = document.getElementById("sound"+sounds[13][0]);
			aud14.onvolumechange = function() {
				document.getElementById("sound"+sounds[13][0]+"vol").innerHTML = aud14.volume.toFixed(2);
			};
	}
	if ((sounds.length >=15) && (sounds[14][3] !== "Intermission")){
		var aud15 = document.getElementById("sound"+sounds[14][0]);
			aud15.onvolumechange = function() {
				document.getElementById("sound"+sounds[14][0]+"vol").innerHTML = aud15.volume.toFixed(2);
			};
	}
		if ((sounds.length >=16) && (sounds[15][3] !== "Intermission")){
		var aud16 = document.getElementById("sound"+sounds[15][0]);
			aud16.onvolumechange = function() {
				document.getElementById("sound"+sounds[15][0]+"vol").innerHTML = aud16.volume.toFixed(2);
			};
	}
		if ((sounds.length >=17) && (sounds[16][3] !== "Intermission")){
		var aud17 = document.getElementById("sound"+sounds[16][0]);
			aud17.onvolumechange = function() {
				document.getElementById("sound"+sounds[16][0]+"vol").innerHTML = aud17.volume.toFixed(2);
			};
	}
		if ((sounds.length >=18) && (sounds[17][3] !== "Intermission")){
		var aud18 = document.getElementById("sound"+sounds[17][0]);
			aud18.onvolumechange = function() {
				document.getElementById("sound"+sounds[17][0]+"vol").innerHTML = aud18.volume.toFixed(2);
			};
	}
			if ((sounds.length >=19) && (sounds[18][3] !== "Intermission")){
		var aud19 = document.getElementById("sound"+sounds[18][0]);
			aud19.onvolumechange = function() {
				document.getElementById("sound"+sounds[18][0]+"vol").innerHTML = aud19.volume.toFixed(2);
			};
	}
		if ((sounds.length >=20) && (sounds[19][3] !== "Intermission")){
		var aud20 = document.getElementById("sound"+sounds[19][0]);
			aud20.onvolumechange = function() {
				document.getElementById("sound"+sounds[19][0]+"vol").innerHTML = aud20.volume.toFixed(2);
			};
	}
		if ((sounds.length >=21) && (sounds[20][3] !== "Intermission")){
		var aud21 = document.getElementById("sound"+sounds[20][0]);
			aud21.onvolumechange = function() {
				document.getElementById("sound"+sounds[20][0]+"vol").innerHTML = aud21.volume.toFixed(2);
			};
	}
		if ((sounds.length >=22) && (sounds[21][3] !== "Intermission")){
		var aud22 = document.getElementById("sound"+sounds[21][0]);
			aud22.onvolumechange = function() {
				document.getElementById("sound"+sounds[21][0]+"vol").innerHTML = aud22.volume.toFixed(2);
			};
	}
		if ((sounds.length >=23) && (sounds[22][3] !== "Intermission")){
		var aud23 = document.getElementById("sound"+sounds[22][0]);
			aud23.onvolumechange = function() {
				document.getElementById("sound"+sounds[22][0]+"vol").innerHTML = aud23.volume.toFixed(2);
			};
	}
		if ((sounds.length >=24) && (sounds[23][3] !== "Intermission")){
		var aud24 = document.getElementById("sound"+sounds[23][0]);
			aud24.onvolumechange = function() {
				document.getElementById("sound"+sounds[23][0]+"vol").innerHTML = aud24.volume.toFixed(2);
			};
	}
		if ((sounds.length >=25) && (sounds[24][3] !== "Intermission")){
		var aud25 = document.getElementById("sound"+sounds[24][0]);
			aud25.onvolumechange = function() {
				document.getElementById("sound"+sounds[24][0]+"vol").innerHTML = aud25.volume.toFixed(2);
			};
	}
		if ((sounds.length >=26) && (sounds[25][3] !== "Intermission")){
		var aud26 = document.getElementById("sound"+sounds[25][0]);
			aud26.onvolumechange = function() {
				document.getElementById("sound"+sounds[25][0]+"vol").innerHTML = aud26.volume.toFixed(2);
			};
	}
		if ((sounds.length >=27) && (sounds[26][3] !== "Intermission")){
		var aud27 = document.getElementById("sound"+sounds[26][0]);
			aud27.onvolumechange = function() {
				document.getElementById("sound"+sounds[26][0]+"vol").innerHTML = aud27.volume.toFixed(2);
			};
	}
		if ((sounds.length >=28) && (sounds[27][3] !== "Intermission")){
		var aud28 = document.getElementById("sound"+sounds[27][0]);
			aud28.onvolumechange = function() {
				document.getElementById("sound"+sounds[27][0]+"vol").innerHTML = aud28.volume.toFixed(2);
			};
	}
		if ((sounds.length >=29) && (sounds[28][3] !== "Intermission")){
		var aud29 = document.getElementById("sound"+sounds[28][0]);
			aud29.onvolumechange = function() {
				document.getElementById("sound"+sounds[28][0]+"vol").innerHTML = aud29.volume.toFixed(2);
			};
	}
		if ((sounds.length >=30) && (sounds[29][3] !== "Intermission")){
		var aud30 = document.getElementById("sound"+sounds[29][0]);
			aud30.onvolumechange = function() {
				document.getElementById("sound"+sounds[29][0]+"vol").innerHTML = aud30.volume.toFixed(2);
			};
	}
		if ((sounds.length >=31) && (sounds[30][3] !== "Intermission")){
		var aud31 = document.getElementById("sound"+sounds[30][0]);
			aud31.onvolumechange = function() {
				document.getElementById("sound"+sounds[30][0]+"vol").innerHTML = aud31.volume.toFixed(2);
			};
	}
		if ((sounds.length >=32) && (sounds[31][3] !== "Intermission")){
		var aud32 = document.getElementById("sound"+sounds[31][0]);
			aud32.onvolumechange = function() {
				document.getElementById("sound"+sounds[31][0]+"vol").innerHTML = aud32.volume.toFixed(2);
			};
	}
		if ((sounds.length >=33) && (sounds[32][3] !== "Intermission")){
		var aud33 = document.getElementById("sound"+sounds[32][0]);
			aud33.onvolumechange = function() {
				document.getElementById("sound"+sounds[32][0]+"vol").innerHTML = aud33.volume.toFixed(2);
			};
	}
	
	
	
	
	
	
}