var paper_title = document.querySelector("#abs h1").childNodes[1].textContent;
chrome.runtime.sendMessage({title: paper_title}, function(response) {
	var a = document.createElement('a');
	a.innerText = response.txt;
	a.href = response.paper_link;
	var li = document.createElement('li');
	li.appendChild(a);
	document.querySelector(".full-text ul").appendChild(li);
});
