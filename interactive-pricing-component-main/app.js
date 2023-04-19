//SELECTING MAIN ELEMENTS :---
let result = document.querySelector(".pageViews");
let input = document.querySelector(".slider");
let pricing = document.querySelector(".pricing");
let sliderProgress = document.querySelector(".slider-progress");
let price = document.querySelector(".price");
let yearOrMonth = document.querySelector(".perYearOrMonth");
let mToY = document.querySelector(".Switcher");

// MAIN FUNCTIONS :--
const yearlyPricing = () => {
  let inputValue = input.value;

  if (inputValue < 20) {
    result.textContent = `50K PAGEVIEWS`;
    pricing.innerHTML = `<span class="price">$ 72.00</span><span class="perYearOrMonth"> /Year</span>`;
  } else if (inputValue >= 20 && inputValue < 40) {
    result.textContent = `50K PAGEVIEWS`;
    pricing.innerHTML = `<span class="price">$ 108.00</span><span class="perYearOrMonth"> /Year</span>`;
  } else if (inputValue >= 40 && inputValue < 60) {
    result.textContent = `100K PAGEVIEWS`;
    pricing.innerHTML = `<span class="price">$ 144.00</span><span class="perYearOrMonth"> /Year</span>`;
  } else if (inputValue >= 60 && inputValue < 80) {
    result.textContent = `500K PAGEVIEWS`;
    pricing.innerHTML = `<span class="price">$ 216.00</span><span class="perYearOrMonth"> /Year</span>`;
  } else if (inputValue >= 80) {
    result.textContent = `1M PAGEVIEWS`;
    pricing.innerHTML = `<span class="price">$ 324.00</span><span class="perYearOrMonth"> /Year</span>`;
  }
};

const monthlyPricing = () => {
  let inputValue = input.value;

  if (inputValue < 20) {
    result.textContent = `10K PAGEVIEWS`;
    pricing.innerHTML = `<span class="price">$ 8.00</span><span class="perYearOrMonth"> /Month</span>`;
    sliderProgress.style.cssText = `width: 0%`;
  } else if (inputValue >= 20 && inputValue < 40) {
    result.textContent = `50K PAGEVIEWS`;
    pricing.innerHTML = `<span class="price">$ 12.00</span><span class="perYearOrMonth"> /Month</span>`;
    sliderProgress.style.cssText = `width: 30%`;
  } else if (inputValue >= 40 && inputValue < 60) {
    result.textContent = `100K PAGEVIEWS`;
    pricing.innerHTML = `<span class="price">$ 16.00</span><span class="perYearOrMonth"> /Month</span>`;
    sliderProgress.style.cssText = `width: 50%`;
  } else if (inputValue >= 60 && inputValue < 80) {
    result.textContent = `500K PAGEVIEWS`;
    pricing.innerHTML = `<span class="price">$ 24.00</span><span class="perYearOrMonth"> /Month</span>`;
    sliderProgress.style.cssText = `width: 70%`;
  } else if (inputValue >= 80) {
    result.textContent = `1M PAGEVIEWS`;
    pricing.innerHTML = `<span class="price">$ 36.00</span><span class="perYearOrMonth"> /Month</span>`;
    sliderProgress.style.cssText = `width: 100%`;
  }
};

// SCRIPT :---
window.onload = () => {
  result.textContent = `100K PAGEVIEWS`;
  pricing.innerHTML = `<span class="price">$ 16.00</span><span class="perYearOrMonth"> /Month</span>`;
  sliderProgress.style.cssText = `width: 50%`;
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
