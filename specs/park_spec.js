const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

let park;
let trex;
let diplodocus;
let allosaur;
let trike;

describe('Park', function() {

  beforeEach(function() {
    park = new Park('Jurassic Park', 2000);
    trex = new Dinosaur('T-Rex','carnivore', 200);
    diplodocus = new Dinosaur('Diplodocus', 'herbivore', 250);
    allosaur = new Dinosaur('Allosaurus', 'carnivore', 150);
    trike = new Dinosaur('Tricerotops', 'herbivore', 100);

    // add some dinosaurs to park collection
    park.addDinosaur(trike);
    park.addDinosaur(trex);
  })

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 2000);
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [trike, trex]);
  });

  it('should be able to add a dinosaur to its collection', function() {
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 2)
  });

  it('should be able to remove a dinosaur from its collection', function() {
    let isRemoved = park.removeDinosaur(trex); 
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 1)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    const actual = park.findMostLucrative();
    assert.deepStrictEqual(actual, trex)
  });

  it('should be able to find all dinosaurs of a particular species', function() {
    park.addDinosaur(trex);
    const actual = park.findSpecies('T-Rex');
    assert.deepStrictEqual(actual, [trex, trex])
  });

  it('should be able to calculate the total number of visitors per day', function() {
    const actual = park.dailyVisitors()
    assert.strictEqual(actual, 300);
  });

  it('should be able to calculate the total number of visitors per year', function() {
    const actual = park.annualVisitors();
    assert.strictEqual(actual, 300 * 365);
  });


  it('should be able to calculate total revenue for one year', function() {
    const actual = annualNetIncome();
    assert.strictEqual(actual, 300 * 365 * 2000)
  });

});
