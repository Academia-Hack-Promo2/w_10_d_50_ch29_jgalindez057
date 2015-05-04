'use strict';

var Faction = (function () {

	var Faction = function (type) {
		this.type = type;
		this.attacks = [];
	};

	Faction.prototype.addAttack = function (attack) {
		this.attacks.push(attack);
	};

	return Faction;

})();