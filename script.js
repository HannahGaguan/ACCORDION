document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion-item');
  
    accordionItems.forEach(function(item) {
      const header = item.querySelector('.accordion-header');
  
      header.addEventListener('click', function() {
        // Toggle the active class on the accordion item
        item.classList.toggle('active');
      });
    });
  });