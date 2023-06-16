
let sum=0;
let array=[];
let blackJack=false;
let isAlive=false;
let message="";
let messageEl=document.getElementById("msg");
let sumEl=document.querySelector("#sum");
let cardsEl=document.querySelector("#cards");
let player={
    name:"Player_1",credits:"200 points"}
let playerDetails=document.getElementById('details');
playerDetails.textContent=player.name+" : "+player.credits;

function getRandomCard(){
 let randomCard= Math.floor(Math.random()*13)+1; 
 
 if(randomCard > 10){  // King,Queen,Jack are valued to 10 which are at 11th 12th and 13th place respectively
    return 10;      
 }
 else if (randomCard===1){ //ace card is 1st card but has value 11 so returning 11.
   return 11;
 }
 else{
    return randomCard;
 }
}

function startGame(){
    isAlive=true;
    let firstCard=getRandomCard(),secondcard=getRandomCard();
    array=[firstCard,secondcard];
    sum=firstCard+secondcard;
    ResumeGame();
}
function ResumeGame(){
   
    cardsEl.textContent="CARDS: ";
    for(let i=0;i<array.length;i++){
        cardsEl.textContent+=array[i]+" ";
 }
 sumEl.textContent="SUM: "+sum;

if(sum<=20){
    message="do you wan to draw a new card?";
}
else if(sum===21){
    message="wohoo! you have got the blackjack";
    blackJack=true;
}
else{
    message="ooohps! you are out the game";
    isAlive=false;
   
}

messageEl.textContent=message;

}



function newCard(){
    
    if(isAlive==true&&blackJack==false){
       let newcard=getRandomCard(); 
       sum=sum+newcard;
       array.push(newcard);
  
       ResumeGame();
    }
}