document.getElementById('form-numero').addEventListener('submit', function(event) {
  event.preventDefault();
  var numA = parseInt(document.getElementById('numA').value);
  var numB = parseInt(document.getElementById('numB').value);
  if (numB > numA) {
      document.getElementById('resultado').innerText = 'Número B é maior que o número A.';
  } else {
      document.getElementById('resultado').innerText = 'Número B deve ser maior que o número A.';
  }
});
