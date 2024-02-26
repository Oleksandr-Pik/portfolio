const technologiesSelect = document.querySelector(
  "#calculator-form-technologies"
);

const technologiesMultiSelect = new Choices(technologiesSelect, {
  allowSearch: false,
  silent: false,
  renderChoiceLimit: -1,
  maxiItemCount: -1,
  removeItems: true,
  removeItemButton: true,
  editItems: false,
  duplicateItemsAllowed: false,
  delimiter: ",",
  paste: true,
  searchEnabled: false,
  searchChoices: true,
  searchResultLimit: -1,
  position: "auto",
  resetScrollPosition: true,
  shouldSort: true,
  shouldSortItems: false,
  placeholderValue: null,
  noChoicesText: "No available option",
  itemSelectText: "Click to select",
  classNames: {
    containerInner: "choices__inner tech-input-container",
    input: "choices__input",
  },
});

calculateSum();

const calculatorForm = document.querySelector(".calculator-form");

calculatorForm.addEventListener("submit", (event) => {
  event.preventDefault();
  calculateSum();
});

function calculateSum() {
  // Selectors
  const websiteTypeSelect = document.querySelector(
    "#calculator-form-website-type"
  );
  const websiteCart = document.querySelector(
    "#calculator-form-input-cart input:checked"
  );
  const websiteReception = document.querySelector(
    "#calculator-form-input-reception input:checked"
  );

  // Values
  const websiteTypeValue = extractPriceFromValue(websiteTypeSelect.value);
  const technologiesValue = getTechnologiesSum(
    technologiesMultiSelect.getValue()
  );
  const websitecartValue = convertCartOptionToPrice(websiteCart.value);
  const websiteReceptionValue = convertReceptiontOptionToPrice(
    websiteReception.value
  );

  const totalSum =
    websiteTypeValue +
    technologiesValue +
    websitecartValue +
    websiteReceptionValue;

  renderSum(totalSum);
}

function renderSum(sum) {
  const costElement = document.querySelector(".calculator-form-total-cost");

  costElement.textContent = "Calculating...";

  setTimeout(() => {
    costElement.textContent = `~${sum}$`;
  }, 1500);
}

function convertCartOptionToPrice(option) {
  if (option === "yes") {
    return 300;
  }

  return 0;
}

function convertReceptiontOptionToPrice(option) {
  if (option === "yes") {
    return 200;
  }

  return 0;
}

function getTechnologiesSum(technologiesArr) {
  let totalSum = 0;

  technologiesArr.forEach((tech) => {
    totalSum = totalSum + extractPriceFromValue(tech.value);
  });

  return totalSum;
}

function extractPriceFromValue(str) {
  const price = str.match(/:\d+/);

  if (price) {
    return Number(price[0].slice(1)) || 0;
  }

  return 0;
}
