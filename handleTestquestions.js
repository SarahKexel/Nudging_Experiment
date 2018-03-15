var answercounter = 0;

function testSelection() {
  console.log(answercounter);
  if(document.getElementById('optionsfeldRadio1').checked && document.getElementById('optionsfeldRadio5').checked){
    document.getElementById('no-selection').classList.add('d-none');
    window.location='productdescription.html';
  }
  else {
    //show warning if selection false
    if (answercounter > 1){
      window.location='productdescription.html';
    }
    else {
      document.getElementById('no-selection').classList.remove('d-none');
      answercounter = answercounter + 1;
    }
  }
}
