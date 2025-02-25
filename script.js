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

const originalContainer = document.getElementById('stacked-container');

// For each image, add a click listener to toggle the expanded state
document.querySelectorAll('.stacked-images .image').forEach(img => {
  img.addEventListener('click', function() {
    if (!this.classList.contains('expanded')) {
      // Expand: remove image from its container and append to body
      this.classList.add('expanded');
      document.body.appendChild(this);
    } else {
      // Collapse: remove expanded state and return image to original container
      this.classList.remove('expanded');
      originalContainer.appendChild(this);
    }
  });
});

//const modal = document.getElementById("modal");
//const modalImg = document.getElementById("modal-img");
//const closeBtn = document.querySelector(".modal .close");

// Attach click event to all images within the stacked-images container
//document.querySelectorAll(".stacked-images .image").forEach(img => {//
 // img.addEventListener("click", function() {
  //  modal.style.display = "flex"; // Show modal as a flex container
    //modalImg.src = this.src;
   // modalImg.alt = this.alt;
 // });
//});

// Close modal when the close button is clicked
//closeBtn.addEventListener("click", function() {//
 // modal.style.display = "none";
//});

// Close modal when clicking outside the image
//modal.addEventListener("click", function(e) {
  //if (e.target === modal) {
  //  modal.style.display = "none";
// }
//})