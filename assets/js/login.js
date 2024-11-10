setInterval(function() {
  if localStorage.getItem('login') == 'true' {
    window.location.href = 'https://cubeindustry.github.io/cloud/index.html';
  }
}, 2000);
