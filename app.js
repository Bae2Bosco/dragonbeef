var ele = document.querySelector(".looper");


var slaying = true;
var youAtk = Math.floor(Math.random()*2);
var totalDamage = 0;
var playerHp = 5;
var dragonHp = 10;
var fire = 3;
var ice = 1;
var poison = 4;



let btn = document.createElement("button");
btn.innerHTML = "Fire";
while(slaying) {
    var yourDamage = Math.floor(Math.random() * 5 + 1);
    if (youAtk <= 5) {
        fire += yourDamage;
        ele.innerHTML = "You hit the dragon!";
        ele.innerHTML = "";
        dragonHp -= totalDamage
        if (dragonHp <= 0) {
            ele.innerHTML = "You have defeated the dragon!";
            slaying = false;
        } else {
            totalDamage = 0;
            youAtk = Math.floor(Math.random() * 2);
        }
    } else {
        totalDamage += yourDamage;
        ele.innerHTML = "The dragon hit you!";
        ele.innerHTML = "";
        if (playerHp <= 0) {
            ele.innerHTML = "The dragon has defeated you!";
            slaying = false;
        }else{
            totalDamage=0;
            youAtk = Math.floor(Math.random()*2);
        }
    }
}



var btn2 = document.createElement("button")
btn2.innerHTML = "Ice";
while(slaying) {
    var yourDamage2 = Math.floor(Math.random() * 5 + 1);
    if (youAtk <= 5) {
        ice += yourDamage2;
        ele.innerHTML = "You hit the dragon!";
        ele.innerHTML = "";
        dragonHp -= totalDamage
        if (dragonHp <= 0) {
            ele.innerHTML = "You have defeated the dragon!";
            slaying = false;
        } else {
            totalDamage = 0;
            youAtk = Math.floor(Math.random() * 2);
        }
    } else {
        totalDamage += yourDamage2;
        ele.innerHTML = "The dragon hit you!";
        ele.innerHTML = "";
        if (playerHp <= 0) {
            ele.innerHTML = "The dragon has defeated you!";
            slaying = false;
        }else{
            totalDamage=0;
            youAtk = Math.floor(Math.random()*2);
        }
    }
}

var btn3 = document.createElement("button");
btn3.innerHTML = "Poison";
while(slaying) {
    var yourDamage3 = Math.floor(Math.random() * 5 + 1);
    if (youAtk <= 5) {
        poison += yourDamage3;
        ele.innerHTML = "You hit the dragon!";
        ele.innerHTML = "";
        dragonHp -= totalDamage
        if (dragonHp <= 0) {
            ele.innerHTML = "You have defeated the dragon!";
            slaying = false;
        } else {
            totalDamage = 0;
            youAtk = Math.floor(Math.random() * 2);
        }
    } else {
        totalDamage += yourDamage3;
        ele.innerHTML = "The dragon hit you!";
        ele.innerHTML = "";
        if (playerHp <= 0) {
            ele.innerHTML = "The dragon has defeated you!";
            slaying = false;
        }else{
            totalDamage=0;
            youAtk = Math.floor(Math.random()*2);
        }
    }
}


document.body.appendChild(btn);
document.body.appendChild(btn2);
document.body.appendChild(btn3);
