document.addEventListener('DOMContentLoaded', function () {
  if (!document.querySelector('.menu-toggle')) {
    const menuToggle = document.createElement('div');
    menuToggle.classList.add('menu-toggle');

    for (let i = 0; i < 3; i++) {
      const bar = document.createElement('div');
      menuToggle.appendChild(bar);
    }

    const navbar = document.querySelector('.navbar');
    const navList = document.querySelector('ul');

    navbar.insertBefore(menuToggle, navList);

    menuToggle.addEventListener('click', function () {
      navList.classList.toggle('active');
      if (navList.classList.contains('active')) {
        navList.style.position = 'absolute';
        navList.style.right = '0';
        navList.style.top = '100%';
        navList.style.backgroundColor = 'rgba(18, 18, 18, 0.9)';
        navList.style.width = '200px';
      } else {
        navList.removeAttribute('style');
      }
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 568) {
        navList.classList.remove('active');
        navList.removeAttribute('style');
      }
    });
  }
});
//responding meny if pressed outside //
document.addEventListener('click', function (e) {
  
  const navMenu = document.querySelector('.navbar ul');
  const menuToggle = document.querySelector('.menu-toggle');

  
  if (
    navMenu.classList.contains('active') &&
    !navMenu.contains(e.target) &&
    !menuToggle.contains(e.target)
  ) {
    navMenu.classList.remove('active');
  }
});

    // Reference to the original container for the images
    const originalContainer = document.getElementById('stacked-container');
    
    // For each image, add a click event listener that toggles its expanded state
    document.querySelectorAll('.stacked-images .image').forEach(img => {
      img.addEventListener('click', function() {
        if (!this.classList.contains('expanded')) {
          // Add expanded class and move image to the body
          this.classList.add('expanded');
          document.body.appendChild(this);
        } else {
          // Remove expanded class and return image to its original container
          this.classList.remove('expanded');
          originalContainer.appendChild(this);
        }
      });
    });

    document.addEventListener("DOMContentLoaded", function () {
      const phoneLink = document.querySelector(".phone-popup");
    
      phoneLink.addEventListener("click", function (e) {
        e.preventDefault();
        alert("Call us at +47 123 45 678\n\nOr tap and hold to copy the number.");
      });
    });