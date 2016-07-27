var pianokeys = document.getElementById('pianokeys');

function createAudio(idOf, audiofile) {
	var createAudio = document.createElement('AUDIO');
	createAudio.setAttribute('id', idOf);
	document.body.appendChild(createAudio);
	var audioEl = document.getElementById(idOf);
	audioEl.setAttribute('src', audiofile);
	audioEl.setAttribute('type', 'audio/mpeg');
	audioEl.setAttribute('preload', 'auto');
}

createAudio('cSound', 'audio/c.mp3');  // white keys
createAudio('dSound', 'audio/d.mp3'); 
createAudio('eSound', 'audio/e.mp3');
createAudio('fSound', 'audio/f.mp3');
createAudio('gSound', 'audio/g.mp3');
createAudio('aSound', 'audio/a.mp3');
createAudio('bSound', 'audio/b.mp3');
createAudio('cmajSound', 'audio/cmaj.mp3'); 
createAudio('csharpSound', 'audio/csharp.mp3'); // black keys
createAudio('dsharpSound', 'audio/dsharp.mp3')
createAudio('fsharpSound', 'audio/fsharp.mp3');
createAudio('gsharpSound', 'audio/gsharp.mp3');
createAudio('asharpSound', 'audio/asharp.mp3');

var cSound = document.getElementById('cSound'); // white key sounds
var dSound = document.getElementById('dSound');
var eSound = document.getElementById('eSound');
var fSound = document.getElementById('fSound');
var gSound = document.getElementById('gSound');
var aSound = document.getElementById('aSound');
var bSound = document.getElementById('bSound');
var cmajSound = document.getElementById('cmajSound');
var csharpSound = document.getElementById('csharpSound'); // black key sounds
var dsharpSound = document.getElementById('dsharpSound');
var fsharpSound = document.getElementById('fsharpSound');
var gsharpSound = document.getElementById('gsharpSound');
var asharpSound = document.getElementById('asharpSound');

/* ======== allows playSound to container EventListener ========== */  

function getTarget(e) {
	return e.target;
}

var currentkey = document.getElementById('currentkey');

function playSound(e) {
	var target = getTarget(e);
	var targetId = target.id;
	switch (targetId) {
		case 'pianokeyc':
			currentkey.innerHTML = 'C';
			cSound.play();
			break;
		case 'pianokeyd':
			currentkey.innerHTML = 'D';
			dSound.play();
			break;
		case 'pianokeye':
			currentkey.innerHTML = 'E';
			eSound.play();
			break;
		case 'pianokeyf':
			currentkey.innerHTML = 'F';
			fSound.play();
			break;
		case 'pianokeyg':
			currentkey.innerHTML = 'G';
			gSound.play();
			break;
		case 'pianokeya':
			currentkey.innerHTML = 'A';
			aSound.play();
			break;
		case 'pianokeyb':
			currentkey.innerHTML = 'B';
			bSound.play();
			break;
		case 'pianokeycmaj':
			currentkey.innerHTML = 'C Major';
			cmajSound.play();
			break;
		case 'pianokeycsharp':
					currentkey.innerHTML = 'C#/D♭';
			csharpSound.play();
			break;
		case 'pianokeydsharp':
			currentkey.innerHTML = 'D#/E♭';
			dsharpSound.play();
			break;
		case 'pianokeyfsharp':
			currentkey.innerHTML = 'F#/G♭';
			fsharpSound.play();
			break;
		case 'pianokeygsharp':
			currentkey.innerHTML = 'G#/A♭';
			gsharpSound.play();
			break;
		case 'pianokeyasharp':
			currentkey.innerHTML = 'A#/B♭';
			asharpSound.play();
			break;
	}
}

/* ======== adds Event Listener to container ========== */

pianokeys.addEventListener('click', function(e){
		playSound(e); 
	}, false);