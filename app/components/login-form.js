import Ember from 'ember';
const { service } = Ember.inject;
export default Ember.Component.extend({
  session: service('session'), // Taken from simple auth docs
  //authenticator: 'authenticator:custom', // TODO change this authenticator
  actions: {
    authenticate: function() {
      var credentials = this.getProperties('identification', 'password');
      this.get('session').authenticate('authenticator:oauth2', credentials).catch((message) => {
        this.set('errorMessage', message);
      });
    }
  }
});
