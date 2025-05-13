document.addEventListener('DOMContentLoaded', () => {
    // Get references to our HTML elements (including new ones)
    const dynamicTextElement = document.getElementById('dynamicText');
    const styleButton = document.getElementById('styleButton');
    const elementContainer = document.getElementById('elementContainer');
    const addElementButton = document.getElementById('addElementButton');
    const removeElementButton = document.getElementById('removeElementButton');
    const animateButton = document.getElementById('animateButton');
    const usernameInput = document.getElementById('username');
    const savePreferenceButton = document.getElementById('savePreference');
    const greetingElement = document.getElementById('greeting');

    // --- CSS Transitions ---
    // We've already added a CSS transition to #dynamicText in style.css
    // When the 'styled' class is toggled, the color change will be smooth.

    // --- CSS Animation ---
    function triggerAnimation() {
        animateButton.classList.add('animate');
        // Remove the animation class after it runs once (optional, for one-time trigger)
        setTimeout(() => {
            animateButton.classList.remove('animate');
        }, 1000); // Duration of the animation
    }

    animateButton.addEventListener('click', triggerAnimation);

    // --- Local Storage for User Preferences ---
    function saveUsername() {
        const username = usernameInput.value;
        localStorage.setItem('username', username);
        displayGreeting();
    }

    function getUsername() {
        return localStorage.getItem('username');
    }

    function displayGreeting() {
        const storedUsername = getUsername();
        if (storedUsername) {
            greetingElement.textContent = `Hello, ${storedUsername}!`;
        } else {
            greetingElement.textContent = '';
        }
    }

    // Load and display any saved username on page load
    displayGreeting();
    savePreferenceButton.addEventListener('click', saveUsername);

    // --- Existing Functions (for completeness) ---
    function changeText() {
        dynamicTextElement.textContent = 'The text has been dynamically updated!';
    }

    function changeStyle() {
        dynamicTextElement.classList.toggle('styled');
    }

    function addElement() {
        const newParagraph = document.createElement('p');
        newParagraph.textContent = 'A new paragraph was added!';
        newParagraph.classList.add('newElement');
        elementContainer.appendChild(newParagraph);
    }

    function removeElement() {
        const elementToRemove = document.querySelector('.removable');
        if (elementToRemove) {
            elementToRemove.remove();
        } else {
            alert('No more removable elements!');
        }
    }

    setTimeout(changeText, 2000);
    styleButton.addEventListener('click', changeStyle);
    addElementButton.addEventListener('click', addElement);
    removeElementButton.addEventListener('click', removeElement);
});