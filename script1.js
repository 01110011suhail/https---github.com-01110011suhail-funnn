document.querySelectorAll('.room-container').forEach((container) => {
  const scrollLeftButton = container.querySelector('.scroll-left');
  const scrollRightButton = container.querySelector('.scroll-right');
  const roomListing = container.querySelector('.room-listing');

  scrollLeftButton.addEventListener('click', () => {
    roomListing.scrollBy({
      left: -300, // Adjust the scroll amount as needed
      behavior: 'smooth',
    });
  });

  scrollRightButton.addEventListener('click', () => {
    roomListing.scrollBy({
      left: 300, // Adjust the scroll amount as needed
      behavior: 'smooth',
    });
  });
});