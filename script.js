// script.js
document.addEventListener('DOMContentLoaded', () => {
  const contatoLink = document.querySelector('nav a[href="#contato"]');
  const iconesRedes = document.querySelectorAll('.redes a i');

  contatoLink.addEventListener('click', function(event) {
    event.preventDefault();
    iconesRedes.forEach(icone => icone.classList.add('piscar'));
    setTimeout(() => {
      iconesRedes.forEach(icone => icone.classList.remove('piscar'));
    }, 3000);
  });
});
