var isTomatoesBio = sessionStorage.getItem('tomatoesBio');
var isBananasBio = sessionStorage.getItem('bananasBio');
var isCoffeeBio = sessionStorage.getItem('coffeeBio');
var isMilkBio = sessionStorage.getItem('milkBio');

setDefault(isTomatoesBio, 'tomatoes');
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

function startSetStorage () {
  setStorage('tomatoes');
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
