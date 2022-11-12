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


function validateData(){

    let validName = new Boolean(false);
    let valiPhone = new Boolean(false);
    let validEmail = new Boolean(false);
    let validMessage = new Boolean(false);

    
            if(/^[a-öA-Ö ]+$/.test($(document.getElementById('kontaktNamn')).val()) && $(document.getElementById('kontaktNamn')).val().trim()!=="") {
                $(document.getElementById('kontaktNamn')).css("border-color", "#7FFF00") && $(".namnKrav").css("color", "#7FFF00") && $("#namnValidering").css("visibility", "hidden");
                validName = true;
            }
            else
             {
                $(document.getElementById('kontaktNamn')).css("border-color", "red") && $(".namnKrav").css("color", "red") && $("#namnValidering").css("visibility", "visible");
                validName = false;
            }
    

            if(/^\d*$/.test($(document.getElementById('telefon')).val()) && $(document.getElementById('telefon')).val().trim()!=="") 
            {             
                    $(document.getElementById('telefon')).css("border-color", "#7FFF00") && $(".telefonKrav").css("color", "#7FFF00") && $("#telefonValidering").css("visibility", "hidden");
                    validPhone = true;
                }
                else
                 {
                    $(document.getElementById('telefon')).css("border-color", "red") && $(".telefonKrav").css("color", "red") && $("#telefonValidering").css("visibility", "visible");
                    validPhone = false;
                    }
    
                if(/^\w+([-+.'][^\s]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test($(document.getElementById('epost')).val()) && $(document.getElementById('epost')).val().trim()!=="") {
                    $(document.getElementById('epost')).css("border-color", "#7FFF00") && $(".epostKrav").css("color", "#7FFF00") && $("#epostValidering").css("visibility", "hidden");
                    validEmail = true;
                }
                else {
                    $(document.getElementById('epost')).css("border-color", "red") && $(".epostKrav").css("color", "red") && $("#epostValidering").css("visibility", "visible");
                    validEmail = false;
                }
                if(/^[a-öA-Ö0-9 $-/:-?{-~!"^_`\[\]]{10,100}$/.test($(document.getElementById('meddelande')).val()) && $(document.getElementById('meddelande')).val().trim()!=="") {
                    $(document.getElementById('meddelande')).css("outline-color", "#7FFF00") && $(".meddelandeKrav").css("color", "#7FFF00") && $("#meddelandeValidering").css("visibility", "hidden");
                    validMessage = true;
                }
                else {
                    $(document.getElementById('meddelande')).css("outline-color", "red") && $(".meddelandeKrav").css("color", "red") && $("#meddelandeValidering").css("visibility", "visible");
                    validMessage = false;
                }

                if (validName == true & validPhone == true && validEmail == true && validMessage && true)
                {
                    sendMessage();
                    location.reload();
                }
                else 
                {
                    showError();
                }

}

function sendMessage() {
    alert("Tack för ditt meddelande! Vi kommer att kontakta dig så snart vi kan.");
  }

  function showError() {
    alert("Ditt meddelande kunde inte skickas! Vänligen kontrollera alla fälten.");
  }
laddaData();

