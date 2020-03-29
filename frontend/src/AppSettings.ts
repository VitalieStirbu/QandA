export const server =
  process.env.REACT_APP_ENV === 'production'
    ? 'https://qanda-backend-toremove.azurewebsites.net'
    : process.env.REACT_APP_ENV === 'staging'
    ? 'https://qanda-staging-backend.azurewebsites.net'
    : 'http://localhost:17525';

export const webAPIUrl = `${server}/api`;

export const authSettings = {
  domain: 'dev-cpce2vd7.auth0.com',
  client_id: 'kUEJ7wo7eEtJix54p12iyn5cCQg7XvTX',
  redirect_uri: window.location.origin + '/signin-callback',
  scope: 'openid profile QandAAPI email',
  // scope: 'stirbuvitalie@yahoo.com',
  audience: 'https://qanda',
};
