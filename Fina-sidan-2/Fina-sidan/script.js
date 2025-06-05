// Add event listeners to buttons for hover and click sounds
const buttons = document.querySelectorAll('.fancy-button');

buttons.forEach(button => {
    const hoverSound = new Audio(button.dataset.hoverSound);
    const clickSound = new Audio(button.dataset.clickSound);

    button.addEventListener('mouseenter', () => {
        hoverSound.currentTime = 0; // Reset sound
        hoverSound.play();
    });

    button.addEventListener('click', () => {
        clickSound.currentTime = 0; // Reset sound
        clickSound.play();
    });
});
