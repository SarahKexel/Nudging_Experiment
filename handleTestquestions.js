function testSelection() {
  if(document.getElementById('optionsfeldRadio1').checked && document.getElementById('optionsfeldRadio5').checked){
    document.getElementById('no-selection').classList.add('d-none');
    window.location='productdescription.html';
  }
  else {
    //show warning if selection false
    document.getElementById('no-selection').classList.remove('d-none');
  }
}
