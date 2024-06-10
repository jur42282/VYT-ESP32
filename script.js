function hideSidebar() {
    const sidebar =document.querySelector('.sidebar');
    sidebar.style.display = 'none';
  }
  
  function showSidebar() {
    const sidebar =document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
  }

  window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav'); // Select the nav element
    if (window.scrollY > 50) { // Check if the page is scrolled down more than 50 pixels
        nav.classList.add('blur-background'); // Add the blur effect
    } else {
        nav.classList.remove('blur-background'); // Remove the blur effect if scrolled back up
    }
});