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
						audio.setAttribute('onvolumechange', 'document.getElementById("sound'+r+'vol").innerHTML = Math.round(volume*100)+"%"');
					
						var source = document.createElement('source');
						source.src = path+sounds[r][c];
						source.type = 'audio/mpeg';
						audio.appendChild(source);
						audio.appendChild(document.createTextNode('Audio Player Error: did you use the right file path?'));
						cell.appendChild(audio);
						break;
						
					case 4:		// volume
						cell.setAttribute('class', 'volumepercent');
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
