setInterval(function() {
  if localStorage.getItem('login') == 'true' {
    window.location.href = 'https://cubeindustry.github.io/cloud/index.html';
  } else{
    window.location.href = 'https://cubeindustry.github.io/cloud/login.html';
  }
}, 2000);
