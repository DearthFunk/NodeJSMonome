let serialosc = require('serialosc');

let device = null;
let interval = null;
let x = 4;
let y = 5;

serialosc.on('device:add', deviceAddedEvent);
serialosc.start();

/////////////////////////////////////

function deviceAddedEvent(dev) {
	if (device) { return; }
	device = dev;
	console.log('device set!');
	mapEvents(device.type === 'grid');
}

function mapEvents(toMap) {
	if(!toMap){
		console.log('Sry, grids only');
		return;
	}
	device.on('key', keyEvent);
	startPlayback();
}

function keyEvent(data) {
	console.log(data);
	device.set(data);
	if (data.s === 1){
		if (interval){
			if (x === data.x && y === data.y){
				stopPlayback();
			}
		}
		else {
			x = data.x;
			y = data.y;
			startPlayback();
		}
	}
}

function stopPlayback(){
	console.log('stop');
	clearInterval(interval);
	interval = null;
}

function startPlayback(){
	console.log('start');
	interval = setInterval(randomLight, 1000);
}

function randomLight() {

	device.set({x: x, y: y, s:0});

	x = Math.floor(Math.random() * 16) + 1;
	y = Math.floor(Math.random() * 8) + 1;
	console.log(x, y)
	device.set({x: x, y: y, s:1});

}
