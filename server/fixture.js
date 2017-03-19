console.log('testing');
 if( Drugs.find().count() === 0 ) {
   console.log('running');
    var drugs = [
      { drug: "Test Drug", drugDosage: 10, numCapsules: 30, pricePerMg: 100},
      { drug: "Test Drug 2", drugDosage: 30, numCapsules: 30, pricePerMg: 200},
      { drug: "Test Drug 3", drugDosage: 30, numCapsules: 30, pricePerMg: 200}
    ];

    _.each(drugs, function(drug) {
      Drugs.insert(drug);
    });
  }
