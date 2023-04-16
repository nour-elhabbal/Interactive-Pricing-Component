//SELECTING MAIN ELEMENTS :---
let result = document.querySelector(".pageViews");
let input = document.querySelector(".slider");
let pricing = document.querySelector(".pricing");
let price = document.querySelector(".price");
let yearOrMonth = document.querySelector(".perYearOrMonth");
let mToY = document.querySelector(".Switcher");

// MAIN FUNCTIONS :--
const yearlyPricing = () => {
  let inputValue = input.value;

  if (inputValue < 20) {
    result.textContent = `50K PAGEVIEWS`;
    pricing.textContent = `$ ${72} /year`;
  } else if (inputValue >= 20 && inputValue < 40) {
    result.textContent = `50K PAGEVIEWS`;
    pricing.textContent = `$ ${108} /year`;
  } else if (inputValue >= 40 && inputValue < 60) {
    result.textContent = `100K PAGEVIEWS`;
    pricing.textContent = `$ ${144} /year`;
  } else if (inputValue >= 60 && inputValue < 80) {
    result.textContent = `500K PAGEVIEWS`;
    pricing.textContent = `$ ${216} /year`;
  } else if (inputValue >= 80) {
    result.textContent = `1M PAGEVIEWS`;
    pricing.textContent = `$ ${324} /year`;
  }
};

const monthlyPricing = () => {
  let inputValue = input.value;

  if (inputValue < 20) {
    result.textContent = `10K PAGEVIEWS`;
    pricing.textContent = `$ ${(price.textContent = `8`)} /Month`;
  } else if (inputValue >= 20 && inputValue < 40) {
    result.textContent = `50K PAGEVIEWS`;
    pricing.textContent = `$ ${12} /Month`;
  } else if (inputValue >= 40 && inputValue < 60) {
    result.textContent = `100K PAGEVIEWS`;
    pricing.textContent = `$ ${16} /Month`;
  } else if (inputValue >= 60 && inputValue < 80) {
    result.textContent = `500K PAGEVIEWS`;
    pricing.textContent = `$ ${24} /Month`;
  } else if (inputValue >= 80) {
    result.textContent = `1M PAGEVIEWS`;
    pricing.textContent = `$ ${36} /Month`;
  }
};

// SCRIPT :---
window.onload = () => {
  result.textContent = `100K PAGEVIEWS`;
  price.textContent = `$ ${16} /Month`;
};

input.addEventListener("input", () => {
  monthlyPricing();
});
// switching to year
mToY.addEventListener("click", () => {
  yearlyPricing();
  input.addEventListener("input", () => {
    if (mToY.checked == true) {
      yearlyPricing();
    } else {
      input.addEventListener("input", () => {
        monthlyPricing();
      });
    }
  });

  if (mToY.checked == false) {
    monthlyPricing();
  }
});
