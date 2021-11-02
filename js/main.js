/*'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/

let compteur=10;
let idSet;
let Button = document.getElementById('firing-button');
let ButtonArret = document.getElementById('arret-button');
let nombreEtoile = 0;
/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/
function compter(){
    document.querySelector('#billboard span').innerHTML=compteur;
    compteur--;
   idSet=setTimeout(compter,1000);
   
   if (compteur<0){

       clearTimeout(idSet);
       
   }
  

   document.getElementById("rocket").src="images/rocket2.gif";

   Button.classList.add("disabled");
   ButtonArret.classList.remove("disabled");


   if (compteur<0){
    document.getElementById("rocket").src="images/rocket3.gif";
    document.getElementById("rocket").classList.add('tookOff');
}
 }


 
function petitEtoile (nombreEtoile){
    for(let x=0;x<nombreEtoile;x++){
        let star=document.createElement("div");
        star.classList.add('star');        
        star.classList.add('tiny');
        document.body.appendChild(star);
        star.style.top=(Math.floor(Math.random()*1000))+"px";
        star.style.left=(Math.floor(Math.random()*1900))+"px";
    }
}

function normalEtoile(nombreEtoile){
    for(let x=0;x<nombreEtoile;x++){
        let star=document.createElement("div");
        star.classList.add('star');        
        star.classList.add('normal');
        document.body.appendChild(star);
        star.style.top=(Math.floor(Math.random()*1000))+"px";
        star.style.left=(Math.floor(Math.random()*1900))+"px";
    }
}

function grandEtoile(nombreEtoile){
    for(let x=0;x<nombreEtoile;x++){
        let star=document.createElement("div");
        star.classList.add('star');        
        star.classList.add('big');
        document.body.appendChild(star);
        star.style.top=(Math.floor(Math.random()*1000))+"px";
        star.style.left=(Math.floor(Math.random()*1900))+"px";
    }
}

/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/

   


Button.addEventListener('click',compter);

ButtonArret.addEventListener('click',function(){
    clearTimeout(idSet);
    document.getElementById("rocket").src="images/rocket1.png";
    Button.classList.remove("disabled");
    ButtonArret.classList.add("disabled");
    compteur=10;
    document.querySelector('#billboard span').innerHTML=compteur;
  
});


document.body.onload=petitEtoile(50);
document.body.onload=normalEtoile(50);
document.body.onload=grandEtoile(50);


