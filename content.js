var port = chrome.runtime.connect();
port.onMessage.addListener(function(r) {
    var div = document.getElementById("interceptor");

    if (div === null) {
        div = document.createElement('div');
        div.id = "interceptor";

        div.innerHTML = r.status;
        document.body.appendChild(div);
    } else {
        div.innerHTML = r.status;
    }
});