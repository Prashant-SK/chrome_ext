console.log("Word Def Chrome Extension running");

window.addEventListener('mouseup', wordSelected);

function wordSelected() {
    let selectedText = window.getSelection().toString();
    console.log(selected);
    if(selectedText.length > 0) {
        let message = {
            text: selectedText
        }
        chrome.runtime.sendMessage();
    }
}