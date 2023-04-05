function getBotResponse(input) {
    let clean = removePunctuation(input);
    //window.alert(clean); debug
    const sentence = clean.split(" ");


    let iqmsC = 0;
    let harmonyC = 0;
    let xchangeC = 0;
    let plpC = 0;

    if (sentence.length == 1) {
        if (sentence[0].toUpperCase() === "HELLO") {
            return "Hi there! How can I help you?";
        } else if (sentence[0].toUpperCase() === "GOODBYE") {
            return "Hope I helped!";
        } else {
            return "Could you please try asking something else?"
        }
    } else {
        for (var i = 0; i < sentence.length; i++) {
            if (sentence[i].toUpperCase() === "IQMS") {
                iqmsC++;
            } else if (sentence[i].toUpperCase() === "HARMONY") {
                harmonyC++;         
            } else if (sentence[i].toUpperCase() === "XCHANGE" || sentence[i].toUpperCase() === "EXCHANGE") {
                xchangeC++;
            } else if (sentence[i].toUpperCase() === "PLP") {
                plpC++;
            }
        }
        if ((iqmsC > harmonyC) && (iqmsC > xchangeC) && (iqmsC > plpC)) {
            return iqmsResponse();
        }
        else if ((harmonyC > iqmsC) && (harmonyC > xchangeC) && (harmonyC > plpC)) {
            return harmonyResponse();
        }
        else if ((xchangeC > iqmsC) && (xchangeC > harmonyC) && (xchangeC > plpC)) {
            return xchangeResponse();
        }
        else if ((plpC > iqmsC) && (plpC > harmonyC) && (plpC > xchangeC)) {
            return plpResponse();
        } else {
            return "I'm not sure what you're asking for. Could you please make an IT ticket?"
        }
    }
}

function removePunctuation(string) {
    return string.replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g,"");
  }

function iqmsResponse() {
    return "It sounds like you are looking for the iQMS page link: https://iqms.fgfbrands.com";
}

function harmonyResponse() {
    return "It sounds like you are looking for the Harmony page link: https://fgfbrands.service-now/sp";
}

function xchangeResponse() {
    return "It sounds like you are looking for the FGF XChange link: https://fgfxchange.fgfbrands.com";   
}

function plpResponse() {
    return "It sounds like you are looking for the PLP link: https://pep.fgfbrands.com";
}
