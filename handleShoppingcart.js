const tomatosBio = sessionStorage.getItem('tomatosBio');
const bananasBio = sessionStorage.getItem('bananasBio');
const coffeeBio = sessionStorage.getItem('coffeeBio');
const milkBio = sessionStorage.getItem('milkBio');

setImageForProduct('tomatos', tomatosBio);
setImageForProduct('bananas', bananasBio);
setImageForProduct('coffee', coffeeBio);
setImageForProduct('milk', milkBio);

setProductName('Rispentomaten', tomatosBio);
setProductName('Bananen', bananasBio);
setProductName('Kaffee', coffeeBio);
setProductName('Milch', milkBio);

function setProductName(productName, bioChoice){
  var printName = '';
  if (bioChoice == 'true') {
    printName = "Bio " + productName + "";
  }
  else {
    printName = productName;
  }
  document.getElementById(productName).innerHTML = printName;
}

function setImageForProduct(productName, bioChoice){
  if (bioChoice == 'true') {
    image = "img/bio_" + productName + ".png";
  }
  else {
    image = "img/" + productName + ".png";
  }
  document.getElementById("image"+productName).src = image;
};
