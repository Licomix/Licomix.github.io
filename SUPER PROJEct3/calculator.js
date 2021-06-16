const buttons = document.querySelectorAll('button');
const output = document.querySelector('.out');
buttons.forEach(function(button) {
  button.addEventListener('click', calculate);
});
function calculate(event) {
  const clickedButton = event.target.value;
  if (clickedButton === '=') {
    if (output.value !== '') {
      output.value = eval(output.value);
    }
  } else if (clickedButton === 'C') {
    output.value = '';
  } else {
    output.value += clickedButton;
  }
}