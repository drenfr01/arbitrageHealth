Meteor.publish('drugs', function(selector, options) {


  return Drugs.find(selector);
});
