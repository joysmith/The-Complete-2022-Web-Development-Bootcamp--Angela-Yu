//SECTION: DETECTING MOUSE CLICK PRESS
// Get length by target all of the element/object that have a selector of .drum i.e a class4
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
// start        stop                     step
for (var i = 0; i < numberOfDrumButtons; i++) {
  // Add event listener to all buttons inside array-data model and do following ...
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // get the button name that trigger the event, that we wrote in index.html file
    // "this" is used for button obj
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  });
}

//SECTION: DETECTING KEYBOARD KEY PRESS
document.addEventListener("keypress", function (event) {
  //event.key: to know which key is pressed using event-obj
  makeSound(event.key);

  buttonAnimation(event.key);
});

//SECTION: Play instrument sounds
function makeSound(key) {
  switch (key) {
    case "w":
      // create an audio obj
      // this will create a html audio media element, behind the scene
      var tom1 = new Audio("sounds/tom-1.mp3");
      // play sound track
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(key);
  }
}

function buttonAnimation(currentKey) {
  // get the button by class selector through concenation: "." + currentKey
  var activeButton = document.querySelector("." + currentKey);

  // How to add new "pressed" class-selector to button inside classlist
  activeButton.classList.add("pressed");

  // How to remove "pressed" class-selector from button after few second inside classlist
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
