console.log("Plants!");

let fileNames = [
    "plant1.png",
    "plant2.png",
    "plant3.png",
    "plant4.png",
    "plant5.png"
];

let images = document.getElementsByTagName('img');

for (elem of images) {
    let i = Math.floor(Math.random() * fileNames.length);
    let index = 'plantImages/' + fileNames[i];
    let url = chrome.extension.getURL(index);
        elem.src = url;
    console.log(url);
} 

