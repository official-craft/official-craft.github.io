function scrollPercent() {
    return document.body.scrollTop / (document.body.scrollHeight - document.body.offsetHeight + 1);
}

function setNav() {
  var s = Math.floor(scrollPercent() * 3);
  console.log(s);
  var n = document.querySelectorAll('.nava');
  for (var i = 0; i < n.length; i++) {
    if (s == i) {
      n[i].classList.add('active');
    }
    else {
      n[i].classList.remove('active');
    }
  }
}

document.body.addEventListener('scroll', setNav);
setNav();