let api = `https://api.adviceslip.com/advice`;

let button = document.querySelector("button");
let header = document.querySelector("h1");

button.addEventListener("click", () => {
  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      header.innerHTML = data.slip.advice;
    });
});
