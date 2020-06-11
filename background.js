// chrome.webNavigation.onCompleted.addListener(function() {
//     alert("This is my favorite website!");
// }, {url: [{urlMatches : "https://*/"}]});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  // if (message.data == "changeColor") {
    // console.log(message)
    console.log("Chaning Colors")
    // alert(request)
    // alert("Chanding color!");
    var xhr = new XMLHttpRequest();
    xhr.responseType = "document"
    var paperurl = "https://paperswithcode.com/search?q_meta=&q="+request.title.replace(/\s/g,"+")
    xhr.open("GET", paperurl, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        // console.log(xhr)
        // console.log(xhr.response)
        // console.log(xhr.response.getElementsByClassName("home-page-title")[0])
        // console.log(xhr.response.getElementsByClassName("home-page-title")[0].innerText)
        var elems = xhr.response.getElementsByClassName('col-lg-9 item-content')
        if (elems.length == 0)
        {
          var txt = "No code implementation"

        }
        else {
          var txt = elems[0].childNodes[3].childNodes[3].text

        }
        var code_str = "var panels = document.getElementsByClassName('gs_ri'); "
       + "panels[" + request.ind + "].childNodes[3].innerHTML+='<a href=\"" + paperurl + "\">"
       + txt
       + "</a>';"
       // alert(code_str)
       // TODO: add dom element
        chrome.tabs.executeScript( {
          code: code_str
        });
        // innerText does not let the attacker inject HTML elements.
        // panels[0].childNodes[3].innerText = xhr.getElementsByClassName("home-page-title").textContent;
        // panels[i].childNodes[3].innerHTML += "<a href=\"/paper/unsupervised-face-normalization-with-extreme#code\">1 code implementation</a>"
      }
    }
    xhr.send();
  // }
});
