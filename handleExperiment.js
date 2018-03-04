const AMOUNT_SELECTIONS = 4;

const items = [
  {
    id: 1,
    productName: 'tomatos',
    printName: 'Tomaten',
    image: 'tomatos.png',
    imageBio: 'bio_tomatos.png',
    nudge: Math.random() >= 0.5,
    bioFirst: Math.random() >= 0.5,
  },
  {
    id: 2,
    productName: 'bananas',
    printName: 'Bananen',
    image: 'bananas.png',
    imageBio: 'bio_bananas.png',
    nudge: Math.random() >= 0.5,
    bioFirst: Math.random() >= 0.5,
  },
  {
    id: 3,
    productName: 'coffee',
    printName: 'Kaffee',
    image: 'coffee.png',
    imageBio: 'bio_coffee.png',
    nudge: Math.random() >= 0.5,
    bioFirst: Math.random() >= 0.5,
  },
  {
    id: 4,
    productName: 'milk',
    printName: 'Milch',
    image: 'milk.png',
    imageBio: 'bio_milk.png',
    nudge: Math.random() >= 0.5,
    bioFirst: Math.random() >= 0.5,
  },

];

var clicks = 0;

window.onload = function (){
  //clear session storage when entering site
  sessionStorage.clear();

  //randomize the order of products to be selected by user
  shuffleArray(items);

  //handle the rendering of site:
  //--if randimized value bioFirst is true for the item, render Bio option on the left
  //--if randimized value bioFirst is true for the item, pre-render checkbox as checked for bio option
  if(items[clicks].bioFirst){
    if(items[clicks].nudge){
      document.getElementById('optionFirst').checked="true";
    }
    document.getElementById('imageFirst').src="img/" + items[clicks].imageBio;
    document.getElementById('imageLast').src="img/" + items[clicks].image;
    document.getElementById('productNameFirst').innerHTML="Bio " + items[clicks].printName;
    document.getElementById('productNameLast').innerHTML=items[clicks].printName;
  }
  else{
    if(items[clicks].nudge){
      document.getElementById('optionLast').checked="true";
    }
    document.getElementById('imageFirst').src="img/" + items[clicks].image;
    document.getElementById('imageLast').src="img/" + items[clicks].imageBio;
    document.getElementById('productNameFirst').innerHTML=items[clicks].printName;
    document.getElementById('productNameLast').innerHTML="Bio "+ items[clicks].printName;
  }
}

//function to be called when user presses "Auswählen" on the product selection site
function getConfirmation() {
  //if no selection is made, view warning to user
  if(! isOneChecked(document.getElementsByName('optionsRadios'))){
    document.getElementById('no-selection').classList.remove('d-none');
  }
  else {
    //hide warning if exists
    document.getElementById('no-selection').classList.add('d-none');
    //hide product selection and display tendency rating
    document.getElementById('productselector').classList.add('d-none');
    document.getElementById('confirmation').classList.remove('d-none');
  }
}

//function to be called when user presses the "Weiter" button on the tendency selection site
function handleSelection() {
  //if no selection is made, view warning to user
  if (! isOneChecked(document.getElementsByName('optionsRadiosfuzzy'))){
    document.getElementById('no-tendency').classList.remove('d-none');
  }
  else {
    //save data to sessionStorage
    let currentItem = items[clicks];
    sessionStorage.setItem(currentItem.productName+'Nudge', currentItem.nudge);
    //if user selected the first option, save that bio was selected if bioFirst variable for item is true
    if(document.getElementById('optionFirst').checked) {
      sessionStorage.setItem(currentItem.productName+'Bio', currentItem.bioFirst ? true : false);
      sessionStorage.setItem(currentItem.productName+'BioFirst', true);
    }
    //if user selected the last option, save that bio was selected if bioFirst variable for item is false
    else if(document.getElementById('optionLast').checked) {
      sessionStorage.setItem(currentItem.productName+'Bio', currentItem.bioFirst ? false : true)
      sessionStorage.setItem(currentItem.productName+'BioFirst', false);
    }
    //get the value property of the selected checkbox on tendency page and save to sessionStorage
    sessionStorage.setItem(currentItem.productName+'Tendency', getTendencyNumber(document.getElementsByName('optionsRadiosfuzzy')));

    //reset the form to clear checkboxes before processing to next product choice
    document.getElementById('form').reset();
    document.getElementById('form_tendency').reset();
    //increment clicks to access the next product in the items array
    ++clicks;

    //if all four items selected, go to next page
    if (clicks >= AMOUNT_SELECTIONS) {
      //randomize which shopping cart is shown to user
      let directToShoppingCart = Math.random() >= 0.5;
      if (directToShoppingCart) {
        window.location='shoppingcart.html';
      }
      else {
        window.location='nudgeDisclosure.html';
      }
    }
    //otherwise, prepare next page
    else {
      //handle the rendering of site:
      //--if randimized value bioFirst is true for the item, render Bio option on the left
      //--if randimized value bioFirst is true for the item, pre-render checkbox as checked for bio option
      if(items[clicks].nudge && items[clicks].bioFirst){
        document.getElementById('optionFirst').checked="true";
      }
      else if(items[clicks].nudge && !items[clicks].bioFirst){
        document.getElementById('optionLast').checked="true";
      }
      if(items[clicks].bioFirst){
        document.getElementById('imageFirst').src="img/" + items[clicks].imageBio;
        document.getElementById('imageLast').src="img/" + items[clicks].image;
        document.getElementById('productNameFirst').innerHTML="Bio "+ items[clicks].printName;
        document.getElementById('productNameLast').innerHTML=items[clicks].printName;
      }
      else{
        document.getElementById('imageFirst').src="img/" + items[clicks].image;
        document.getElementById('imageLast').src="img/" + items[clicks].imageBio;
        document.getElementById('productNameFirst').innerHTML=items[clicks].printName;
        document.getElementById('productNameLast').innerHTML="Bio "+ items[clicks].printName;
      }
      //hide warning if exists
      document.getElementById('no-tendency').classList.add('d-none');
      //display producselector and hide tendency selector 
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
