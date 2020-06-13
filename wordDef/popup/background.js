console.log("background running");

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
    let text = {
        msg: "hello"
    }
    chrome.tabs.sendMessage(tab.id, text);

}