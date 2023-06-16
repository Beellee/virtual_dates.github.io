const bar = document.getElementById('myBar');
const progressBar = document.getElementsByClassName('progress-bar')[0];
const rangeInput = document.getElementById('rangeInput');
const percentageLabel = document.getElementById('percentageLabel');

bar.style.width = '0%';
let fillPercentage = rangeInput.value;

progressBar.addEventListener('click', function() {
  let currentWidth = parseInt(bar.style.width);
  let newWidth = currentWidth + parseInt(fillPercentage);

  if (newWidth <= 100) {
    bar.style.width = newWidth + '%';
  } else {
    bar.style.width = '100%';
  }
});

rangeInput.addEventListener('input', function() {
  fillPercentage = rangeInput.value;
  percentageLabel.textContent = fillPercentage + '%';
});
