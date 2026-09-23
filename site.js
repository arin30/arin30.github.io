const menuButton = document.querySelector('.menu');
const navLinks = document.querySelector('.links');

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', open);
  });

  const contactNav = [...navLinks.querySelectorAll('a')]
    .find(link => link.getAttribute('href') === '/contact.html');
  if (contactNav) {
    contactNav.href = '/about.html';
    contactNav.textContent = 'About';
  }
}

const training = [...document.querySelectorAll('.tool-group')]
  .find(group => group.querySelector('h2')?.textContent === 'Training');

if (training) {
  training.querySelector('p').textContent = 'I hold the ISC2 Certified in Cybersecurity credential, completed an API penetration testing course, and continue to work toward CompTIA Security+.';
  const cert = document.createElement('span');
  cert.className = 'tool';
  cert.textContent = 'ISC2 Certified in Cybersecurity (CC)';
  training.querySelector('.tool-list').prepend(cert);
}

const projects = [...document.querySelectorAll('.mini-project')];
const addReadLink = (title, href) => {
  const card = projects.find(project => project.querySelector('h2')?.textContent === title);
  if (!card) return;
  const link = document.createElement('a');
  link.className = 'plain-link';
  link.href = href;
  link.textContent = 'Read the technical breakdown →';
  card.append(link);
};

addReadLink('CinderProxy', '/cinderproxy-writeup.html');
addReadLink('Cloud hardening lab', '/aws-hardening-writeup.html');
