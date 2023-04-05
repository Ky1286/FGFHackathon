function getBotResponse(input) {

    const sentence = input.split(" ");

    let iqmsC = 0;
    let harmonyC = 0;
    let xchangeC = 0;
    let plpC = 0;

    if (sentence.length == 1) {
        if (input.toUpperCase() === "HELLO") {
            return "Hello there!";
        } else if (input.toUpperCase() === "GOODBYE") {
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
            } else if (sentence[i].toUpperCase() === "XCHANGE") {
                xchangeC++;
            } else if (sentence[i].toUpperCase() === "PLP") {
                plpC++;
            }
        }

    }
}

function iqmsResponse() {
    return "It sounds like you are looking for the iQMS link: https://iqms.fgfbrands.com";
}

function harmonyResponse() {
    return "It sounds like you are looking for the Harmony page link: https://fgfbrands.service-now/sp";
}

function xchangeResponse() {
    return "It sounds like you are looking for the FGF XChange link: ";   
}

function plpResponse() {
    return "It sounds like you are looking for the PLP link: https://pep.fgfbrands.com";
}
