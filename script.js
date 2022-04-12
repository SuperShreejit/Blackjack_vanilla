let sum=0;
let cards = [];
let msg="";

// starts the game
function start()
{ 
  if(cards.length<2)
  {
    document.getElementById('play').disabled=true;  
    document.getElementById('draw').disabled=false;
    initiate();
  }  
}

// draws the first set of cards for game start
function initiate(){
  let one= Math.floor(Math.random()*10)+2;
  let two= Math.floor(Math.random()*10)+2;
  cards.push(one,two);
  checkSumin();
}

// draws a random card from 2 to 11
function draw(){
  let one =0;
  one= Math.floor(Math.random()*10)+2;
  cards.push(one);
  checkSum();
}

// checks for sum of card values and decides the game
function checkSum()
{
  // sums up the card stack value
  sum=0;
  for(let i = 0 ; i < cards.length; i++ )
  {
    sum += cards[i];
  }
  // game decision
  if (sum<21)
  {
    msg ="Do you want to draw again?";
    show();
  }
  else if (sum ===21)
  {
    document.getElementById('draw').disabled=true;
    msg="BlackJack! You've won! Yay!";
    show();  
  }
  else if(sum > 21)
  {
    document.getElementById('draw').disabled=true;
    msg="Oh no! You've lost!";
    show();  
  }
}

// checks the intial game stack and decides
function checkSumin()
{
  // sums up the card stack value
  sum=0;
  for(let i = 0 ; i < cards.length; i++ )
  {
    sum += cards[i];
  }
  // game decision
  if (sum<21)
  {
    msg ="Do you want to draw again?";
    showin();
  }
  else if (sum ===21)
  {
    document.getElementById('draw').disabled=true;
    msg="BlackJack! You've won! Yay!";
    showin();  
  }
  else if(sum > 21)
  {
    document.getElementById('draw').disabled=true;
    msg="Oh no! You've lost!";
    showin();  
  }
}

// displays the initial stack
function showin() 
{
  let stack = document.getElementById('card');
  document.getElementById('total').textContent= "Sum: "+sum;  
  document.getElementById('result').textContent= msg;
  stack.textContent = stack.textContent + " " + cards['0'];   
  stack.textContent = stack.textContent + " - " + cards['1'];   
}

// displays game proceedings
function show()
{
    let stack = document.getElementById('card');

    document.getElementById('result').textContent= msg;    
    stack.textContent = stack.textContent + " - " + cards[cards.length-1];
    document.getElementById('total').textContent= "Sum: "+sum;      
}

// resets game
function reset(){
  cards=[];
  sum=0;
  document.getElementById('play').disabled=false;
  document.getElementById('draw').disabled=true;  
  document.getElementById('result').textContent= "";
  document.getElementById('card').textContent= "Cards:";
  document.getElementById('total').textContent= "Sum:";
}