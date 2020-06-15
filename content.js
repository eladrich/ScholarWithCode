var panels = document.getElementsByClassName('gs_ri');
for (var i = 0, l = panels.length; i < l; i++) {
  console.log(i)
  chrome.runtime.sendMessage({ind:i,title: panels[i].childNodes[0].textContent});
  // var txtContent = panels[i].childNodes[0].textContent;
  // if (txtContent == "Differentiable visual computing" || txtContent == "Affect-preserving Visual Privacy Protection") {
    // panels[i].childNodes[3].innerHTML += "<a href=\"/paper/unsupervised-face-normalization-with-extreme#code\">1 code implementation</a>"
}

//chrome.runtime.sendMessage({ind:"5",title:"Differentiable Visual Computing"})
// var xhr = new XMLHttpRequest();
// xhr.responseType = "document"
// xhr.open("GET", "https://paperswithcode.com", true);
// xhr.onreadystatechange = function() {
//   if (xhr.readyState == 4) {
//     console.log(xhr)
//     console.log(xhr.response)
//     console.log(xhr.response.getElementsByClassName("home-page-title")[0])
//     console.log(xhr.response.getElementsByClassName("home-page-title")[0].innerText)
//     // innerText does not let the attacker inject HTML elements.
//     // panels[0].childNodes[3].innerText = xhr.getElementsByClassName("home-page-title").textContent;
//   }
// }
// xhr.send();
