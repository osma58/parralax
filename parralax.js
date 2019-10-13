function verwerkScrollEvent() {
  let scrollWaarde = this.pageYOffset;
  let scroll2 = document.getElementsByClassName("deel--2")[0].scrollTop;
  console.log(scrollWaarde);
  pasDeel2Aan(scrollWaarde);

  pasNavigatieAan(scrollWaarde);

  pasVoortgangAan(scrollWaarde);

  if(scrollWaarde > 1800) {
    voegClassToe();
  } else {
    verwijderClass();
  }
  pasVoortgangAan(scrollWaarde);
}

const documentHoogte = document.body.offsetHeight;
const viewpoortHoogte = window.innerHeight;
let nav = document.getElementById('nav');
let laatsteScrollpas = 0;


window.addEventListener('scroll', verwerkScrollEvent);

const pasNavigatieAan = (getal) => {
  if(getal>laatsteScrollpas) {
    console.log("de gaat naar boven");
    laatsteScrollpas = getal;
    nav.style.top="-3em";
  } else {
      console.log("de pagine gaat naar beneden");
      laatsteScrollpas = getal;
      nav.style.top=0;
     
  }

}


const pasDeel2Aan = (getal) => {
  document.getElementsByClassName('deel--2')[0].style.backgroundPositionY = -getal/14 + 'px';
  if (getal>400) {
    let tussenruimte = getal-400;
    document.getElementsByClassName('deel__span--links')[0].style.marginLeft = -tussenruimte/2 + 'px';
    document.getElementsByClassName('deel__span--rechts')[0].style.marginLeft = tussenruimte*2 + 'px';
  } else {
    document.getElementsByClassName('deel__span--links')[0].style.marginLeft = 0;
    document.getElementsByClassName('deel__span--rechts')[0].style.marginLeft = 0;
  }
}

const voegClassToe = () => {
  let alleSecties = document.getElementsByTagName('section');
  for(let i = 0; i< alleSecties.length; i++) {
    alleSecties[i].classList.add('accent');
  }
}

const verwijderClass = () => {
  let alleSecties = document.getElementsByTagName('section');
  for(let i = 0; i< alleSecties.length; i++) {
    alleSecties[i].classList.remove('accent');
  }
}

const pasVoortgangAan = (getal) => {
  let voortgang = getal*100/(documentHoogte - viewpoortHoogte) + "%";
  console.log(voortgang);

  document.getElementById('voortgang').style.width = voortgang;
}