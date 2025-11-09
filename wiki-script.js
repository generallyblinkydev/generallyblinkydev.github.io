window.addEventListener('load', function () {
  document.getElementById('wiki-search').oninput = function(){
    document.getElementById('test').textcontent = document.getElementById('wiki-search').value
  };
});
