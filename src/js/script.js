const btnVerMais = document.getElementById('btnVerMais');
const itens = document.querySelectorAll('.article ul.icon li');

function ajustarExibicao() {
  if (window.innerWidth < 768) {
    if (!btnVerMais.classList.contains('ativo')) {
      itens.forEach((li, i) => li.style.display = i < 3 ? 'block' : 'none');
    } else {
      itens.forEach(li => li.style.display = 'block');
    }
  } else {
    itens.forEach(li => li.style.display = 'block');
  }
}

btnVerMais.addEventListener('click', (e) => {
  e.preventDefault();
  btnVerMais.classList.add('ativo');
  ajustarExibicao();
});

window.addEventListener('resize', ajustarExibicao);
window.addEventListener('load', ajustarExibicao);
