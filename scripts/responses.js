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
        const confidence = [iqmsC, harmonyC, xchangeC, plpC];
        let highest = 0;
        for (var i = 0; i < 4; i++) {
            if (confidence[i] > highest) {
                highest = i;
            }
        }
        if (highest == 0) {
            return iqmsResponse();
        } else if (highest == 1) {
            return harmonyResponse();
        } else if (highest == 2) {
            return xchangeResponse();
        } else if (highest == 3) {
            return plpResponse();
        }
    }
}

function iqmsResponse() {
    var response = "It sounds like you are looking for the iQMS link:";
    return response + <a href= "www.iqms.fgfbrands.com"> "https://iqms.fgfbrands.com" </a>;
}

function harmonyResponse() {
    var response = "It sounds like you are looking for the Harmony page link:";
    return response + <a href= "https://fgfbrands.service-now/sp"> "https://fgfbrands.service-now/sp"</a>;
}

function xchangeResponse() {
    var response = "It sounds like you are looking for the FGF XChange link:";
    return response + <a href= "https://fgfxchange.fgfbrands.com"> "https://fgfxchange.fgfbrands.com" </a>;   
}

function plpResponse() {
    var response = "It sounds like you are looking for the PLP link:";
    return response + <a href= "https://pep.fgfbrands.com"> "https://pep.fgfbrands.com"</a>;
}
