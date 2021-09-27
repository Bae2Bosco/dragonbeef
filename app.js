var ele = document.querySelector(".looper");


var sum = Number(prompt("How many attempts do you intend to hit the dragon?"));
for(var i=0; i<5; i++){
    sum=sum+1
}

ele.innerHTML=sum;
