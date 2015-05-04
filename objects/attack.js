'use strict'; 

var Attack = (function() {

    var Attack = function(name, maxDamage) {
        this.name = name;
        this.maxDamage = maxDamage;
    };

    return Attack;
})();