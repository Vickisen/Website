/* Spara JSONObjekt */
function sparaData(){
    var sparaNamn = document.getElementById('kontaktNamn');
    var sparaTelefon = document.getElementById('telefon');
    var sparaEpost = document.getElementById('epost');
    var sparaMeddelande = document.getElementById('meddelande');

    localStorage.setItem('namn', JSON.stringify(sparaNamn.value));
    localStorage.setItem('telefonnummer', JSON.stringify(sparaTelefon.value));
    localStorage.setItem('epost', JSON.stringify(sparaEpost.value));
    localStorage.setItem('meddelande', JSON.stringify(sparaMeddelande.value));
}

/* Ladda JSONObjekt */
function laddaData(){
    var laddaNamn = document.getElementById('kontaktNamn');
    var laddaTelefon = document.getElementById('telefon');
    var laddaEpost = document.getElementById('epost');
    var laddaMeddelande = document.getElementById('meddelande');

    laddaNamn.value = JSON.parse(localStorage.getItem('namn'));
    laddaTelefon.value = JSON.parse(localStorage.getItem('telefonnummer'));
    laddaEpost.value = JSON.parse(localStorage.getItem('epost'));
    laddaMeddelande.value = JSON.parse(localStorage.getItem('meddelande'));
}
laddaData();