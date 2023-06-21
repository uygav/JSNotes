class Card {
  constructor(value, suit) {
    this.value = value;
    this.suit = suit;
  }
}

new Card("A", "Hearts");
new Card("A", "Spades");
new Card("A", "Diamonds");
new Card("A", "Clubs");
new Card("2", "Hearts");
new Card("2", "Spades");
new Card("2", "Diamonds");
new Card("2", "Clubs");

let cards = [
  new Card("A", "Hearts"),
  new Card("A", "Spades"),
  new Card("A", "Diamonds"),
  new Card("A", "Clubs"),
  new Card("2", "Hearts"),
  new Card("2", "Spades"),
  new Card("2", "Diamonds"),
  new Card("2", "Clubs"),
];

console.log(cards[1].value + cards[1].suit);
cards.forEach((card) => console.log(`${card.value} ${card.suit}`));
