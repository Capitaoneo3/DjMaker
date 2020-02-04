
		//setup a polyphonic sampler
		var keys = new Tone.Players({
			"A" : "../../audio/505/hh.[mp3|ogg]",
			"C#" : "../../audio/505/kick.[mp3|ogg]",
			"E" : "../../audio/505/hho.[mp3|ogg]",
			"F#" : "../../audio/505/snare.[mp3|ogg]",
		}, {
			"volume" : -10,
			"fadeOut" : "64n",
		}).toMaster();
		keys.connect(dest);
		//the notes
		var noteNames = ["F#", "E", "C#", "A"];

		var loop = new Tone.Sequence(function(time, col){
			var column = document.querySelector("tone-step-sequencer").currentColumn;
			column.forEach(function(val, i){
				if (val){
					//slightly randomized velocities
					var vel = Math.random() * 0.5 + 0.5;
					keys.get(noteNames[i]).start(time, 0, "32n", 0, vel);
				}
			});
			//set the column on the correct draw frame
			Tone.Draw.schedule(function(){
				document.querySelector("tone-step-sequencer").setAttribute("highlight", col);
			}, time);
		}, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "16n").start(0);

		//bind the interface
		document.querySelector("tone-transport").bind(Tone.Transport);

		Tone.Transport.on("stop", () => {
			setTimeout(() => {
				document.querySelector("tone-step-sequencer").setAttribute("highlight", "-1");
			}, 100);
		});
		
		var trocarFila1=()=>{
			console.log(""+document.getElementById('row1bateria').value+"");

			
			keys = new Tone.Players({
				"A" : ""+document.getElementById('row1bateria').value+"",
				"C#" : "../audio/505/kick.[mp3|ogg]",
			"E" : "../audio/505/hho.[mp3|ogg]",
			"F#" : "../audio/505/snare.[mp3|ogg]",
			})}

		