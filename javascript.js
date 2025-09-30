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
