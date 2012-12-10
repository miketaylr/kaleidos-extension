// Copyright (c) 2012 or whatever

window.addEventListener('DOMContentLoaded', function() {
    //create the context menu item
    var sendToKaleidos = opera.contexts.menu.createItem({
      title: "Open image in Kaleidos",
      contexts: ["image"],
      icon: "butterfly_16.png",
      onclick: function(event) {
        opera.extension.tabs.create({
          url: "http://coldhead.github.com/kaleidos/?src=" + event.srcURL, 
          focused: true
        });
      }
    });
    
    //add the menu item to the context menu
    opera.contexts.menu.addItem(sendToKaleidos);
}, false);