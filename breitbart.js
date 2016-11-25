var elements = document.getElementsByClassName("logo")
var logo = browser.extension.getURL("img/breitbart.jpg")

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    element.setAttribute("style", "background:url(" + logo + "); background-size: 96px 76px");
}

document.head = document.head || document.getElementsByTagName('head')[0];

function changeFavicon(src) {
    var link = document.createElement('link'),
        oldLink = document.getElementById('dynamic-favicon');
    link.id = 'dynamic-favicon';
    link.rel = 'shortcut icon';
    link.href = src;
    if (oldLink) {
        document.head.removeChild(oldLink);
    }
    document.head.appendChild(link);
}

changeFavicon(logo)