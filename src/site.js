let button = document.querySelector(".button");
let clearButton = document.querySelector(".clear-button");

const colours = ["#47e376", "pink", "#6432a8", "#CC9900", "#DF430A", "#1b0d82"];
let index = 0;

button.addEventListener("click", function() {
  if (index !== colours.length - 1) index++;
  else index = 0;

  document.documentElement.style.setProperty("--colour", colours[index]);
});

clearButton.addEventListener("click", function() {
  clear();
});
