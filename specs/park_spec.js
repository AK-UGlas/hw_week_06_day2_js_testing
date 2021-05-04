const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

let park;

describe('Park', function() {

  beforeEach(function() {
    park = new Park('Jurassic Park', 2000);
    let trex = new Dinosaur('T-Rex','carnivore');
    let diplodocus = new Dinosaur('Diplodocus', 'herbivore');
    let allosaur = new Dinosaur('Allosaurus', 'carnivore');
    let tri = new Dinosaur('Tricerotops', 'herbivore');
  })

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 2000);
  });

  it('should have a collection of dinosaurs');

  it('should be able to add a dinosaur to its collection');

  it('should be able to remove a dinosaur from its collection');

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
