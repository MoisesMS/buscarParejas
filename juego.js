export const juego = () => {
  const COLOR_SELECCIONADO = "blue"
  const COLOR_CARTA = "rgb(255, 68, 0)"

  let cartas = document.getElementsByClassName("carta-reverso")
  let memoria = [0, 0]
  let cartaClicada1 = -1
  let cartaClicada2 = -1

  Array.from(cartas).forEach((carta, index) => {
    cartas[index].addEventListener("click", () => {

      if(cartaClicada1 === -1) {
        cambiarColor(carta, COLOR_SELECCIONADO)
        cartaClicada1 = index
      } else if(cartaClicada2 === -1) {
        cambiarColor(carta, COLOR_SELECCIONADO)
        cartaClicada2 = index
      } else if(cartaClicada1 !== -1 && cartaClicada2 !== -1) {
        cambiarColor(cartas[cartaClicada1], COLOR_CARTA)
        cambiarColor(cartas[cartaClicada2], COLOR_CARTA)
        cambiarColor(carta, COLOR_SELECCIONADO)
        cartaClicada1 = index
        cartaClicada2 = -1
      }

      if((cartaClicada1 !== -1 && cartaClicada2 !== -1) && cartas[cartaClicada1].innerText === cartas[cartaClicada2].innerText) {

        let carta1 = cartas[cartaClicada1]
        let carta2 = cartas[cartaClicada2]
      
        carta1.style.visibility = "hidden"
        carta2.style.visibility = "hidden"

        setTimeout(() => {
          carta1.remove
          carta2.remove
        }, 5)
        
        cambiarColor(carta1, COLOR_CARTA)
        cambiarColor(carta2, COLOR_CARTA)

        cartaClicada1 = -1
        cartaClicada2 = -1

        if (Array.from(cartas).every(carta => carta.style.visibility === "hidden")) {
          alert("Has ganado");
        }
      }
    })
  })

  const cambiarColor = (carta, color) => {
    carta.style.color = color
  }
}

