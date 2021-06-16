window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
}
let date = document.getElementById("date");
let timeout = 1000;
let action = function() {
  let today = new Date();
  let hh = today.getHours();
  let mm = today.getMinutes();
  let ss = today.getSeconds();
  date.innerHTML = hh + ':' + mm + ':' + ss;;   
};
setInterval(action, timeout);


let footer = document.getElementById("footer");
let calculatorImageForFooter = document.createElement("div");
calculatorImageForFooter.id = "calculatorImage";

let notepadImageForFooter = document.createElement("div");
notepadImageForFooter.id = "notepadImage";

let computerImageForFooter = document.createElement("div");
computerImageForFooter.id = "computerImage";


let calculatorButton = document.getElementById("calculatorButton");
let calculator = document.getElementById("calculatorWindow");
calculatorButton.onclick = function(){
  calculator.style.display = "block";
  footer.appendChild(calculatorImageForFooter);
}
let calculatorCloseButton = document.getElementById("closeCalculator");
calculatorCloseButton.onclick = function(){
  calculator.style.display = "none";
  document.getElementById("calculatorImage").remove();
}


let notepadButton = document.getElementById("notepadButton")
let notepad = document.getElementById("notepad");
notepadButton.onclick = function(){
  notepad.style.display = "block";
  footer.appendChild(notepadImageForFooter);
}
let notepadCloseButton = document.getElementById("closeNotepad");
notepadCloseButton.onclick = function(){
  notepad.style.display = "none";
  document.getElementById("notepadImage").remove();
}

let computerButton = document.getElementById("computerButton")
let computer = document.getElementById("computer");
computerButton.onclick = function(){
  computer.style.display = "block";
  footer.appendChild(computerImageForFooter);
}
let computerCloseButton = document.getElementById("closeComputer");
computerCloseButton.onclick = function(){
  computer.style.display = "none";
  document.getElementById("computerImage").remove();
}
