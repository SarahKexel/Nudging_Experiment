var x = productStorage(sessionStorage.getItem('tomatosBio'), 'tomatos');
document.getElementById("imageTomatos").src = x;

var x = productStorage(sessionStorage.getItem('bananasBio'), 'bananas');
document.getElementById("imageBananas").src = x;

var x = productStorage(sessionStorage.getItem('coffeeBio'), 'coffee');
document.getElementById("imageCoffee").src = x;

var x = productStorage(sessionStorage.getItem('milkBio'), 'milk');
document.getElementById("imageMilk").src = x;

function productStorage(a, b) {
  if (a == 'true') {
  image = "img/bio_" + b + ".png";
  }
  else {
  image = "img/" + b + ".png";
  }
    return image;
}
