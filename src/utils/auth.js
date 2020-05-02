import auth0 from 'auth0-js';

const webAuth = new auth0.WebAuth({
  domain: 'ishan-me.auth0.com',
  clientID: 'Dvi0nHAOAA8wJgITRzmKPeu5Iv3emk02',
  redirectUri: 'http://localhost:8080/callback',
  responseType: 'token id_token',
  scope: 'openid profile'
});

const login = () => {
  webAuth.authorize();
};

export { login };
