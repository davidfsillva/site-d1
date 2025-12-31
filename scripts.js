// Scroll suave para links do menu
const menuLinks = document.querySelectorAll('nav ul li a');

menuLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Validação simples do formulário
const form = document.querySelector('.agendamento-form');
form.addEventListener('submit', function(e){
  e.preventDefault();
  alert('Formulário enviado! Entraremos em contato em breve.');
  form.reset();
});