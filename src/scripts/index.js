document.addEventListener('DOMContentLoaded', function () {
  // Handler when the DOM is fully loaded
  let buttons = document.querySelectorAll(
    '#home_btn, #work_btn, #skills_btn, #contact_btn',
  );
  buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      // We give the navbar button the active class to style it later
      const sectionId = btn.id.split('_')[0];
      buttons.forEach((btn) => btn.classList.remove('active'));
      btn.classList.add('active');

      // We remove the active class navbar in case of mobile view
      let navbar = document.getElementById('main-navbar');
      navbar.classList.remove('active')

      // Current active section's got to fade in
      let newActiveSection = document.getElementById(sectionId);
      newActiveSection.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
    });
  });
});

function goToHome() {
  // Deactivate all navbar buttons
  let buttons = document.querySelectorAll(
    '#work_btn, #skills_btn, #contact_btn',
  );
  buttons.forEach((btn) => btn.classList.remove('active'));

  // Previous active section's got to fade out
  let home = document.getElementById('home')
  home.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'center',
  })
}

function goLeft(el) {
  const element = document.querySelector('.project.active');
  element.classList.remove('active');
  const previousElement = element.previousElementSibling;
  if (previousElement) {
    previousElement.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
    previousElement.classList.add('active');
  } else {
    let parent = document.getElementById('work-container');
    let firstElement = parent.lastElementChild;
    firstElement.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
    firstElement.classList.add('active');
  }
}

function goRight(el) {
  const element = document.querySelector('.project.active');
  element.classList.remove('active');
  const nextElement = element.nextElementSibling;
  if (nextElement) {
    nextElement.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
    nextElement.classList.add('active');
  } else {
    let parent = document.getElementById('work-container');
    let firstElement = parent.firstElementChild;
    firstElement.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
    firstElement.classList.add('active');
  }
}

function openWhatsappMessage() {
  const url = `https://api.whatsapp.com/send?phone=+54 9 3512 76-6171`;
  window.open(url, '_blank');
}


function toggleNavbar() {
  let navbar = document.getElementById('main-navbar')
  navbar.classList.toggle('active')
}