document.getElementById("arrowGoUp").onclick = function() {
  this.className = "bounce";
  setTimeout(function() {
    if (window.navigator.userAgent.match(/Chrome|Gecko/)) {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
    else {
        window.scroll({
            top: 0,
            left: 0
        });
    }
    this.className = "";
  }, 500);

  return false;
};

