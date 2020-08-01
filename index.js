var randomnumber1 = Math.floor(Math.random() * 6) + 1;
var randomsrc = "images/dice"+randomnumber1+".png";

document.querySelectorAll("img")[0].setAttribute("src", randomsrc);

var randomnumber2 = Math.floor(Math.random() * 6) + 1;
var randomsrc2 = "images/dice"+randomnumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomsrc2);

if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="player 1 wins";
}
else if(randomnumber2>randomnumber1){
    document.querySelector("h1").innerHTML="player 2 wins";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}