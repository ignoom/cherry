import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';

export default OAuth2PasswordGrant.extend({
  clientId: 'G3u3hKMH1zkeFfYYIPNCaaJaOiP3mJbW',
  serverTokenEndpoint: 'http://localhost:1337/oauth/token'
  //serverTokenRevocationEndpoint: '/revoke'
});
