'use strict';


function myFunction() {
    var arma1 = document.getElementById("arm1");
    var arma2 = document.getElementById("arm2");

    var arma3 = document.getElementById("arm3");
    var arma4 = document.getElementById("arm4");

    var x = document.getElementById("mySelect").selectedIndex;
    var y = document.getElementById("Select2").selectedIndex;


    switch (x) {
        case 0:
            arma1.innerHTML = "Selecciona una faction";
            arma2.innerHTML = "Selecciona una faction"; 
            break;

        case 1:
            arma1.innerHTML = "Normal Ninja";
            arma2.innerHTML = "Especial Ninja";
             document.getElementById('img').src = 'http://cdn2.hubspot.net/hub/245562/file-353545289-png/Blog_Images/ninja2.png';
            break;

        case 2:
            arma1.innerHTML = "Normal Dinosaurio";
            arma2.innerHTML = "Especial Dinosaurio";
             document.getElementById('img').src = 'http://www.loserpower.org/wp-content/uploads/2014/02/tumblr_mup3qzOPsX1rk0k2jo1_5001.gif';
            break;
    }

    switch (y) {
        case 0:
            arma3.innerHTML = "Selecciona una faction";
            arma4.innerHTML = "Selecciona una faction";
            break;

        case 1:
            arma3.innerHTML = "Normal Ninja";
            arma4.innerHTML = "Especial Ninja";
            document.getElementById('img2').src = 'http://cdn2.hubspot.net/hub/245562/file-353545289-png/Blog_Images/ninja2.png';
            break;

        case 2:
            arma3.innerHTML = "Normal Dinosaurio";
            arma4.innerHTML = "Especial Dinosaurio";
            document.getElementById('img2').src = 'http://www.loserpower.org/wp-content/uploads/2014/02/tumblr_mup3qzOPsX1rk0k2jo1_5001.gif';
            break;
    }

};
var num = 0;
var num2 = 0;
function game() {

    var x = document.getElementById("mySelect").selectedIndex;
    var y = document.getElementById("Select2").selectedIndex;

    var z = document.getElementById("myArms").selectedIndex;
    var b = document.getElementById("myArms2").selectedIndex;

    if (document.getElementsByTagName("option")[x].value == 3 || document.getElementsByTagName("option")[y].value == 3) {
        alert("Debe seleccionar una faction");
    } else {
        var name_player1 = document.getElementById("p1").value;
        var name_player2 = document.getElementById("p2").value;

        var faction1 = document.getElementsByTagName("option")[x].value;
        var faction2 = document.getElementsByTagName("option")[y].value;

        var armor1 = document.getElementsByTagName("option")[z].value;
        var armor2 = document.getElementsByTagName("option")[b].value;

        var player1 = new Player(name_player1);
        var player2 = new Player(name_player2);

        player1.setFaction(settings.factions[faction1]);
        player2.setFaction(settings.factions[faction2]);

        if (x == 1) {
            player1.life += settings.armorsninja[armor1].proctection
        }else{
             player1.life += settings.armorsdino[armor1].proctection
        };

        if (y == 1) {
            player2.life += settings.armorsninja[armor2].proctection
        }else{
             player2.life += settings.armorsdino[armor2].proctection
        };

        while (!player2.isDead() && !player1.isDead()) {

            player2.attack(player1)
            player1.attack(player2)


        };

        var ganador_num = document.getElementById("ganador_num");
         var ganador_num2 = document.getElementById("ganador_num2");

        var ganador = document.getElementById("ganador");
        var perderdor = document.getElementById("perdedor");
        var vida_ganador = document.getElementById("vida_ganador");
        var vida_perdedor = document.getElementById("vida_perdedor");

        if (player1.isDead()) {
            num += 1;
            ganador.innerHTML = player2.name
            vida_ganador.innerHTML = player2.life;

            perdedor.innerHTML = player1.name;
            vida_perdedor.innerHTML = player1.life;
            
            ganador_num.innerHTML = num;
        } else {
            num2 += 1;
            ganador.innerHTML = player1.name
            vida_ganador.innerHTML = player1.life;

            perdedor.innerHTML = player2.name;
            vida_perdedor.innerHTML = player2.life;
            ganador_num2.innerHTML = num2;

        };
    };

};
