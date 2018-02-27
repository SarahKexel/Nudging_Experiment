var isTomatosBio = sessionStorage.getItem('tomatosBio');
var isBananasBio = sessionStorage.getItem('bananasBio');
var isCoffeeBio = sessionStorage.getItem('coffeeBio');
var isMilkBio = sessionStorage.getItem('milkBio');

setDefault(isTomatosBio, 'tomatos');
setDefault(isBananasBio, 'bananas');
setDefault(isCoffeeBio, 'coffee');
setDefault(isMilkBio, 'milk');

function setDefault(isBio, product){
  if (isBio === 'true') {
    document.getElementById(product + 'OptionsRadios1').checked="true";
  }
  else {
    document.getElementById(product + 'OptionsRadios2').checked="true";
  }
}

/**benötigt? Denn es ist ja immer mind 1 ausgewählt
function handleSelectionChoice() {
  if (! isOneChecked(document.getElementsByName('tomatosOptionsRadios')) ||
      ! isOneChecked(document.getElementsByName('bananasOptionsRadios')) ||
      ! isOneChecked(document.getElementsByName('coffeeOptionsRadios')) ||
      ! isOneChecked(document.getElementsByName('milkOptionsRadios'))){
    document.getElementById('no-tendency').classList.remove('d-none');
  }
}*/
function startSetStorage () {
  setStorage('tomatos');
  setStorage('bananas');
  setStorage('coffee');
  setStorage('milk');
}

function setStorage (product) {
  if(document.getElementById(product + 'OptionsRadios1').checked) {
    sessionStorage.setItem(product +'Bio2', true)
  }
  else {
    sessionStorage.setItem(product +'Bio2', false)
  }
}

/**
function isOneChecked(chx) {
  for (var i=0; i<chx.length; i++) {
    if (chx[i].type == 'radio' && chx[i].checked) {
      return true;
    }
  }
  return false;
}*/
