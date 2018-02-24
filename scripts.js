
document.getElementById("demo").innerHTML = "Hello " + getRandomNumber(4);

function getRandomNumber(n) {
  return Math.floor(Math.random() * Math.floor(n));
}

function navigateToTestPage() {
  localStorage.setItem('test', 'sarah');
  window.location='test.html';
}
