document.getElementById("arrowGoUp").onclick = function() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });

  return false;
};

