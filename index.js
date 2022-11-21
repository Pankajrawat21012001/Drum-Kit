
//ADD EVENT LISTENER to BUTTON ON CLICKED
var drumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < drumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var key = this.innerHTML;
    switch_key_passing(key);
    addAnimationToButton(key);
  });
}

//ADD EVENT LISTENER to FULL BODY ON KEYBOARD PRESS
document.addEventListener("keypress",function(event){
  switch_key_passing(event.key);
  addAnimationToButton(event.key);
});


// SWITCH function CALLED TO CHECK KEY AND PLAY
function switch_key_passing(key){
  switch (key) {
    case 'w':
      var tom1 =new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case 'a':
      var tom2 =new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case 's':
      var tom3 =new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case 'd':
      var tom4 =new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case 'j':
      var snare =new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case 'k':
      var crash =new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case 'l':
      var kickBass =new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;

    default:
      // console.log("SOMETHING ELSE IS CLICKED");
  }
}


// ADDING ANIMATION TO DRUMS
function addAnimationToButton(key){
  try{
    var activeButton = document.querySelector("."+key);
    activeButton.classList.add("pressed");
    setTimeout(function(){
      activeButton.classList.remove("pressed");
    },200);
  } catch{
  }
}
