import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
Session.set('drugName', 'All');


Template.info.onCreated(function() {
  var template = this;
  template.autorun(function() {
    let selector = {}
    if(Session.get('drugName') !== 'All') {
      selector = {drug: Session.get('drugName')}
    }
    console.log(selector)
    template.subscribe('drugs', selector); 
  });
});

Template.info.helpers({
  getDrugs() {
    let drugs = Drugs.find().fetch();
    let drugPriceMgMin = _.min(_.pluck(drugs, 'pricePerMg'));
    const newDrugList = _.map(drugs, function(drug) {
      drug.priceDifference = Math.round(drug.pricePerMg / drugPriceMgMin * 10) / 10;
      return drug;
    });
    debugger;
    return newDrugList;
  },
  getDrugNames() {
    const drugList = _.pluck(Drugs.find({}, {fields: {drug: 1}}).fetch(), 'drug');
    return _.uniq(drugList);
  },
});

Template.info.events({
  'change #drugNameFilter': function() {
    Session.set("drugName", $("#drugNameFilter").val());
  },
});
