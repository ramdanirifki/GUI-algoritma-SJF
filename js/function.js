const Function = {
  navLinks (button, elementSatu, elementDua) {
    button.addEventListener('click', function () {
      elementSatu.classList.remove('hidden');
      elementDua.classList.add('hidden');
    })
  },

  buttonActive (button1, button2) {
    button1.addEventListener('click', function () {
      button1.classList.add('active');
      button2.classList.remove('active');
    })
  },

  navbarScroll () {
    window.addEventListener('scroll', function () {
      console.log(window.scrollY);
      var navbar = document.querySelector('.navbar');
      if (window.scrollY > 0) {
        navbar.classList.remove('navbar-transparent');
       } else {
        navbar.classList.add('navbar-transparent');
      }
    });
  }
}

export default Function;