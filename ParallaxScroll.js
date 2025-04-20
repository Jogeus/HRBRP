// Handle the parallax scroll effect for the background video
window.addEventListener('scroll', function() {
  const video = document.querySelector('.bg-video');
  const scrollPosition = window.pageYOffset; // Get scroll position
  
  // Adjust video movement: slower than the page scroll
  video.style.transform = `translateY(${scrollPosition * 0.5}px)`;
});
