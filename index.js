// Event listener for keyboard press
document.addEventListener("keydown", function(event) {
  console.log(event.key); // Logs the pressed key to the console
  makeSound(event.key); // Calls the makeSound function with the pressed key
  animate(event.key); // Calls the animate function to show a visual effect for the key press
});

// Select all elements with the class 'drum'
let button = document.getElementsByClassName("drum");

// Loop through all drum buttons to add click event listeners
for (let i = 0; i <= button.length; i++) {
  // Add a click event listener to each drum button
  button[i].addEventListener("click", function() {
    let buttonInnerHTML = this.innerHTML; // Get the inner HTML of the clicked button
    makeSound(buttonInnerHTML); // Call makeSound with the button's inner HTML
    animate(buttonInnerHTML); // Call animate to show visual effect for the button click
  });
}

// Function to play sound based on the key or button clicked
function makeSound(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3"); // Load tom-1 sound
      tom1.play(); // Play tom-1 sound
      break;
    // Similar case blocks for other keys 'a', 's', 'd', 'j', 'k', 'l'
    // Each case loads and plays a different sound file
    default:
      alert("Attention, wrong button clicked!"); // Alert if an unrecognized key is pressed
      break;
  }
}

// Function to add animation to the pressed key or clicked button
function animate(key) {
  let activeButton = document.querySelector("." + key); // Select the button with the class corresponding to the key
  activeButton.classList.toggle("pressed"); // Toggle the 'pressed' class to add visual effect

  // Remove the 'pressed' class after 200 milliseconds to make the effect temporary
  setTimeout(function(){activeButton.classList.toggle("pressed");}, 200);
}
