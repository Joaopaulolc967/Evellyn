// script.js

// Função para criar um efeito de rolagem suave ao clicar nos links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animação nas imagens da galeria ao entrar na visualização
const galleryImages = document.querySelectorAll('.small-image');

galleryImages.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.1)'; // Aumenta a imagem ao passar o mouse
        image.style.transition = 'transform 0.3s'; // Efeito suave
    });

    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)'; // Volta ao tamanho original
    });
});


// Definindo a data alvo para a contagem regressiva (formato: Ano/Mês/Dia)
const targetDate = new Date("2025-10-09T00:00:00").getTime();

// Função de contagem regressiva
const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  // Cálculos de tempo para dias, horas, minutos e segundos
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Exibindo o resultado no elemento com id="timer"
  document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // Se a contagem regressiva terminar
  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("timer").innerHTML = "O grande dia chegou!";
  }
}, 1000);
