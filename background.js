chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = "document"
    var paperurl = "https://paperswithcode.com/search?q_meta=&q="+request.title.replace(/\s/g,"+") //Search in PapersWithCode
    xhr.open("GET", paperurl, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        var elems = xhr.response.getElementsByClassName('col-lg-9 item-content')
        if (elems.length == 0)
        {
          var txt = "no code implementation"; // No results
        }
        else {
          var title = elems[0].childNodes[1].textContent.toUpperCase()
          if (title == request.title.toUpperCase()){
            var txt = elems[0].childNodes[3].childNodes[3].text;
          }
          else {
            var txt = "no code implementation"; // No result with same title
          }
        }
       var code_str = "var panels = document.getElementsByClassName('gs_ri');"
       +"var a = document.createElement('a');"
       +"a.innerText =\"" + txt +"\";"
       +"a.href =\"" + paperurl +"\";"
      + "panels[" + request.ind + "].childNodes[3].appendChild(a);"

        chrome.tabs.executeScript( {
          code: code_str
        });
      }
    }
    xhr.send();
});
