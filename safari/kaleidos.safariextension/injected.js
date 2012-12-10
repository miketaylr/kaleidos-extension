document.addEventListener("contextmenu", function(event) {
  safari.self.tab.setContextMenuEventUserInfo(event, {
    elm: event.target.nodeName,
    src: event.target.src
  });
});