document.addEventListener('DOMContentLoaded', function () {
  // Handler when the DOM is fully loaded
  let buttons = document.querySelectorAll(
    '#work_btn, #skills_btn, #contact_btn',
  );
  buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      // We give the navbar button the active class to style it later
      const sectionId = btn.id.split('_')[0];
      buttons.forEach((btn) => btn.classList.remove('active'));
      btn.classList.add('active');

      // Previous active section's got to fade out
      let activeSection = document.querySelector('#active_section');
      activeSection.classList.add('animate__animated', 'animate__fadeOut');
      activeSection.classList.remove('active_section');
      setTimeout(() => {
        activeSection.classList.remove('animate__fadeOut', 'animate__fadeIn');
      }, 1000);

      // Current active section's got to fade in
      let newActiveSection = document.getElementById(sectionId);
      newActiveSection.classList.add(
        'active_section',
        'animate__animated',
        'animate__fadeIn',
      );
      setTimeout(() => {
        newActiveSection.classList.remove(
          'animate__fadeOut',
          'animate__fadeIn',
        );
      }, 1000);
      newActiveSection.scrollIntoView();
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
  let activeSection = document.getElementsByClassName('active_section')[0];
  activeSection.classList.add('animate__animated', 'animate__fadeOut');
  activeSection.classList.remove('active_section');
  setTimeout(() => {
    activeSection.classList.remove('animate__fadeOut', 'animate__fadeIn');
  }, 1000);

  // Current active section's got to fade in
  let newActiveSection = document.getElementById('home');
  newActiveSection.classList.add(
    'active_section',
    'animate__animated',
    'animate__fadeIn',
  );
  setTimeout(() => {
    newActiveSection.classList.remove('animate__fadeOut', 'animate__fadeIn');
  }, 1000);
  newActiveSection.scrollIntoView();
}

function goLeft(el) {

  const element = document.querySelector('.project.active')
  element.classList.remove('active')
  const previousElement = element.previousElementSibling
  if (previousElement) {
    previousElement.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center'
    })
    previousElement.classList.add('active')
  } else {
    let parent = document.getElementById('work-container')
    let firstElement = parent.lastElementChild
    firstElement.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center'
    })
    firstElement.classList.add('active')
  }
}

function goRight(el) {
  const element = document.querySelector('.project.active')
  element.classList.remove('active')
  const nextElement = element.nextElementSibling
  if (nextElement) {
    nextElement.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center'
    })
    nextElement.classList.add('active')
  } else {
    let parent = document.getElementById('work-container')
    let firstElement = parent.firstElementChild
    firstElement.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center'
    })
    firstElement.classList.add('active')
  }
}