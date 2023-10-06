function openTab(){
    
    var newTab = browser.tabs.create({
        url:'https://en.wikipedia.org/wiki/Dog',
        active:true
    })
}

browser.browserAction.onClicked.addListener(openTab)