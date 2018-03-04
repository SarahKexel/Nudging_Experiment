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
