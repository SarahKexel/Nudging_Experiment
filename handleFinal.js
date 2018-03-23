function forwardToUniPark() {
  let bananasBio = sessionStorage.getItem('bananasBio');
  let bananasBio2 = sessionStorage.getItem('bananasBio2');
  let bananasBioFirst = sessionStorage.getItem('bananasBioFirst');
  let bananasNudge = sessionStorage.getItem('bananasNudge');
  let bananasTendency = sessionStorage.getItem('bananasTendency');
  let tomatoesBio = sessionStorage.getItem('tomatoesBio');
  let tomatoesBio2 = sessionStorage.getItem('tomatoesBio2');
  let tomatoesBioFirst = sessionStorage.getItem('bananasBio2');
  let tomatoesNudge = sessionStorage.getItem('tomatoesNudge');
  let tomatoesTendency = sessionStorage.getItem('tomatoesTendency');
  let coffeeBio = sessionStorage.getItem('coffeeBio');
  let coffeeBio2 = sessionStorage.getItem('coffeeBio2');
  let coffeeBioFirst = sessionStorage.getItem('coffeeBioFirst');
  let coffeeNudge = sessionStorage.getItem('coffeeNudge');
  let coffeeTendency = sessionStorage.getItem('coffeeTendency');
  let milkBio = sessionStorage.getItem('milkBio');
  let milkBio2 = sessionStorage.getItem('milkBio2');
  let milkBioFirst = sessionStorage.getItem('milkBioFirst');
  let milkNudge = sessionStorage.getItem('milkNudge');
  let milkTendency = sessionStorage.getItem('milkTendency');
  let nudgeDisclosure = sessionStorage.getItem('disclosure');


  let forwardString = 'https://www.unipark.de/uc/KIT_IISM_ISSD_Maedche/9f58/'
  + '?a=' + bananasBio
  + '&b=' + bananasBio2
  + '&c=' + bananasBioFirst
  + '&d=' + bananasNudge
  + '&e=' + bananasTendency
  + '&f=' + tomatoesBio
  + '&g=' + tomatoesBio2
  + '&h=' + tomatoesBioFirst
  + '&i=' + tomatoesNudge
  + '&j=' + tomatoesTendency
  + '&k=' + coffeeBio
  + '&l=' + coffeeBio2
  + '&m=' + coffeeBioFirst
  + '&n=' + coffeeNudge
  + '&o=' + coffeeTendency
  + '&p=' + milkBio
  + '&q=' + milkBio2
  + '&r=' + milkBioFirst
  + '&s=' + milkNudge
  + '&t=' + milkTendency
  + '&u=' + nudgeDisclosure

  window.location.href=forwardString;
}
