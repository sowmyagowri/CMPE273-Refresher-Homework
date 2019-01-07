function deviceRemote (device) {
	this.device = device;
}

deviceRemote.prototype.increaseVolume = function () {
	console.log("Volume Increased");
}

deviceRemote.prototype.decreaseVolume = function () {
	console.log("Volume Decreased");
}

var soundSystem = new deviceRemote("Bose");
soundSystem.increaseVolume();
soundSystem.decreaseVolume();