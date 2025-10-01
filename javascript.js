    // Your JavaScript goes here!
    let name = "John";
    let surname = "Doe";
    alert("✅ El script se está ejecutando");
    console.log(name);
    console.log(surname);
    const string = "The revolution will not be televised.";
    console.log(string); 


const button = document.querySelector("button");

function greet() {
  const name = prompt("What is your name?");
  const greeting = document.querySelector("#greeting");
  greeting.textContent = `Hello ${name}, nice to see you!`;
}

button.addEventListener("click", greet);

const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
  const choice = select.value;

  if (choice === "sunny") {
    para.textContent =
      "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
  } else if (choice === "rainy") {
    para.textContent =
      "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
  } else if (choice === "snowing") {
    para.textContent =
      "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
  } else if (choice === "overcast") {
    para.textContent =
      "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
  } else {
    para.textContent = "";
  }
}

function add7 (num) {
  return num + 7;
}
console.log(add7(3));

function multiply (num1, num2) {
  return num1 * num2;
}
console.log(multiply(3,4));

function capitalize (string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
console.log(capitalize("hello"));
console.log(capitalize("HELLO"));
console.log(capitalize("hElLo"));

function lastLetter (string) {
  return string.charAt(string.length - 1);
}
console.log(lastLetter("hello"));
console.log(lastLetter("goodbye"));
console.log(lastLetter("Zebra"));
console.log(lastLetter("banana"));  
