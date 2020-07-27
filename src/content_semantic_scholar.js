let observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (!mutation.addedNodes) return
        for (let i = 0; i < mutation.addedNodes.length; i++) {
            let node = mutation.addedNodes[i];
            if (!node.classList.contains('fresh-serp')) return
            var results = document.getElementsByClassName('search-result-title');
            // Go over all regions and add code implementations
            for (let i = 0, l = results.length; i < l; i++) {
                var title = results[i].childNodes[0].childNodes[0].textContent;
                chrome.runtime.sendMessage({title: title, payload: i}, function(response) {
                    var results = document.getElementsByClassName('paper-actions');				
					var result = results[response.payload];
					var a = result.firstChild.cloneNode(true);
                    a.firstChild.childNodes[0].classList[1] = "icon-fa-code";
					a.firstChild.childNodes[1].innerText = response.txt;
                    a.href = response.paper_link;
                    result.appendChild(a);
                });
            }
        }
    })
})

observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: false,
    characterData: false
})

// stop watching using:
// observer.disconnect()

/*
paper-actions example element:

<a class="icon-button paper-link" data-selenium-selector="paper-link" data-heap-id="paper_link_target" data-heap-link-type="ieee" data-heap-direct-pdf-link="false" data-heap-unpaywall-link="false" data-heap-primary-link="true" data-heap-paper-id="f401f5067c35ae034cc6aedb9bbc876ebb5b570a" target="_blank" href="http://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&amp;arnumber=9010003">
   <span class="flex-row-centered">
      <svg width="15" height="15" class="icon-svg icon-fa-link-out" data-selenium-selector="icon-fa-link-out">
         <use xlink:href="#fa-link-out"></use>
      </svg>
      <span class="icon-button-text">View on IEEE</span>
   </span>
</a>

*/