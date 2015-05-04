'use strict';

var Player = (function() {
    var Player = function(name) {
        this.name = name;
        this.life = 500;
    };

    Player.prototype.attack = function(player, armors) {
        
        var div = document.createElement("h3");
        div.style.color = '#fff';
        var jugada = document.getElementById("jugadas");

        var arr = this.faction.attacks;
        var i = Math.floor(Math.random() * arr.length);
        var arma = arr[i];

        if (arma.maxDamage > player.life) {
            var arma2 = arr[0];
            player.life -= arma2.maxDamage;
            arma = arr[0]
        } else {
            player.life -= arma.maxDamage;
        };

        console.log('ataco' + " " + this.name + " " + "con " + arma.name + ' y causo esto:' + " " + arma.maxDamage);
        div.innerHTML = 'Ataco' + " " + this.name + " " + "con " + arma.name + ' y causo esto:' + " " + arma.maxDamage + " de daño" + "<br>" + "Se jodio" + " " + player.name + " " + player.life;
        jugada.appendChild(div);
    };


    Player.prototype.setArmors = function(armors) {
        this.armors = armors;
        var life = this.life + this.armors.proctection
        console.log("Con su armadura:" + " " + this.armors.name + " " + "recibes una bonificacion:" + " " + this.armors.proctection + " " + "Tu vida ahora es :" + " " + life);
    };

    Player.prototype.damage = function(player) {
        console.log("se jodio" + this.name + " " + this.life)
    };

    Player.prototype.isDead = function(player) {
        return this.life <= 0;
    };

    Player.prototype.setFaction = function(faction) {
        this.faction = faction;
    };

    return Player;

})();