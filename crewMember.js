class CrewMember {

constructor(position, currentShip = null) {
	this.position = position
	this.currentShip = this.ship(currentShip)
}


ship(currentShip) {
	if (currentShip === null) {
		return("Looking for a Rig")
	} else {
		return currentShip
	}
}

engageWarpDrive() {
	if (this.currentShip === "Looking for a Rig" || this.position !== "Pilot") {
		return("had no effect")
	} else {
		this.currentShip.warpDrive = "engaged!"
	}
}

setsInvisibility() {
	if (this.currentShip === "Looking for a Rig" || this.position !== "Defender") {
		return("had no effect")
	} else {
		this.currentShip.cloaked = true
	}
}

chargePhasers() {
	if (this.currentShip === "Looking for a Rig" || this.position !== "Gunner") {
		return("had no effect")
	} else {
		this.currentShip.phasersCharge = "charged!"
	}
}




}
