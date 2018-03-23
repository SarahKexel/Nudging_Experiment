const AMOUNT_SELECTIONS = 4;

const items = [
  {
    id: 1,
    productName: 'tomatoes',
    printName: 'Tomaten',
    image: 'tomatoes.png',
    imageBio: 'bio_tomatoes.png',
    productDescriptionBio: '<h6><b>Produktbeschreibung:</b></h6><p>Strauch-, Rispen- oder Buschtomaten sind Tomaten, die mit Kelch und Stielen geerntet werden. Es gibt Cherry-, Roma- und runde Tomaten mit Rispe. Fruchtig (viel Fruchtsäure). Tomaten waschen und den Stängelansatz sowie grüne Stellen gründlich entfernen, diese enthalten Solanin, einen Stoff der gesundheitsschädlich ist und u.a. Kopfschmerzen verursachen kann. Tomaten sind druck- und transportempfindlich. Tomaten nicht im Kühlschrank aufbewahren, da sie dann an Aroma verlieren, glasig und vorzeitig weich werden.</p><h6><b>Eigenschaften:</b></h6><p>Bio<br>Umweltverträgliche und ressourcenschonend Produktion.</br></p><h6><b>Ursprungsland:</b></h6><p>Spanien oder Deutschland; Kl.: II; Ursprungsland und Klasse können je nach Angebot abweichen.</p>',
    productDescription: '<h6><b>Produktbeschreibung:</b></h6><p>Strauch-, Rispen- oder Buschtomaten sind Tomaten, die mit Kelch und Stielen geerntet werden. Es gibt Cherry-, Roma- und runde Tomaten mit Rispe. Fruchtig (viel Fruchtsäure). Tomaten waschen und den Stängelansatz sowie grüne Stellen gründlich entfernen, diese enthalten Solanin, einen Stoff der gesundheitsschädlich ist und u.a. Kopfschmerzen verursachen kann. Tomaten sind druck- und transportempfindlich. Tomaten nicht im Kühlschrank aufbewahren, da sie dann an Aroma verlieren, glasig und vorzeitig weich werden.</p><h6><b>Ursprungsland:</b></h6><p>Marokko oder Spanien; Kl.: I; Ursprungsland und Handelsklasse können je nach Angebot abweichen. </p>',
    nudge: Math.random() >= 0.5,
    bioFirst: Math.random() >= 0.5,
  },
  {
    id: 2,
    productName: 'bananas',
    printName: 'Bananen',
    image: 'bananas.png',
    imageBio: 'bio_bananas.png',
    productDescriptionBio: '<h6><b>Produktbeschreibung:</b></h6><p>Bananen werden grün geerntet, denn sie reifen nach. Sie werden auf besonderen Bananenschiffen in die Verbraucherländer transportiert. Vorwiegend angebaut in Ecuador, Panama, Costa Rica, Kolumbien und Dominikanische Republik. Fleischig, aromatisch und je nach Reifegrad von leicht säuerlich bis sehr süß. Bananen vor Zugluft schützen! Bei zu kühlen Temperaturen färbt sich die Schale gelblich-grau bis schwarz und es kommt zu Aromaverlusten. Sie liefern schnell Energie und stellen eine gute Zwischenmahlzeit auch für unterwegs dar. Die Krümmung der Banane entsteht während des Wachstums hormonbedingt.</p><h6><b>Eigenschaften:</b></h6><p>Bio<br>Umweltverträgliche und ressourcenschonend Produktion.</br></p><h6><b>Ursprungsland:</b></h6><p>Dominikanische Republik, Ecuador oder Peru; Kl.: M; Ursprungsland und Klasse können je nach Angebot abweichen.</p>',
    productDescription: '<h6><b>Produktbeschreibung:</b></h6><p>Bananen werden grün geerntet, denn sie reifen nach. Sie werden auf besonderen Bananenschiffen in die Verbraucherländer transportiert. Vorwiegend angebaut in Ecuador, Panama, Costa Rica, Kolumbien und Dominikanische Republik. Fleischig, aromatisch und je nach Reifegrad von leicht säuerlich bis sehr süß. Bananen vor Zugluft schützen! Bei zu kühlen Temperaturen färbt sich die Schale gelblich-grau bis schwarz und es kommt zu Aromaverlusten. Sie liefern schnell Energie und stellen eine gute Zwischenmahlzeit auch für unterwegs dar. Die Krümmung der Banane entsteht während des Wachstums hormonbedingt.</p><h6><b>Ursprungsland:</b></h6><p>Kl.: M; Ursprungsland und Klasse können je nach Angebot abweichen.</p>',
    nudge: Math.random() >= 0.5,
    bioFirst: Math.random() >= 0.5,
  },
  {
    id: 3,
    productName: 'coffee',
    printName: 'Kaffee',
    image: 'coffee.png',
    imageBio: 'bio_coffee.png',
    productDescriptionBio: '<h6><b>Produktbeschreibung:</b></h6><p>Schonend geröstete Bohnen aus 100% Arabica verleihen diesem besonderen Kaffeegenuss ein einzigartiges Aroma. Trocken lagern und vor Wärme schützen.<br>Mild. Gemahlener Röstkaffee.</br></p><h6><b>Eigenschaften:</b></h6><p>Bio<br>Umweltverträgliche und ressourcenschonend Produktion.</br></p><h6><b>Ursprungsland:</b></h6><p>Deutschland</p>',
    productDescription: '<h6><b>Produktbeschreibung:</b></h6><p>Schonend geröstete Bohnen aus 100% Arabica verleihen diesem besonderen Kaffeegenuss ein einzigartiges Aroma. Trocken lagern und vor Wärme schützen.<br>Mild. Gemahlener Röstkaffee.</br></p><h6><b>Ursprungsland:</b></h6><p>Deutschland</p>',
    nudge: Math.random() >= 0.5,
    bioFirst: Math.random() >= 0.5,
  },
  {
    id: 4,
    productName: 'milk',
    printName: 'Milch',
    image: 'milk.png',
    imageBio: 'bio_milk.png',
    productDescriptionBio: '<h6><b>Produktbeschreibung:</b></h6><p>Bei diesen Produkten bieten wir Ihnen beste Frische und Qualität. Bitte beachten Sie daher, dass frische Milch nur eine kurze Restlaufzeit hat.<br>Frische fettarme Bio Milch, 1,5 % Fett, pasteurisiert, homogenisiert, länger haltbar.</br><p/><h6><b>Eigenschaften:</b></h6><p>Bio<br>Umweltverträgliche und ressourcenschonend Produktion.</br></p><h6><b>Ursprungsland:</b></h6><p>Deutschland</p>',
    productDescription: '<h6><b>Produktbeschreibung:</b></h6><p>Bei diesen Produkten bieten wir Ihnen beste Frische und Qualität. Bitte beachten Sie daher, dass frische Milch nur eine kurze Restlaufzeit hat.<br>Frische fettarme Milch, 1,5 % Fett, pasteurisiert, homogenisiert, länger haltbar.</br><p/><h6><b>Ursprungsland:</b></h6><p>Deutschland</p>',
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
    document.getElementById('productNameFirst').innerHTML= "Bio " + items[clicks].printName;
    document.getElementById('productNameLast').innerHTML=items[clicks].printName;
    document.getElementById('productDescriptionFirst').innerHTML=items[clicks].productDescriptionBio;
    document.getElementById('productDescriptionLast').innerHTML=items[clicks].productDescription;

  }
  else{
    if(items[clicks].nudge){
      document.getElementById('optionLast').checked="true";
    }
    document.getElementById('imageFirst').src="img/" + items[clicks].image;
    document.getElementById('imageLast').src="img/" + items[clicks].imageBio;
    document.getElementById('productNameFirst').innerHTML= items[clicks].printName;
    document.getElementById('productNameLast').innerHTML="Bio "+ items[clicks].printName;
    document.getElementById('productDescriptionFirst').innerHTML= items[clicks].productDescription;
    document.getElementById('productDescriptionLast').innerHTML=items[clicks].productDescriptionBio;
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
  var notext = document.getElementById("productDescriptionFirst");
  var text = document.getElementById("displayTextFirst");
	if(notext.style.display = "block") {
    notext.style.display = "none";
		text.innerHTML = "Mehr Infos anzeigen.";
  	}
	else {
		notext.style.display = "none";
		text.innerHTML = "Mehr Infos anzeigen.";
  }
  var notext = document.getElementById("productDescriptionLast");
  var text = document.getElementById("displayTextLast");
	if(notext.style.display = "block") {
    notext.style.display = "none";
		text.innerHTML = "Mehr Infos anzeigen.";
  	}
	else {
		notext.style.display = "none";
		text.innerHTML = "Mehr Infos anzeigen.";
  }


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
      //randomize if Disclosure is shown to user
      let directToShoppingCart = Math.random() >= 0.5;
      if (directToShoppingCart) {
        window.location='shoppingcartChoice.html';
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

function toggle(position) {
  console.log();
  if (position == 'First'){
    var notext = document.getElementById("productDescriptionFirst");
  	var text = document.getElementById("displayTextFirst");
  }
  else {
    var notext = document.getElementById("productDescriptionLast");
  	var text = document.getElementById("displayTextLast");
  }
  if(notext.style.display == "block") {
    notext.style.display = "none";
    text.innerHTML = "Mehr Infos anzeigen.";
    }
  else {
    notext.style.display = "block";
    text.innerHTML = "Infos ausblenden.";
	}
}
