
document.getElementById("demo").innerHTML = "Hello " + getRandomNumber(4);

function getRandomNumber(n) {
  return Math.floor(Math.random() * Math.floor(n));
}

function navigateToContextPage() {
  localStorage.setItem('test', 'sarah');
  window.location='context.html';
}

function navigateToTestquestionsPage() {
  localStorage.setItem('test', 'sarah');
  window.location='testquestions.html';
}

function navigateToProductdescriptionPage() {
  localStorage.setItem('test', 'sarah');
  window.location='productdescription.html';
}

function navigateToProductchoiceTomatosPage() {
  localStorage.setItem('test', 'sarah');
  window.location='productchoiceTomatos.html';
}
function navigateToTendencyPage() {
  localStorage.setItem('test', 'sarah');
  window.location='tendency.html';
}

function navigateToShoppingcartPage() {
  localStorage.setItem('test', 'sarah');
  window.location='shoppingcart.html';
}

function navigateToFinalPage() {
  localStorage.setItem('test', 'sarah');
  window.location='final.html';
}
