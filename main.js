import { play, render } from "./couples.js";

const cards = [
  "🍕",
  "🍔",
  "🍟",
  "🍦",
  "🍩",
  "🍭",
];

render({
  cardClass: "card reverse",
  cardSize: 120,
  columns: 4,
  cards,
});

play({
  cardClass: "card",
  reverseClass: "reverse",
  message: "¡Fin!",
});
