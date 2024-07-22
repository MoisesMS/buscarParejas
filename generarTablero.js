import { pokemon } from "./pokemon.js"

export const generarTablero = () => {
  const tablero = document.getElementById("tablero")
  
  generarTanda()
  generarTanda()

  tablero.appendChild
}

const generarTanda = () => {
  pokemon.forEach(poke => {
    const carta = document.createElement("div")
    carta.className = "carta-reverso"

    carta.innerText = poke

    tablero.appendChild(carta)
  })
}
