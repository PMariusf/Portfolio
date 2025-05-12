   // simple mobile menu toggle
   document.querySelector('.menu-toggle')
   .addEventListener('click', () => {
     document.querySelector('.navbar nav ul')
       .classList.toggle('active');
   });