const items = [
{
  id: 1,
  productName: 'tomatoes',
  printName: 'Tomaten',
  image: 'tomatoes.png',
  imageBio: 'bio_tomatoes.png',
  productDescriptionBio: '<h6><b>Produktbeschreibung:</b></h6><p>Strauch-, Rispen- oder Buschtomaten sind Tomaten, die mit Kelch und Stielen geerntet werden. Tomaten waschen und den Stängelansatz sowie grüne Stellen gründlich entfernen, diese enthalten Solanin, einen Stoff der gesundheitsschädlich ist und u.a. Kopfschmerzen verursachen kann. Tomaten nicht im Kühlschrank aufbewahren, da sie dann an Aroma verlieren, glasig und vorzeitig weich werden.</p><h6><b>Eigenschaften:</b></h6><p>Bio<br>Umweltverträgliche und ressourcenschonende Produktion.</br></p><h6><b>Ursprungsland:</b></h6><p>Spanien oder Deutschland; Kl.: II; Ursprungsland und Klasse können je nach Angebot abweichen.</p>',
  productDescription: '<h6><b>Produktbeschreibung:</b></h6><p>Strauch-, Rispen- oder Buschtomaten sind Tomaten, die mit Kelch und Stielen geerntet werden. Tomaten waschen und den Stängelansatz sowie grüne Stellen gründlich entfernen, diese enthalten Solanin, einen Stoff der gesundheitsschädlich ist und u.a. Kopfschmerzen verursachen kann. Tomaten nicht im Kühlschrank aufbewahren, da sie dann an Aroma verlieren, glasig und vorzeitig weich werden.</p><h6><b>Ursprungsland:</b></h6><p>Marokko oder Spanien; Kl.: I; Ursprungsland und Handelsklasse können je nach Angebot abweichen. </p>',
  bioFirst: Math.random() >= 0.5,
},
{
  id: 2,
  productName: 'bananas',
  printName: 'Bananen',
  image: 'bananas.png',
  imageBio: 'bio_bananas.png',
  productDescriptionBio: '<h6><b>Produktbeschreibung:</b></h6><p>Bananen werden grün geerntet, denn sie reifen nach. Vorwiegend werden sie in Ecuador, Panama, Costa Rica, Kolumbien und Dominikanische Republik angebaut. Die Krümmung der Banane entsteht während des Wachstums hormonbedingt. Bananen vor Zugluft schützen! Bei zu kühlen Temperaturen färbt sich die Schale gelblich-grau bis schwarz und es kommt zu Aromaverlusten. </p><h6><b>Eigenschaften:</b></h6><p>Bio<br>Umweltverträgliche und ressourcenschonende Produktion.</br></p><h6><b>Ursprungsland:</b></h6><p>Dominikanische Republik, Ecuador oder Peru; Kl.: M; Ursprungsland und Klasse können je nach Angebot abweichen.</p>',
  productDescription: '<h6><b>Produktbeschreibung:</b></h6><p>Bananen werden grün geerntet, denn sie reifen nach. Vorwiegend werden sie in Ecuador, Panama, Costa Rica, Kolumbien und Dominikanische Republik angebaut. Die Krümmung der Banane entsteht während des Wachstums hormonbedingt. Bananen vor Zugluft schützen! Bei zu kühlen Temperaturen färbt sich die Schale gelblich-grau bis schwarz und es kommt zu Aromaverlusten.</p><h6><b>Ursprungsland:</b></h6><p>Kl.: M; Ursprungsland und Klasse können je nach Angebot abweichen.</p>',
  bioFirst: Math.random() >= 0.5,
},
{
  id: 3,
  productName: 'coffee',
  printName: 'Kaffee',
  image: 'coffee.png',
  imageBio: 'bio_coffee.png',
  productDescriptionBio: '<h6><b>Produktbeschreibung:</b></h6><p>Schonend geröstete Bohnen aus 100% Arabica verleihen diesem besonderen Kaffeegenuss ein einzigartiges Aroma. Trocken lagern und vor Wärme schützen.<br>Mild. Gemahlener Röstkaffee.</br></p><h6><b>Eigenschaften:</b></h6><p>Bio<br>Umweltverträgliche und ressourcenschonende Produktion.</br></p><h6><b>Ursprungsland:</b></h6><p>Deutschland</p>',
  productDescription: '<h6><b>Produktbeschreibung:</b></h6><p>Schonend geröstete Bohnen aus 100% Arabica verleihen diesem besonderen Kaffeegenuss ein einzigartiges Aroma. Trocken lagern und vor Wärme schützen.<br>Mild. Gemahlener Röstkaffee.</br></p><h6><b>Ursprungsland:</b></h6><p>Deutschland</p>',
  bioFirst: Math.random() >= 0.5,
},
{
  id: 4,
  productName: 'milk',
  printName: 'Milch',
  image: 'milk.png',
  imageBio: 'bio_milk.png',
  productDescriptionBio: '<h6><b>Produktbeschreibung:</b></h6><p>Bei diesen Produkten bieten wir Ihnen beste Frische und Qualität. Daher hat frische Milch nur eine kurze Haltbarkeitsdauer.<br>Frische fettarme Bio Milch, 1,5 % Fett, pasteurisiert, homogenisiert, länger haltbar.</br><p/><h6><b>Eigenschaften:</b></h6><p>Bio<br>Umweltverträgliche und ressourcenschonende Produktion.</br></p><h6><b>Ursprungsland:</b></h6><p>Deutschland</p>',
  productDescription: '<h6><b>Produktbeschreibung:</b></h6><p>Bei diesen Produkten bieten wir Ihnen beste Frische und Qualität. Daher hat frische Milch nur eine kurze Haltbarkeitsdauer.<br>Frische fettarme Milch, 1,5 % Fett, pasteurisiert, homogenisiert, länger haltbar.</br><p/><h6><b>Ursprungsland:</b></h6><p>Deutschland</p>',
  bioFirst: Math.random() >= 0.5,
},
];


