// Copyright (c) 2012 or whatever

safari.application.addEventListener("command", function(event) {
  var tab;
  
  if (event.command === "kaleidos") {
    tab = safari.application.activeBrowserWindow.openTab();
    tab.url = "http://coldhead.github.com/kaleidos/?src=" + event.userInfo.src;
  }
});

safari.application.addEventListener("validate", function(event) {
  //don't bother doing anything for non-images
  if (event.userInfo.elm !== "IMG") {
    event.target.disabled = true;
  }
});
