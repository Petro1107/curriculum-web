let infoSection = document.querySelectorAll('.info-section');
let languagesContent = document.getElementById('languages-content');
let educactionContent = document.getElementById('education-content');
let jobContent = document.getElementById('job-experience-content');
let careerContent = document.getElementById('career-goals-content');
let referencesContent = document.getElementById('references-content');

infoSection.forEach((infoSection) => {
  infoSection.addEventListener('click', (e) => {
    // console.log(e.target.classList);

    if (e.target.classList.contains('languages-click')) {
      languagesContent.style.display = 'block';
      if (languagesContent.classList.contains('active')) {
        languagesContent.style.display = 'none';
      }
      languagesContent.classList.toggle('active');
    } else if (e.target.classList.contains('education-click')) {
      educactionContent.style.display = 'block';
      if (educactionContent.classList.contains('active')) {
        educactionContent.style.display = 'none';
      }
      educactionContent.classList.toggle('active');
    } else if (e.target.classList.contains('job-click')) {
      jobContent.style.display = 'block';
      if (jobContent.classList.contains('active')) {
        jobContent.style.display = 'none';
      }
      jobContent.classList.toggle('active');
    } else if (e.target.classList.contains('career-click')) {
      careerContent.style.display = 'block';
      if (careerContent.classList.contains('active')) {
        careerContent.style.display = 'none';
      }
      careerContent.classList.toggle('active');
    } else if (e.target.classList.contains('references-click')) {
      referencesContent.style.display = 'block';
      if (referencesContent.classList.contains('active')) {
        referencesContent.style.display = 'none';
      }
      referencesContent.classList.toggle('active');
    }
    console.log(e.target);
    e.stopPropagation;
  });
});

/* DARKLIGHTMODE */

let btnMode = document.querySelector('.btn-mode');
let contactStyle = document.querySelector('.contact');
let contactIcon = document.querySelectorAll('.contact-icon');
let contactName = document.querySelector('.contact-name');
let contactTitle = document.querySelector('.contact-title');
let contactItems = document.querySelectorAll('.contact-info li');
let profileLinks = document.querySelectorAll('.profile-links li');
let infoStyle = document.querySelector('.info');
let infoTitle = document.querySelectorAll('.info-section-title');
let infoIcon = document.querySelectorAll('.info-icon');

btnMode.addEventListener('click', () => {
  contactStyle.classList.toggle('light');
  contactName.classList.toggle('light');
  contactTitle.classList.toggle('light');
  contactItems.forEach((element) => {
    element.classList.toggle('light');
  });
  contactIcon.forEach((element) => {
    element.classList.toggle('light');
  });
  profileLinks.forEach((link) => {
    link.classList.toggle('light');
  });
  infoStyle.classList.toggle('light');
  infoSection.forEach((section) => {
    section.classList.toggle('light');
  });
  infoTitle.forEach((title) => {
    title.classList.toggle('light');
  });
  infoIcon.forEach((icon) => {
    icon.classList.toggle('light');
  });

  btnMode.classList.toggle('light');

  if (btnMode.classList.contains('light')) {
    btnMode.innerHTML = 'lightMode()';
  } else {
    btnMode.innerHTML = 'darkMode()';
  }
});