window.onload = function (){
  //randomize the order of products to are displayed
  shuffleArray(items);

  document.getElementById('productName1').innerHTML=items[0].printName;;
  document.getElementById('productName2').innerHTML=items[1].printName;
  document.getElementById('productName3').innerHTML=items[2].printName;
  document.getElementById('productName4').innerHTML=items[3].printName;


    if(items[0].bioFirst){
      document.getElementById('imageFirst1').src="img/" + items[0].imageBio;
      document.getElementById('imageLast1').src="img/" + items[0].image;
      document.getElementById('productNameFirst1').innerHTML= "Bio " + items[0].printName;
      document.getElementById('productNameLast1').innerHTML=items[0].printName;
      document.getElementById('productDescriptionFirst1').innerHTML=items[0].productDescriptionBio;
      document.getElementById('productDescriptionLast1').innerHTML=items[0].productDescription;
    }
    else{
      document.getElementById('imageFirst1').src="img/" + items[0].image;
      document.getElementById('imageLast1').src="img/" + items[0].imageBio;
      document.getElementById('productNameFirst1').innerHTML= items[0].printName;
      document.getElementById('productNameLast1').innerHTML="Bio "+ items[0].printName;
      document.getElementById('productDescriptionFirst1').innerHTML= items[0].productDescription;
      document.getElementById('productDescriptionLast1').innerHTML=items[0].productDescriptionBio;
    }

    if(items[1].bioFirst){
      document.getElementById('imageFirst2').src="img/" + items[1].imageBio;
      document.getElementById('imageLast2').src="img/" + items[1].image;
      document.getElementById('productNameFirst2').innerHTML= "Bio " + items[1].printName;
      document.getElementById('productNameLast2').innerHTML=items[1].printName;
      document.getElementById('productDescriptionFirst2').innerHTML=items[1].productDescriptionBio;
      document.getElementById('productDescriptionLast2').innerHTML=items[1].productDescription;
    }
    else{
      document.getElementById('imageFirst2').src="img/" + items[1].image;
      document.getElementById('imageLast2').src="img/" + items[1].imageBio;
      document.getElementById('productNameFirst2').innerHTML= items[1].printName;
      document.getElementById('productNameLast2').innerHTML="Bio "+ items[1].printName;
      document.getElementById('productDescriptionFirst2').innerHTML= items[1].productDescription;
      document.getElementById('productDescriptionLast2').innerHTML=items[1].productDescriptionBio;
    }

    if(items[2].bioFirst){
      document.getElementById('imageFirst3').src="img/" + items[2].imageBio;
      document.getElementById('imageLast3').src="img/" + items[2].image;
      document.getElementById('productNameFirst3').innerHTML= "Bio " + items[2].printName;
      document.getElementById('productNameLast3').innerHTML=items[2].printName;
      document.getElementById('productDescriptionFirst3').innerHTML=items[2].productDescriptionBio;
      document.getElementById('productDescriptionLast3').innerHTML=items[2].productDescription;
    }
    else{
      document.getElementById('imageFirst3').src="img/" + items[2].image;
      document.getElementById('imageLast3').src="img/" + items[2].imageBio;
      document.getElementById('productNameFirst3').innerHTML= items[2].printName;
      document.getElementById('productNameLast3').innerHTML="Bio "+ items[2].printName;
      document.getElementById('productDescriptionFirst3').innerHTML= items[2].productDescription;
      document.getElementById('productDescriptionLast3').innerHTML=items[2].productDescriptionBio;
    }

    if(items[3].bioFirst){
      document.getElementById('imageFirst4').src="img/" + items[3].imageBio;
      document.getElementById('imageLast4').src="img/" + items[3].image;
      document.getElementById('productNameFirst4').innerHTML= "Bio " + items[3].printName;
      document.getElementById('productNameLast4').innerHTML=items[3].printName;
      document.getElementById('productDescriptionFirst4').innerHTML=items[3].productDescriptionBio;
      document.getElementById('productDescriptionLast4').innerHTML=items[3].productDescription;
    }
    else{
      document.getElementById('imageFirst4').src="img/" + items[3].image;
      document.getElementById('imageLast4').src="img/" + items[3].imageBio;
      document.getElementById('productNameFirst4').innerHTML= items[3].printName;
      document.getElementById('productNameLast4').innerHTML="Bio "+ items[3].printName;
      document.getElementById('productDescriptionFirst4').innerHTML= items[3].productDescription;
      document.getElementById('productDescriptionLast4').innerHTML=items[3].productDescriptionBio;
    }

}



function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}







function descriptionCheck() {
  if (document.getElementById("allRead").checked){
    window.location='productselection.html';
  }
  else {
    document.getElementById('no-selection').classList.remove('d-none');
  }
}
