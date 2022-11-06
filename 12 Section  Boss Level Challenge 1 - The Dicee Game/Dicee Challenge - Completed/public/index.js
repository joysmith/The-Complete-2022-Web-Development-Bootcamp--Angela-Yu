// SECTION: PLAYER 1 DICE---------------------------------
// Generate random number between 1-6
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

// generate random dice-image string name using concetanation
var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

// generate img-element src-attribute string, including images/folder by concenation
var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

// get all the  img-tag from DOM in form of Array data model
var image1 = document.querySelectorAll("img")[0];

// Change image-element src attribute
image1.setAttribute("src", randomImageSource);

// SECTION: PLAYER 2 DICE---------------------------------
// Generate random number between 1-6
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// select random dice-image from folder using concetanation
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

// doing in single line
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// SECTION: PLAYER WINNER---------------------------------
//If player 1 wins
if (randomNumber1 > randomNumber2) {
  // changing h1 tag innerHTML
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  // changing h1 tag innerHTML
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  // changing h1 tag innerHTML
  document.querySelector("h1").innerHTML = "Draw!";
}
