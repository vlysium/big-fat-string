"use strict";

let inputField; //input field, user input
let dropdown; //dropdown menu with options
let outputField; //output field, generated text
let btn; //button to generate text

let option; //selected option

//wait for the document to load
document.addEventListener("DOMContentLoaded", init);

//initialize
function init() {
  inputField = document.getElementById("input");
  dropdown = document.getElementById("dropdown");
  outputField = document.getElementById("output");
  btn = document.getElementById("generate");

  btn.addEventListener("click", generate);
}

//generate text based on the selected option
function generate() {
  option = parseInt(dropdown.value);
  //console.log(option);

  //shortening variables
  let inValue = inputField.value;

  switch (option) {
    case 1:
      outputField.value = inValue.charAt([0]).toUpperCase() + inValue.substring(1).toLowerCase();
      break;

    case 2:
      outputField.value = inValue.substring(0, inValue.indexOf(" "));
      break;

    case 3:
      outputField.value = inValue.substring(0, inValue.indexOf(" ")).length;
      break;

    case 4:
      outputField.value = inValue.substring(inValue.indexOf(" ") + 1, inValue.lastIndexOf(" "));
      break;

    case 5:
      inValue.endsWith(".png") || inValue.endsWith(".jpg")
        ? (outputField.value = "approved file type")
        : (outputField.value = "file type denied");
      break;

    case 6:
      outputField.value = "*".repeat(inValue.length);
      break;

    case 7:
      outputField.value =
        inValue.substring(0, 2) + inValue.charAt([2]).toUpperCase() + inValue.substring(3, inValue.length);
      break;

    case 8:
      let regex = /(?<=(-| ))[a-z]/g; //captures lower case letters after a space or dash
      outputField.value =
        inValue.charAt([0]).toUpperCase() +
        inValue
          .replace(regex, function (character) {
            return character.toUpperCase();
          })
          .substring(1);
      break;
  }
}
