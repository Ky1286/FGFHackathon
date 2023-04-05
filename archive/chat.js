var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

function getTime() {
    let today = new Date();
    hours = today.getHours();
    mins = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (mins < 10) {
        mins = "0" + mins;
    }

    let time = hours + ":" + mins;
    return time;
}

function firstBotMessage() {
    let firstMessage = "Hi there! My name is B1u3-b3rry. How can I help you today?"
    document.getElementById("botStarterMessage").innerHTML = '<p class="boxText"><span>' + firstMessage + '</span></p>';

    let time = getTime();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="boxText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function getResponse() {
    let userText =  $("#textInput").val();

    if (userText == "") {
        window.alert("Please enter a valid message!");
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("textInput").val("");
    $("#chat-box").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)
}

function sendButton() {
    getResponse();
}

function heartButton() {
    buttonSendText("Heart clicked!");
}

$("#textInput").keypress(function(e) {
    if (e.which == 13) {
        getResponse();
    }
});