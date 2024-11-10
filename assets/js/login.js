setInterval(function() {
  const loginStatus = localStorage.getItem('login');
  const currentPage = window.location.href;

  if (currentPage.includes('login.html') && loginStatus === 'true') {
    window.location.href = 'https://cubeindustry.github.io/cloud/index.html';
  }
  else if (currentPage.includes('index.html') && loginStatus === 'false') {
    window.location.href = 'https://cubeindustry.github.io/cloud/login.html';
  }
}, 2000);
