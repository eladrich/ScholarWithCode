var panels = document.getElementsByClassName('gs_ri');
// Go over all regions and add code implementations
for (var i = 0, l = panels.length; i < l; i++) {
  chrome.runtime.sendMessage({ind:i,title: panels[i].childNodes[0].textContent});
}
