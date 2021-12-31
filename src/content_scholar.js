var panels = document.getElementsByClassName('gs_ri');
// Go over all regions and add code implementations
for (var i = 0, l = panels.length; i < l; i++) {
	var title = panels[i].childNodes[0].textContent;
  chrome.runtime.sendMessage({title: title, payload: i}, function(response) {
	  var panels = document.getElementsByClassName('gs_ri');
	  var a = document.createElement('a');
	  a.innerText = response.txt;
	  a.href = response.paper_link;
	  panels[response.payload].childNodes[3].appendChild(a);
  });
}
