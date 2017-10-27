document.getElementById("arrowGoUp").onclick = function() {
  this.className = "bounce";
  setTimeout(function() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    this.className = "";
  }, 500);

  return false;
};

