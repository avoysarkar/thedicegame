var randomNumber1 = 1+Math.floor(Math.random()*6); 
var randomNumber2 = 1+Math.floor(Math.random()*6);  
var randomimg1 = "images/dice"+randomNumber1+".png";  
var randomimg2 = "images/dice"+randomNumber2+".png";
document.querySelector(".img1").setAttribute("src",randomimg1);
document.querySelector(".img2").setAttribute("src",randomimg2);
if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}