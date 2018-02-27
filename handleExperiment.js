const AMOUNT_SELECTIONS = 4;

const items = [
  {
    id: 1,
    productName: 'tomatos',
    image: 'tomatos.png',
    imageBio: 'bio_tomatos.png',
    nudge: Math.random() >= 0.5,
    bioFirst: Math.random() >= 0.5,
  },
  {
    id: 2,
    productName: 'coffee',
    image: 'coffee.png',
    imageBio: 'bio_coffee.png',
    nudge: Math.random() >= 0.5,
    bioFirst: Math.random() >= 0.5,
  },
  {
    id: 3,
    productName: 'milk',
    image: 'milk.png',
    imageBio: 'bio_milk.png',
    nudge: Math.random() >= 0.5,
    bioFirst: Math.random() >= 0.5,
  },
  {
    id: 4,
    productName: 'bananas',
    image: 'bananas.png',
    imageBio: 'bio_bananas.png',
    nudge: Math.random() >= 0.5,
    bioFirst: Math.random() >= 0.5,
  },
];

var clicks = 0;
var nudge = Math.random() >= 0.5;

window.onload = function (){
  sessionStorage.clear();
  shuffleArray(items);
  if(items[clicks].bioFirst){
    if(items[clicks].nudge){
      document.getElementById('optionFirst').checked="true";
    }
    document.getElementById('imageFirst').src="img/" + items[clicks].imageBio;
    document.getElementById('imageLast').src="img/" + items[clicks].image;
  }
  else{
    if(items[clicks].nudge){
      document.getElementById('optionLast').checked="true";
    }
    document.getElementById('imageFirst').src="img/" + items[clicks].image;
    document.getElementById('imageLast').src="img/" + items[clicks].imageBio;
  }
}

function getConfirmation() {
  if(! isOneChecked(document.getElementsByName('optionsRadios'))){
    document.getElementById('no-selection').classList.remove('d-none');
  }
  else {
    //hide warning if exists
    document.getElementById('no-selection').classList.add('d-none');
    document.getElementById('productselector').classList.add('d-none');
    document.getElementById('confirmation').classList.remove('d-none');
  }
}

function handleSelection() {
  if (! isOneChecked(document.getElementsByName('optionsRadiosfuzzy'))){
    document.getElementById('no-tendency').classList.remove('d-none');
  }
  else {
    //save data to sessionStorage
    let currentItem = items[clicks];
    console.log(currentItem);
    sessionStorage.setItem(currentItem.productName+'Nudge', currentItem.nudge);
    if(document.getElementById('optionFirst').checked) {
      sessionStorage.setItem(currentItem.productName+'Bio', currentItem.bioFirst ? true : false)
    }
    else if(document.getElementById('optionLast').checked) {
      sessionStorage.setItem(currentItem.productName+'Bio', currentItem.bioFirst ? false : true)
    }
    sessionStorage.setItem(currentItem.productName+'Tendency', getTendencyNumber(document.getElementsByName('optionsRadiosfuzzy')));

    document.getElementById('form').reset();
    document.getElementById('form_tendency').reset();
    ++clicks;

    //if all four items selected, go to next page
    if (clicks >= AMOUNT_SELECTIONS) {
        window.location='shoppingcart.html';
      }
      else {
        window.location='shoppingcartChoice.html';
      }
    }
    //otherwise, prepare next page
    else {
      if(items[clicks].nudge && items[clicks].bioFirst){
        document.getElementById('optionFirst').checked="true";
      }
      else if(items[clicks].nudge && !items[clicks].bioFirst){
        document.getElementById('optionLast').checked="true";
      }
      if(items[clicks].bioFirst){
        document.getElementById('imageFirst').src="img/" + items[clicks].imageBio;
        document.getElementById('imageLast').src="img/" + items[clicks].image;
      }
      else{
        document.getElementById('imageFirst').src="img/" + items[clicks].image;
        document.getElementById('imageLast').src="img/" + items[clicks].imageBio;
      }
      document.getElementById('no-tendency').classList.add('d-none');
      document.getElementById('productselector').classList.remove('d-none');
      document.getElementById('confirmation').classList.add('d-none');
    }
  }
}

/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function isOneChecked(chx) {
  for (var i=0; i<chx.length; i++) {
    if (chx[i].type == 'radio' && chx[i].checked) {
      return true;
    }
  }
  return false;
}

function getTendencyNumber(chx) {
  for (var i=0; i<chx.length; i++) {
    if (chx[i].type == 'radio' && chx[i].checked) {
      return chx[i].value;
    }
  }
  return false;
}
