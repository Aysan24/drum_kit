// Function to play the sound and add the visual effect
function playSound(event) {
    // Get the audio element that matches the key code
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const button = document.querySelector(`.Button[data-key="${event.keyCode}"]`);
    
    // If no matching audio element is found, return
    if (!audio) return;

    // Rewind the audio to the start so it can be played repeatedly
    audio.currentTime = 0;
    audio.play();

    // Add the "playing" class to the button for the visual effect
    button.classList.add("playing");
}

// Function to remove the visual effect after the transition
function removeTransition(event) {
    if (event.propertyName !== "transform") return; // Skip if the property isn't "transform"
    this.classList.remove("playing"); // Remove the "playing" class
}

// Add event listener for keydown to play the sound
window.addEventListener("keydown", playSound);

// Select all buttons and add an event listener for transitionend to remove the visual effect
const buttons = document.querySelectorAll(".Button");
buttons.forEach(button => button.addEventListener("transitionend", removeTransition));
