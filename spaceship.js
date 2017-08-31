class Spaceship {
	constructor(name, crewMembers, phasers, shields, cloaked = false, warpDrive = "disengaged", phasersCharge = "uncharged") {
		this.name = name
		this.phasers = phasers
		this.shields = shields
		this.cloaked = cloaked
		this.warpDrive = warpDrive
		this.crewMembers = this.crew(crewMembers)
		this.phasersCharge = phasersCharge
		this.docked = this.docked(crewMembers)
	}

	crew(crewMembers) {
		if (crewMembers.length !== 0) {
		crewMembers.forEach (crewMember => crewMember.currentShip = this)
	}
	}

	docked(crewMembers) {
		if (crewMembers.length === 0) {
			return true
		} else {return false}
	}

}
