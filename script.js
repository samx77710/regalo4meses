function mostrarCarta() {
  const carta = document.getElementById('carta');
  carta.style.display = 'block';
}

function mostrarCarta() {
  const carta = document.getElementById('carta');
  carta.style.display = 'block';
}

window.addEventListener('DOMContentLoaded', () => {
  const finalBtn = document.querySelector('.final-btn');
  
  finalBtn.addEventListener('click', () => {
    finalBtn.style.display = 'none';

    const opciones = document.createElement('div');
    opciones.classList.add('respuestas');

    const btnSi = document.createElement('button');
    btnSi.textContent = 'Sí ❤️';
    btnSi.onclick = () => {
      opciones.innerHTML = '<h2 style="color:white;">¡Sabía que dirías que sí! Te amo para siempre 😘</h2>';
    };

    const btnNo = document.createElement('button');
    btnNo.textContent = 'No 💔';
    btnNo.style.position = 'relative';
    btnNo.onmouseover = () => {
      btnNo.style.position = 'absolute';
      btnNo.style.top = Math.floor(Math.random() * 200) + 'px';
      btnNo.style.left = Math.floor(Math.random() * 200) + 'px';
    };

    opciones.appendChild(btnSi);
    opciones.appendChild(btnNo);
    document.querySelector('.container').appendChild(opciones);
  });
});

function reproducirCancion() {
  const audio = document.getElementById('miCancion');
  audio.play();
}
