// Logic File
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.number, .operator, .clear, .equal, .dot, .deleteLastChar');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('number')) {
      display.value += button.innerText;
    } else if (button.classList.contains('operator')) {
      display.value += ` ${button.innerText} `;
    } else if (button.classList.contains('clear')) {
      display.value = '';
    } else if (button.classList.contains('equal')) {
      try {
        const result = eval(display.value);
        display.value = result;
      } catch (error) {
        display.value = 'Error';
      }
    } else if(button.classList.contains('deleteLastChar')) {
      const currentValue = display.value;
      display.value = currentValue.slice(0, -1);
    } else if(button.classList.contains('dot')) {
      display.value += '.';
    }
  });
});

