var paper_title = document.querySelector("#abs h1").childNodes[1].textContent;
chrome.runtime.sendMessage({title: paper_title}, function(response) {
	console.log(response.txt);
	console.log(response.paper_link);
});
