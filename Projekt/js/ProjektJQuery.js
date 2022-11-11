/* Formulär validering */ 
$(document).ready(function() {
    $('#kontaktNamn').keyup(function() {
        if(/^[a-öA-Ö ]+$/.test($(this).val()) && $(this).val().trim()!=="") {
            $(this).css("border-color", "#7FFF00") && $(".namnKrav").css("color", "#7FFF00") && $("#namnValidering").css("visibility", "hidden");
        }
        else {
            $(this).css("border-color", "red") && $(".namnKrav").css("color", "red") && $("#namnValidering").css("visibility", "visible");
        }
    });
        $('#telefon').keyup(function() {
            if(/^\d*$/.test($(this).val()) && $(this).val().trim()!=="") {
                $(this).css("border-color", "#7FFF00") && $(".telefonKrav").css("color", "#7FFF00") && $("#telefonValidering").css("visibility", "hidden");
            }
            else {
                $(this).css("border-color", "red") && $(".telefonKrav").css("color", "red") && $("#telefonValidering").css("visibility", "visible");
                }
    });
        $('#epost').keyup(function() {
            if(/^\w+([-+.'][^\s]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test($(this).val()) && $(this).val().trim()!=="") {
                $(this).css("border-color", "#7FFF00") && $(".epostKrav").css("color", "#7FFF00") && $("#epostValidering").css("visibility", "hidden");
            }
            else {
                $(this).css("border-color", "red") && $(".epostKrav").css("color", "red") && $("#epostValidering").css("visibility", "visible");
            }
    });
        $('#meddelande').keyup(function() {
            if(/^[a-öA-Ö0-9 $-/:-?{-~!"^_`\[\]]{10,100}$/.test($(this).val()) && $(this).val().trim()!=="") {
                $(this).css("outline-color", "#7FFF00") && $(".meddelandeKrav").css("color", "#7FFF00") && $("#meddelandeValidering").css("visibility", "hidden");
            }
            else {
                $(this).css("outline-color", "red") && $(".meddelandeKrav").css("color", "red") && $("#meddelandeValidering").css("visibility", "visible");
            }
    });

    /* Validerar ifall ett JSONOjekt har lästs in */
    $(window).on("load", function() {

        var namnet = $('#kontaktNamn');
        if(/^[a-öA-Ö ]+$/.test($(namnet).val()) && $(namnet).val().trim()!=="") {
            $(namnet).css("border-color", "#7FFF00") && $(".namnKrav").css("color", "#7FFF00") && $("#namnValidering").css("visibility", "hidden");
        }
        else {
            $(namnet).css("border-color", "red") && $(".namnKrav").css("color", "red") && $("#namnValidering").css("visibility", "visible");
        }

        var numret = $('#telefon');
        if(/^\d*$/.test($(numret).val()) && $(numret).val().trim()!=="") {
            $(numret).css("border-color", "#7FFF00") && $(".telefonKrav").css("color", "#7FFF00") && $("#telefonValidering").css("visibility", "hidden");
        }
        else {
            $(numret).css("border-color", "red") && $(".telefonKrav").css("color", "red") && $("#telefonValidering").css("visibility", "visible");
            }

        var eposten = $('#epost');
        if(/^\w+([-+.'][^\s]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test($(eposten).val()) && $(eposten).val().trim()!=="") {
            $(eposten).css("border-color", "#7FFF00") && $(".epostKrav").css("color", "#7FFF00") && $("#epostValidering").css("visibility", "hidden");
        }
        else {
            $(eposten).css("border-color", "red") && $(".epostKrav").css("color", "red") && $("#epostValidering").css("visibility", "visible");
        }

        var meddelandet = $('#meddelande');
        if(/^[a-öA-Ö0-9 $-/:-?{-~!"^_`\[\]]{10,100}$/.test($(meddelandet).val()) && $(meddelandet).val().trim()!=="") {
            $(meddelandet).css("outline-color", "#7FFF00") && $(".meddelandeKrav").css("color", "#7FFF00") && $("#meddelandeValidering").css("visibility", "hidden");
        }
        else {
            $(meddelandet).css("outline-color", "red") && $(".meddelandeKrav").css("color", "red") && $("#meddelandeValidering").css("visibility", "visible");
        }

    });

    /* Animering gömma karta */
    $('#hideKarta').click(function() {
        $('.karta').hide(800);
        $('#hideKarta').hide(800);
    });

});



