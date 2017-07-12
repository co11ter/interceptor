chrome.webRequest.onCompleted.addListener(function (details) {
    if (details.type == "main_frame") {
        chrome.runtime.onConnect.addListener(function(port) {
            port.postMessage({status: details.statusCode});
        });
    }
}, {urls: ["<all_urls>"]});

chrome.webRequest.onBeforeRequest.addListener(function(details) {

    return {cancel: details.type == "image" || details.type == "stylesheet" || details.type == "font"};

}, {urls: ["<all_urls>"]}, ["blocking"]);
