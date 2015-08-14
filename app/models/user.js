import DS from 'ember-data';

export default DS.Model.extend({
  email:     DS.attr('string'),
  password:  DS.attr('string'),
  firstName: DS.attr('string'),
  lastName:  DS.attr('string'),
  bio:       DS.attr('string'),
  birthday:  DS.attr('date'),

  fullName: function() {
    var firstName = this.get('firstName') || '';
    var lastName = this.get('lastName') || '';

    return firstName + ' ' + lastName;
  }.property('firstName', 'lastName'),
});
