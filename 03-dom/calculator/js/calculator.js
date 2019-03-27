const squareButton = document.getElementById('square-button');

const squareNumber = function () {
  const input = Number( document.getElementById('square-input').value );
  const result = input * input;
  document.getElementById('solution').innerHTML = result;
};

squareButton.addEventListener('click', squareNumber);
