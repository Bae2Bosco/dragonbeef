var ele = document.querySelector(".looper");


var slaying = true;
var youAtk = Math.floor(Math.random()*2);
var yourDamage = Math.floor(Math.random()*5+1);
var totalDamage = 0;


while(slaying){
    var question = (prompt("How many hit you attempting to hit the dragon?"));
    if (question <=5){
        ele.innerHTML="You hit the dragon!";
        totalDamage += yourDamage;
        if (totalDamage >= 9){
           ele.innerHTML="You have defeated the dragon!";
            slaying = false;
        }else {
            youAtk = Math.floor(Math.random()*2);
        }
    }else{
        if (yourDamage >=4)
            ele.innerHTML="The dragon has defeated you!";
    }
    slaying = false;
}

