window.addEventListener('load', function () {
  document.getElementById('wiki-search').oninput = function(){
    document.getElementById('test').innerHTML = document.getElementById('wiki-search').value
    fetch('/wikis/bloodloss/test-page.txt')
      .then(response => response.text())
      .then(data => document.getElementById('page').innerHTML = data);
  };
});
