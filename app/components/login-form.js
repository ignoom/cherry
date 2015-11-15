import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'), // Taken from simple auth docs
  //authenticator: 'authenticator:custom', // TODO change this authenticator
  actions: {
    authenticate: function() {
      var credentials = this.getProperties('identification', 'password');
      this.get('session').authenticate('authenticator:custom', credentials).catch((message) => {
        this.set('errorMessage', message);
      });
    }
  }
});
