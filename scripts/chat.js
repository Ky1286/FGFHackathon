var collapse = document.getElementsByClassName("collapsible");

for (let i = 0; i < collapse.length; i++) {
    collapse[i].addEventListener("click", function() {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    })
}

function getTime() {
    let currentTime = new Date();
    hrs = currentTime.getHours();
    mins = currentTime.getMinutes();

    if (hrs < 10) {
        hrs = "0" + hrs;
    }

    if (mins < 10) {
        minutes = "0" + mins;
    }

    let time = hours + ":" + mins;
    return time;
}

function firstBotMessage() {
    let firstMessage = "Hi there! My name is B1u3-b3rry. How can I help you today?"
}