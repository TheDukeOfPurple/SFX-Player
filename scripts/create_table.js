// Load up an array with all of the information
var sounds = [['pg.','Script Ref', 'Name', '', 'Volume', ''],	// these are the the column headings - don't change them
		
		/*		Change this information.  When adding a line, make sure all lines end with a comma except the last.
				The format below is: page number, dialog or action cue, name of file (must be located in the audio_files folder or the specified path),
				desired volume, start time (seconds).
		*/
		['Pre-Show',' ','Pre-Show Woods Ambience','preshow.wav','0.8','0'],
		['50','Bakers Wife: What I would not give to be in your shoes','Beanstalk Grow 1','rumble.wav','0.8','0'],
		['75','Applause after it takes two','Hen','chicken.wav','0.4','0'],
		['94','Jack: She only milks for me','Milky white air','air milky white.wav','0.4','0'],
		['108','Intermission','Intermission Woods Ambience',' ','0.8','0'],
		['114','Baker: why expand when we could simply move to another cottage?','Baby Cry (MAYBE EDIT SOME OF THESE TO MAKE THEM SOUND DIFFERENT)','baby CRY.wav','0.2','7.4'],
		['115','ALL: I am so happy!','Earthquake (NEED TO ADD CRASH AT END)','earth quake.wav','0.9','0'],
		['122','Cinderella: Oh good friends, what news have you?','Birds','bird.wav','0.4','0'],
		['122','Cinderella: What of mothers grave?','Birds 2','bird.wav','0.4','6'],
		['122','Cinderella: What kind of trouble?','Birds 3','bird.wav','0.4','7'],
		['122','Cinderella: A princess is not supposed to go into the woods unescorted.','Birds 4','bird.wav','0.4','5.5'],
		['122','Cinderella: Thank you, birds!','Birds 5','bird.wav','0.4','0'],
		['131','Bakers Wife: Calm down!','Baby Cry 2','baby CRY.wav','0.2','16'],
		['132','Bakers Wife: Shh!','Giant Steps','giant steps 1.wav','0.99','0'],
		['137','Narrator: I am not the lad!', 'Sam falls', 'sam falls.wav','0.8','0'],
		['140','Steward: no do not step on-','giant step/squish','rapunzel dies.wav','0.9','0'],
		['152','after Moments in the Woods, bakers wife starts to leave','Crow','crow call.wav','0.05','0'],
		['153','when bakers wife starts to leave','Giant Steps 2','giant steps 1.wav','0.99','0'],
		['170','Baker: Give me my son!','Baby Cry 3','baby CRY.wav','0.2','7.4'],
		['170','Little Red: She is too tall to suprise','Birds (MAYBE EDIT SOME OF THESE TO MAKE THEM SOUND DIFFERENT)','bird.wav','0.4','0'],
		['170','Cinderella: I need your help more now than ever.','Bird 2','bird.wav','0.4','6'],
		['170','Cinderella: What of the prince?.','Bird 3','bird.wav','0.3','7'],
		['170','Cinderella: How can you help?.','Bird 4','bird.wav','0.4','5'],
		['170','Cinderella: You could do that?.','Bird 5','bird.wav','0.5','6'],
		['171','Cinderella: How can I ever thank you?.','Bird 6','bird.wav','0.6','0'],
		['172','Baker: Come on.','Baby Cry 4','baby noises.wav','0.2','0'],
		['180','ALL: Someone is on your side-','Giant Steps 3','giant steps 1.wav','0.99','0'],
		['180','Giant: And I shall leave your kingdom-','Bird Attack','birdsattack.wav','0.8','0'],
		['181','Red: She does not look happy-','giant hit','hit.wav','0.9','0'],
		['181','She is beginning to fall this way!','Giant Crash','giantfall.wav','0.8','0'],
		['183','Baker: How sad is it that my son will never know her.','Baby Cry 5','baby CRY.wav','0.2','16'],
		['184','Baker: But how will I go about being a father with no one to mother my child?','Baby Cry 6','baby CRY.wav','0.2','7.4'],
		['184','Bakers Wife: Tell him what you know.','Baby Cry 7','baby CRY.wav','0.2','16']
	];

function create_table() {
	
	// set folder path for sounds
	// 'audio_files/' is the default, and works with the github repo
	var path = 'audio_files/';
	
	//create the table
	var table = document.createElement('table');
	table.id = 'sound_table';
	var tableBody = document.createElement('tbody');
	var r = 0;	// row iterator - using for loop here is harder to read
	sounds.forEach(function(rowData) {
		var row = document.createElement('tr');
		var c = 0;	// column iterator - using for loop here is harder to read
		rowData.forEach(function(cellData) {
			if (r == 0) {		// table heading
				var cell = document.createElement('th');
				cell.appendChild(document.createTextNode(cellData));
			} else {
				var cell = document.createElement('td');
				
				switch(c) {
					case 3:		// audio player
						var audio = document.createElement('audio');
						audio.id = 'sound'+r;
						audio.controls = 'controls';
						audio.preload = 'auto';
						audio.setAttribute('onvolumechange', 'document.getElementById("sound'+r+'vol").innerHTML = volume.toFixed(2)');
					
						var source = document.createElement('source');
						source.src = path+sounds[r][c];
						source.type = 'audio/mpeg';
						audio.appendChild(source);
						audio.appendChild(document.createTextNode('Audio Player Error: did you use the right file path?'));
						cell.appendChild(audio);
						break;
						
					case 4:		// volume
						var vol = document.createElement('span');
						vol.id = 'sound'+r+'vol';
						cell.appendChild(vol);
						break;
						
					case 5:		// start position - don't show
						break;
						
					default:	// regular text
						cell.appendChild(document.createTextNode(cellData));
				}
			}
			row.appendChild(cell);
			c++;
		});
		if (r != 0) {	// creates fadeout buttons for all of the sounds
			var cell = document.createElement('td');
			var button = document.createElement('button');
			button.type = 'button';
			button.setAttribute('onclick', 'fadeout('+r+')');
			button.appendChild(document.createTextNode('Fade Out'));
			cell.appendChild(button);
			row.appendChild(cell);
		}
		tableBody.appendChild(row);
		r++;
	});
	table.appendChild(tableBody);
	document.body.appendChild(table);
	
	// set the initial volumes and start points
	for (i = 1; i < sounds.length; i++) {
		if (sounds[i][2] !== 'Intermission'){
			var audio = document.getElementById('sound'+i);
			audio.volume = sounds[i][4];
			audio.currentTime = sounds[i][5];
		}
	};
}
