function getBrowser()
{
  var str = window.navigator.userAgent;
  var i   = 0;
  var n   = 0;
  str = str.replace(/\([^)]*\)/ig, '');
  str = str.replace(/\)/ig, '');
  var arr = str.split(" ");
  while (i < arr.length) {
    if (arr[i] == '')
      i += 1;
    if (n == 2)
      return (arr[i].split('/')[0]);
    i += 1;
    n += 1;
  };
}

document.getElementById("arrowGoUp").onclick = function() {
  this.className = "bounce";
  setTimeout(function() {
    if (['Chrome', 'Firefox'].indexOf(getBrowser()) != -1) {
      window.scroll({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      window.scroll({
        top: 0,
      });
    }
    this.className = "";
  }, 500);

  return false;
};
