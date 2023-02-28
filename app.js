const settingForm = document.querySelector("form");
const setNumber = document.querySelector(".set_number__input");
const guessNumber = document.querySelector(".guess_number__input");
const alertNumber = document.querySelector(".hidden");

function getNumber(event) {
  event.preventDefault();
  const inputNumber = parseInt(setNumber.value);
  const inputNumber2 = parseInt(guessNumber.value);
  const randomNumber = Math.ceil(Math.random() * parseInt(inputNumber));
  if (inputNumber < 0 || inputNumber2 < 0) {
    alert("양수를 입력하세요.");
  } else {
    if (inputNumber2 === randomNumber) {
      alertNumber.classList.remove("hidden");
      alertNumber.innerText = `You chose: ${inputNumber2}, the machine chose: ${randomNumber} You won!`;
    } else if (inputNumber2 !== randomNumber) {
      alertNumber.classList.remove("hidden");
      alertNumber.innerText = `You chose: ${inputNumber2}, the machine chose: ${randomNumber} You lost!`;
    }
  }
}

settingForm.addEventListener("submit", getNumber);
