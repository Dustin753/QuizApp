

document.addEventListener('DOMContentLoaded', () => {
  // add app code here 
  const startButton = document.getElementById("start-button");

  startButton.addEventListener('click', (e) => {
    const introOverlay = document.getElementById("intro-overlay");
    introOverlay.setAttribute("class", "hidden");
  })
})