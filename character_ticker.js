const matrix = require('./matrices.js');

let serialosc = require('serialosc');
let device = null;
serialosc.on('device:add', deviceAddedEvent);
serialosc.start();
//ref: https://www.npmjs.com/package/serialosc


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
	device.on('delta', deltaEvent);
	device.on('key', keyEvent);
	device.on('tilt', tiltEvent);
	device.on('connected', connectedEvent);
	device.on('disconnected', disconnectedEvent);
}

function keyEvent(data) {
	//var l = data.s === 0 ? 0 : Math.floor(Math.random() * 15) + 1;
	//console.log(device.id + ' key x:' + data.x + ', y: ' + data.y + ', s:' + data.s + ', l: ' + l);
	//device.levelSet({x: data.x, y: data.y, l: l});
	var a = matrix.gridByCharAtLevel("A", 15);
	console.log(a);
	device.levelMap(0, 0, a);
	//device.set(data);
}
function tiltEvent(data) {
	console.log(device.id + ' tilt x:' + data.x + ', y:' + data.y);
}
function connectedEvent() {
	console.log(device.id + ' connected');
}
function disconnectedEvent() {
	console.log(device.id + ' disconnected');
}
function deltaEvent(data) {
	console.log(device.id + ' delta n:' + data.n + ', d:' + data.d);
}