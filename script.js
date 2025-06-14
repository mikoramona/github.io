const cards = [
  { de: "Guten Morgen", en: "Good morning" },
];

let index = 0;
let showingGerman = true;
const cardEl = document.getElementById("flashcard");
const form = document.getElementById("add-card-form");
const germanInput = document.getElementById("german-input");
const englishInput = document.getElementById("english-input");

function showCard() {
  if (cards.length === 0) {
    cardEl.textContent = "Add some cards to start!";
    cardEl.classList.remove("revealed");
    return;
  }
  showingGerman = true;
  cardEl.textContent = cards[index].de;
  cardEl.classList.remove("revealed");
}

function revealCard() {
  if (showingGerman) {
    cardEl.textContent = cards[index].en;
    cardEl.classList.add("revealed");
    showingGerman = false;

    setTimeout(() => {
      index = (index + 1) % cards.length;
      showCard();
    }, 1500);
  }
}

cardEl.addEventListener("click", () => {
  if (cards.length === 0) return;
  revealCard();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const de = germanInput.value.trim();
  const en = englishInput.value.trim();

  if (!de || !en) return;

  cards.push({ de, en });
  germanInput.value = "";
  englishInput.value = "";

  index = cards.length - 1;
  showCard();
});

showCard();
