"use strict";

var settings = (function() {

    var armor1 = new Armors('Simple Ninja', 50);
    var armor2 = new Armors('Especial Ninja', 100);

    var armor3 = new Armors('Simple Dinosaurio', 40);
    var armor4 = new Armors('Especial Dinosaurio', 110);

    var attack1 = new Attack('Dragon punch', 15);
    var attack2 = new Attack('Bruce lee kick', 90);
    var attack3 = new Attack('Chuck norris stare', 100);

    var ninja = new Faction('ninja');

    ninja.addAttack(attack1);
    ninja.addAttack(attack2);
    ninja.addAttack(attack3);

    var attack0 = new Attack('No attack', 5);
    var attack4 = new Attack('Bite', 50);
    var attack5 = new Attack('Step', 100);
    var attack6 = new Attack('Tail whipe', 70);

    var dinosaur = new Faction('dinosaur');

    dinosaur.addAttack(attack0);
    dinosaur.addAttack(attack4);
    dinosaur.addAttack(attack5);
    dinosaur.addAttack(attack6);


    return {
        factions: [ninja, dinosaur],
        armorsninja: [armor1, armor2],
        armorsdino: [armor3, armor4]
    };

})();