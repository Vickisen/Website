/* Meny MobilVy */
const menyAnimation = () => {
    const mobilNavigation = document.querySelector('.mobilNavigation');
    const meny = document.querySelector('.menySidor');
    const menySidor = document.querySelectorAll('.menySidor li');

    //Toggle meny
    mobilNavigation.addEventListener('click', () => {
        meny.classList.toggle('aktiveraMeny');
    });
    //Animera länkarna
    menySidor.forEach((link) => {
        link.style.animation = `menySidorFade 0.5s ease forwards`;
    });
}
menyAnimation();

/* Bildspel */
var vilkenBild = 0;
var bilder = [];
var interval;
bilder[0] = '../images/Bild1.jpg';
bilder[1] = '../images/Bild2.jpg';
bilder[2] = '../images/Bild3.jpg';

var bildspel = function () {
    if (vilkenBild < bilder.length - 1) {
        vilkenBild++;
    } else {
        vilkenBild = 0;
    }
    document.getElementById("enBild").src = bilder[vilkenBild];
}
interval = setInterval(bildspel, 3000);

/* Bildspel kontrollknapp */
document.getElementById('bildspelKontroll').onclick = function () {
    var kontrollKnapp = document.getElementById('bildspelKontroll');
    if (kontrollKnapp.innerHTML === 'Stoppa bildspelet') {
        clearInterval(interval);
        kontrollKnapp.innerHTML = 'Starta bildspelet';
    } else if (kontrollKnapp.innerHTML === 'Starta bildspelet') {
        interval = setInterval(bildspel, 3000);
        kontrollKnapp.innerHTML = 'Stoppa bildspelet';
    }
}

