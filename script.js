//FORMULAS

// CELCIUS - FAHRENHEIT = (C*1.8)+32
// CELCIUS - KELVIN = C + 273.15

// FAHRENHEIT - CELCIUS = (F-32)/1.8
// FAHRENHEIT - KELVIN = ((F-32)/1.8)+273.15

// KELVIN - CELCIUS = K - 273.15
// KELVIN - FAHRENHEIT =((K - 273.15)*1.8)+32


const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("kelvin");

const temp = document.getElementsByClassName("input");

for (let i = 0; i < temp.length; i++) {
    let input = temp[i];

    input.addEventListener("input", function (e) {
      let value = parseFloat(e.target.value);
      
      switch (e.target.name) {
        case "celsius":
          fahrenheitInput.value = (value * 1.8) + 32;
          kelvinInput.value = value + 273.15;
          break;
        case "fahrenheit":
          celsiusInput.value = (value - 32) / 1.8;
          kelvinInput.value = ((value - 32) / 1.8) + 273.15;
          break;
        case "kelvin":
           celsiusInput.value = value - 273.15;
           fahrenheitInput.value = ((value - 273.15) * 1.8) + 32;
          break;
      }
    });
}

let btnClear = document.querySelector("button");
let inputs = document.querySelectorAll("input");

btnClear.addEventListener('click', () => {
  inputs.forEach(input => input.value = '');
 });

