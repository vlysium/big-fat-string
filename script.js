"use strict";

let inputField; //input field, user input
let dropdown; //dropdown menu with options
let outputField; //output field, generated text
let btn; //button to generate text

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
function generate() {}
