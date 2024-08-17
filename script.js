function togglrMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver  light mode, adicionar a imagem light
    img.setAttribute('src', './assets/avatar-light.png');
    img.setAttribute('alt', 'Foto de Vanderlei com o fundo verde')

  } else {
    // se sem light mode manter normal
    img.setAttribute('src', './assets/avatar.png')
    img.setAttribute("alt", "Foto de Vanderlei com o fundo colorido")
//ajuste
  }

  //if(html.classList.contains('light')) {
  //  html.classList.remove('light');
  //} else {
  //  html.classList.add('light');
  //}

}