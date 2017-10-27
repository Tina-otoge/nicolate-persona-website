document.getElementById("arrowGoUp").onclick = function() {
  this.className = "bounce";
  setTimeout(function() {
    try {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    } catch(e) {
        window.scroll({
            top: 0,
            left: 0
        });
    }
    this.className = "";
  }, 500);

  return false;
};

