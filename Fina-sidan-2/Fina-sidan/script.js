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


const banner = document.getElementById('scrollBanner');
  const items = Array.from(banner.children);
  const speed = 1; // px per frame
  const gap = 10;
 
  // Sätt initiala positioner i X-led (på rad)
  let positions = [];
  let x = 0;
  items.forEach(item => {
    positions.push({
      el: item,
      x: x
    });
    item.style.left = "0px"; // För absolut positionering
    x += item.offsetWidth + gap;
  });
 
  // Funktion för att hitta index för senaste (längst till höger)
  function getLastRightEdge() {
    return Math.max(...positions.map(pos => pos.x + pos.el.offsetWidth));
  }
 
  function animate() {
    positions.forEach(pos => {
      pos.x -= speed;
 
      // Om item helt lämnat vänsterkanten
      if (pos.x + pos.el.offsetWidth < 0) {
        // Flytta till direkt efter den just nu sist placerade
        const lastRight = getLastRightEdge();
        pos.x = lastRight + gap;
      }
 
      // Applicera position
      pos.el.style.transform = `translateX(${pos.x}px)`;
    });
    requestAnimationFrame(animate);
  }
 
  animate();






const banner2 = document.getElementById('scrollBanner2');
const items2 = Array.from(banner2.children);
const speed2 = 1; // px per frame
const gap2 = 10;

// Ensure the banner container has relative positioning for correct layout
banner2.style.position = "relative";

// Initialize positions for the items
let positions2 = [];
let x2 = 0;

items2.forEach(item2 => {
    // Set each item's initial position
    positions2.push({
        el: item2,
        x: x2
    });

    // Apply absolute positioning to each item
    item2.style.position = "absolute";
    item2.style.left = "0px"; // Set the initial left value
    x2 += item2.offsetWidth + gap2;
});

// Function to get the rightmost edge of the last item
function getLastRightEdge2() {
    return Math.max(...positions2.map(pos => pos.x + pos.el.offsetWidth));
}

// Animation function to scroll the items
function animate2() {
    positions2.forEach(pos2 => {
        // Move each item to the left
        pos2.x -= speed2;

        // If the item has completely exited the left edge of the screen
        if (pos2.x + pos2.el.offsetWidth < 0) {
            // Move it to the rightmost position
            const lastRight2 = getLastRightEdge2();
            pos2.x = lastRight2 + gap2;
        }

        // Apply the updated position
        pos2.el.style.transform = `translateX(${pos2.x}px)`;
    });

    // Request the next animation frame
    requestAnimationFrame(animate2);
}

// Start the animation
animate2();
