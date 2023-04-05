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

}

function harmonyResponse() {
    
}

function xchangeResponse() {
    
}

function plpResponse() {
    
}