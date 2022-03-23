var formEl = document.forms[0];
var outEl = document.getElementById("output");







formEl.addEventListener('submit', function(e){
    e.preventDefault();
    var prodValg = []
    var rabbat = (formEl.rabbat.value/100)
    var avslag = 0
    var sum = 0;

    if(formEl.nettAbb.checked) {
        var prodVal = formEl.nett.value;
        var prodName = ""
        for(var i=0;i<4;i++){
            if(formEl.nett[i].value == formEl.nett.value){
                prodName = formEl.nett[i].id
            }
        }
        prodValg.push({prod: prodName, val: prodVal});
    }
    if(formEl.tvDekode.checked){
        prodValg.push({prod: formEl.tvDekode.attributes["id"].value, val: formEl.tvDekode.value});
    }if (formEl.wifiExtend.checked){
        prodValg.push({prod: formEl.wifiExtend.id, val: formEl.wifiExtend.value});
    }
    console.log(prodValg)

    for (var i=0;i<prodValg.length;i++){
        avslag += prodValg[i].val*rabbat
        sum += parseInt(prodValg[i].val)
    }
    console.log(sum)
    console.log(avslag)
    var text1 = ""   
    for(var i=0; i<prodValg.length;i++){
        if(prodValg.length == 1){
            text1 = "\n"+prodValg[i].prod +" "+ prodValg[i].val +" kr";
        }else {
            text1 += "\n"+prodValg[i].prod +" "+ prodValg[i].val +" kr";
        }
    }
    var text2 = ""
    for(var i=0; i<prodValg.length;i++){
        if(prodValg.length == 1){
            text1 = "\n"+prodValg[i].prod +" "+ prodValg[i].val +" kr";
        }else {
            text1 += "\n"+prodValg[i].prod +" "+ prodValg[i].val +" kr";
        }
    }
    console.log(text1)





    "Hei " + formEl.mottakNavn.value + " og takk for en hyggelig telefonsamtale."
"\nSender deg som avtalt tilbud på"
"\nPrisen vil da bli" +
"\n<produkt1> <pris produkt 1> " + " kr" +
"\n<produkt2> <pris produkt 2> " + " kr" +
"\nosv" + 
"\nRabatt" + formEl.rabbat.value +"%" + " Med et avslag på "+ avslag + " kr" + 
"\nTotalt" + (sum-avslag) + " kr" +
"\nDet er bare å svare på denne eposten hvis du har noen spørsmål." + 
"\nMed vennlig hilsen " + formEl.sendNavn.value
});












