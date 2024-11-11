// Auth0 initialisieren
const auth0 = new auth0.WebAuth({
  domain: 'http://cloud-cubeindustry.eu.auth0.com',
  clientID: 'F1fTGPC6RsEAh9IqpQbmg7nePP0x1Qxj',
  redirectUri: 'https://cubeindustry.github.io/cloud/',
  responseType: 'token id_token',
  scope: 'openid profile email'
});

// Funktion zum Einloggen
function login() {
  auth0.authorize();
}

function logout() {
  localStorage.removeItem('access_token');
  localStorage.removeItem('id_token');
  window.location.href = '/';
}

function handleAuthentication() {
  auth0.parseHash((err, authResult) => {
    if (authResult && authResult.accessToken && authResult.idToken) {
      window.location.hash = '';
      setSession(authResult);

      window.location.href = 'https://cubeindustry.github.io/cloud/cloud.html';
      
    } else if (err) {
      console.log(err);
      alert('Login fehlgeschlagen: ' + err.error);
    }
  });
}

function setSession(authResult) {
  localStorage.setItem('access_token', authResult.accessToken);
  localStorage.setItem('id_token', authResult.idToken);
}

window.onload = function () {
  handleAuthentication();
};
