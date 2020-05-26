function setup() {
    noCanvas();
    let userinput = select('#userinput');
    userinput.input(changeText);

    function changeText() {
        let params = {
            active: true,
            currentWindow: true
        }
        chrome.tabs.query(params, gotTabs);

        function gotTabs(tabs) {
            console.log("tabs :");
            console.log(tabs);
            // send message to content script
            let message = userinput.value();
            let msg = {
                txt: "hello"
            }
            chrome.tabs.sendMessage(tabs[0].id, msg);
        }
    }
}


