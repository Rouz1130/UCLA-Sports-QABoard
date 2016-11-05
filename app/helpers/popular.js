
export default Ember.Helper.helper(popular);


import Ember from 'ember';

export function popular(params/*, hash*/) {
  var answer = params[0];
  if (answer.get('answers').get('length') === 0) {
    return Ember.String.htmlSafe('<span class="zero-response">(No one as Answerd yet)</span>');
  } else if (answer.get('answers').get('length') <= 5) {
    return Ember.String.htmlSafe('<span class="some-response"></span>');
  } else {
    return Ember.String.htmlSafe('<span class="many-response">(Thanks for the answer)</span>');
  }
}

export default Ember.Helper.helper(popular);
