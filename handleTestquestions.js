function correctSelection() {
  if(!document.getElementsById('optionsfeldRadio1').checked && !document.getElementsByName('optionsfeldRadio5').checked)){
    document.getElementById('no-selection').classList.remove('invisible');
  }
  else {
    //hide warning if exists
    document.getElementById('no-selection').classList.add('invisible');


function isOneChecked(chx) {
  for (var i=0; i<chx.length; i++) {
    if (chx[i].type == 'radio' && chx[i].checked) {
      return true;
    }
  }
  return false;
}
