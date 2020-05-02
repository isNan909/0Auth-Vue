import auth0 from 'auth0-js';

const webAuth = new auth0.WebAuth({
  domain: 'ishan-me.auth0.com',
  clientID: 'Dvi0nHAOAA8wJgITRzmKPeu5Iv3emk02',
  redirectUri: 'http://localhost:8080/callback',
  responseType: 'token id_token',
  scope: 'openid profile'
});

let token = {};

const handleAuth = cb => {
  webAuth.parseHash((error, authResult) => {
    if (authResult && authResult.accessToken && authResult.idToken) {
      token.accessToken = authResult.accessToken;
      token.idToken = authResult.idToken;
      token.expiry = new Date().getTime() + authResult.expiresIn * 1000;
      cb();
    } else {
      console.log(error);
    }
  });
};

const isLogged = () => {
  return token.accessToken && new Date().getTime() < token.expiry;
};

const login = () => {
  webAuth.authorize();
};

const logUserOut = () => {
  token = {};
};

export { login, handleAuth, isLogged, logUserOut };
