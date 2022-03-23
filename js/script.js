var formEl = document.forms[0];
var outEl = document.getElementById("output");







formEl.addEventListener('submit', function(e){ // event listener på submit
    e.preventDefault();

    var prodValg = []
    var rabbat = (formEl.rabbat.value/100) // gjør rabbat om til prosent
    var text1 = "" // setter text1 som string blir brukt i logic lengre ned   
    var text2 = "" // setter text2 som string blir brukt i logic lengre ned   
    var avslag = 0
    var sum = 0;

    if(formEl.nettAbb.checked) { // sjekker om bruker vil ha et internett abonnement
        var prodVal = formEl.nett.value;
        var prodName = ""
        for(var i=0;i<4;i++){ 
            if(formEl.nett[i].value == formEl.nett.value){
                prodName = formEl.nett[i].id //setter navnet til det valgte radius elementet i prodName
            }
        }
        prodValg.push({prod: prodName, val: prodVal}); // pusher objektet med navn og verdi til array 
    }
    if(formEl.tvDekode.checked){
        prodValg.push({prod: formEl.tvDekode.id, val: formEl.tvDekode.value}); // pusher TV-Dekoder som objekt til array hvis checked
    }if (formEl.wifiExtend.checked){
        prodValg.push({prod: formEl.wifiExtend.id, val: formEl.wifiExtend.value}); // pusher Wifi-Extender som objekt til array hvis checked
    }

    for (var i=0;i<prodValg.length;i++){
        avslag += prodValg[i].val*rabbat // regner ut rabbaten på alle produktene og plusser de sammen
        sum += parseInt(prodValg[i].val) // regner ut totale verdien til alle produktene
    }


    for(var i=0; i<prodValg.length;i++){ // går igjennom alle objektene i arrayen
        if(i == 0){
            text1 = prodValg[i].prod;}  // skriver ut navnet når i == 0
        else {
            text1 += " og " +prodValg[i].prod; // skriver ut " og "" + navnet når i ikke er 0
        }
    }

    for(var i=0; i<prodValg.length;i++){
        text2 += "\n"+prodValg[i].prod +" "+ prodValg[i].val +" kr"; // for alle objekter i array leg til produkt navn og pris i variabel text2
    }



    outEl.value = ( //setter verdien til textarea som texten under skal settes som
"Hei " + formEl.mottakNavn.value + " og takk for en hyggelig telefonsamtale." +
"\nSender deg som avtalt tilbud på" + text1 + 
"\nPrisen vil da bli" +
text2 +
"\nosv" + 
"\nRabatt " + formEl.rabbat.value +"%" + " Med et avslag på "+ avslag + " kr" + 
"\nTotalt " + (sum-avslag) + " kr" + // regner ut total prisen etter rabbat
"\nDet er bare å svare på denne eposten hvis du har noen spørsmål." + 
"\nMed vennlig hilsen " + formEl.sendNavn.value);
});












