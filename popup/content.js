console.log("Popup extension activated");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, response) {
    console.log(message);

    if (message.msg = "hello"){
        let paragraphs = document.getElementsByTagName('p');
        for (elt of paragraphs) {
            elt.style['background-color'] = '#FF00FF';
        }
    }
}