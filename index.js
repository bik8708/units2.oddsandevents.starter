// Initial state
const state = { numberBank: [], odds: [], evens: [] };

// Render numbers in the number bank
function renderNumberBank() {
  const numberBankContainer = document.querySelector("output");
  numberBankContainer.innerHTML = "";

  state.numberBank.forEach((value) => {
    const numberElement = document.createElement("div");
    numberElement.innerText = value;

    numberBankContainer.appendChild(numberElement);
  });
}

// Render sorted numbers (odds and evens)
function renderSortedNumbers() {
  const oddsList = document.querySelector("#odds output");
  const evensList = document.querySelector("#evens output");

  const oddsElements = state.odds.map((value) => {
    const div = document.createElement("div");
    div.textContent = value;
    return div;
  });
  oddsList.replaceChildren(...oddsElements);

  const evensElements = state.evens.map((value) => {
    const div = document.createElement("div");
    div.textContent = value;
    return div;
  });
  evensList.replaceChildren(...evensElements);
}

// Main render function
function render() {
  renderNumberBank();
  renderSortedNumbers();
}

// Add event listener on form submission
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const numberInput = document.querySelector("#number");
  const number = parseInt(numberInput.value, 10);

  if (!isNaN(number)) {
    state.numberBank.push(number);
    render();
  }

  numberInput.value = "";
});

const select1Button = document.querySelector("#sortOne");
select1Button.addEventListener("click", (event) => {
  const firstNumber = state.numberBank.shift();
  if (firstNumber % 2 === 0) {
    state.evens.push(firstNumber);
  } else {
    state.odds.push(firstNumber);
  }
  render();
});

const sortAllButton = document.querySelector("#sortAll");
sortAllButton.addEventListener("click", (event) => {
  for (let i = 0; i < state.numberBank.length; i++) {
    const currentNumber = state.numberBank[i];
    if (currentNumber % 2 === 0) {
      state.evens.push(currentNumber);
    } else {
      state.odds.push(currentNumber);
    }
  }

  state.numberBank = [];
  render();
});

//note to self: for (const currentNumber of state.numberBank.length)

// Initial render
render();
