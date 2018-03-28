const tomatoesBio = sessionStorage.getItem('tomatoesBio');
const bananasBio = sessionStorage.getItem('bananasBio');
const coffeeBio = sessionStorage.getItem('coffeeBio');
const milkBio = sessionStorage.getItem('milkBio');

setImageForProduct('tomatoes', tomatoesBio);
setImageForProduct('bananas', bananasBio);
setImageForProduct('coffee', coffeeBio);
setImageForProduct('milk', milkBio);

setProductName('Rispentomaten', tomatoesBio);
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
    image = "https://s3.eu-central-1.amazonaws.com/kit-online-store/img/bio_" + productName + ".png";
  }
  else {
    image = "https://s3.eu-central-1.amazonaws.com/kit-online-store/img/" + productName + ".png";
  }
  document.getElementById("image"+productName).src = image;
};
