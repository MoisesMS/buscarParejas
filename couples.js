/**
 * Función para mezclar elementos de un array
 * @param {any[]} array Array a mezclar
 * @returns {any[]} Array mezclado
 */
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

/**
 * Función para actualizar el reloj
 * @param {HTMLElement} footer Pie de página
 */
function tick(footer) {
  let [hours, minutes, seconds] = footer.innerText.split(":").map(Number);

  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  const hoursString = hours.toString().padStart(2, "0");
  const minutesString = minutes.toString().padStart(2, "0");
  const secondsString = seconds.toString().padStart(2, "0");

  footer.innerText = `${hoursString}:${minutesString}:${secondsString}`;
}

/**
 * Función para renderizar el tablero
 * @param {string} cardClass Clase de las cartas
 * @param {number} cardSize Tamaño de las cartas
 * @param {number} columns Número de columnas
 * @param {string[]} cards Cartas a renderizar
 */
export function render({
  cardClass,
  cardSize = 120,
  columns = 4,
  cards,
}) {
  const main = document.getElementsByTagName("main")[0];
  document.body.style.width = `${cardSize * columns}px`;

  for (const card of shuffle([...cards, ...cards])) {
    const div = document.createElement("div");
    div.className = cardClass;
    div.innerText = card;
    main.appendChild(div);
  }
}

/**
 * Función para jugar
 * @param {string} cardClass Clase de las cartas
 * @param {string} reverseClass Clase de las cartas al revés
 * @param {string} message Mensaje de victoria
 */
export function play({
  cardClass,
  reverseClass,
  message
}) {
  const footer = document.getElementsByTagName("footer")[0];
  let timer = null;

  const cards = document.getElementsByClassName(cardClass);
  let [card1, card2] = [null, null];

  for (const [index, carta] of Object.entries(cards)) {
    carta.addEventListener("click", () => {
      if (!timer) {
        timer = setInterval(tick, 1000, footer);
      }
      
      if (!card1) {
        card1 = index;
        carta.classList.remove(reverseClass);
      } else if (!card2) {
        card2 = index;
        carta.classList.remove(reverseClass);
      }

      if (card1 && card2) {
        const reversedCards = document.getElementsByClassName(reverseClass);

        if (reversedCards.length > 0) {
          setTimeout(() => {
            if (cards[card1]?.innerText !== cards[card2]?.innerText) {
              cards[card1].classList.add(reverseClass);
              cards[card2].classList.add(reverseClass);
            }

            [card1, card2] = [null, null];
          }, 750);
        } else {
          clearInterval(timer);
          footer.innerText = `${message} ${footer.innerText}`;
        }
      }
    });
  }
}
