function getBrowser()
{
  var str = window.navigator.userAgent;
  var i   = 0;
  var n   = 0;
  str = str.replace(/\([^)]*\)/ig, '');
  str = str.replace(/\)/ig, '');
  var arr = str.split(" ");
  while (i < arr.length) {
    if (arr[i] == '' || arr[i].startsWith("Version"))
      i += 1;
    if (n == 2)
      return (arr[i].split('/')[0]);
    i += 1;
    n += 1;
  };
}

document.getElementById("arrowGoUp").onclick = function() {
  this.className = "bounce";

  if (window.navigator.userAgent.search('OPR/') != -1)
    return true;
  if (['Chrome', 'Firefox'].indexOf(getBrowser()) != -1) {
    setTimeout(function() {
      window.scroll({
        top: 0,
        behavior: 'smooth'
      });
    }, 500);
  }
  setTimeout(function() {
    document.getElementById("arrowGoUp").className = '';
  }, 500);


  return false;
};

document.getElementById("discord").onmouseenter = function() {
  var target = document.getElementById("popup-discord");
  target.innerHTML = "Click <strong>here</strong> to copy the invite to my Discord !";
  target.className = "show";
}
document.getElementById("discord").onmouseleave = function() {
  var target = document.getElementById("popup-discord");
  target.className = '';
} 

document.getElementById("discord").onclick = function() {
  var target = document.getElementById("discord-tag");
  copyText = target.select();
  try {
    document.execCommand("Copy");
    target = document.getElementById("popup-discord").innerHTML = "<strong>Copied</strong> !";
  } catch (err) { }
}
