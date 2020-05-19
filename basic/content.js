console.log("Chrome ext go?");

let paragraphs = document.getElementsByTagName('p');
for (elt of paragraphs) {
    elt.style['background-color'] = '#FF00FF';
}

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, response) {
    console.log(message.msg);
}