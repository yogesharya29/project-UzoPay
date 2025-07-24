// This file contains the JavaScript code for the prototype. 
// It handles interactivity, event listeners, and any dynamic behavior required by the prototype.

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('myButton');
    const output = document.getElementById('output');

    button.addEventListener('click', () => {
        output.textContent = 'Button clicked! This is a dynamic message.';
    });
});