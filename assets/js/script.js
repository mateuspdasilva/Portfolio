function typeWriter(Element) {
    const textoArray = Element.innerHTML.split('');
    Element.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => Element.innerHTML += letra, 120 * i);
    });
  }

  const mateus = document.querySelector('#mateus-animation');
  typeWriter(mateus);
