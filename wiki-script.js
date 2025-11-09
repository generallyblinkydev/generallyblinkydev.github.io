window.addEventListener('load', function () {
  document.getElementById('wiki-search').oninput = function(){
    document.getElementById('test').innerHTML = document.getElementById('wiki-search').value
  };
});
