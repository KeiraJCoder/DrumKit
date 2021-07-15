
document.addEventListener("keydown", function(event) {
  console.log(event.key);
  makeSound(event.key);
  animate(event.key);
});


let button = document.getElementsByClassName("drum");

for (let i = 0; i <= button.length; i++) {
  button[i].addEventListener("click", function() {
    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    animate(buttonInnerHTML);
  });
}

function makeSound(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      let bass = new Audio("sounds/kick-bass.mp3");
      bass.play();
      break;
    case "l":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    default:
      alert("Attention, wrong button clicked!");
      break;
  }
}

function animate(key) {
  let activeButton = document.querySelector("." + key);
  activeButton.classList.toggle("pressed");

  setTimeout(function(){activeButton.classList.toggle("pressed");}, 200);
}
