const Park = function(name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];
    this.diets = {'carnivore': 0,
                  'herbivore': 0,
                  'omnivore': 0}
};

Park.prototype.addDinosaur = function(dinosaur) {
    this.dinosaurs.push(dinosaur);
    this.diets[dinosaur.diet] += 1;
};

Park.prototype.removeDinosaur = function(dinosaur) {
    const index = this.dinosaurs.indexOf(dinosaur);
    if (index != -1) {
        this.dinosaurs.splice(index, 1);
    }
}

Park.prototype.findMostLucrative = function() {
    // if collection is empty, return error msg
    if (this.dinosaurs.length === 0) {
        return 'No dinosaurs in collection';
    }
    // assign first dino as the most lucrative
    let bestDino = this.dinosaurs[0];

    if (this.dinosaurs.length > 1) {
        for (let d = 1; d < this.dinosaurs.length; d++) {
            if (this.dinosaurs[d].guestsAttractedPerDay > bestDino.guestsAttractedPerDay) {
                bestDino = this.dinosaurs[d];
            }
        }
    }
    return bestDino;         
}

Park.prototype.findSpecies = function(species) {
    let dinoOfSpecies = [];
    for (dino of this.dinosaurs) {
        if (dino.species == species) {
            dinoOfSpecies.push(dino);
        }
    }
    return dinoOfSpecies;
}

Park.prototype.dailyVisitors = function() {
    let visitors = 0;
    for (dino of this.dinosaurs) {
        visitors += dino.guestsAttractedPerDay;
    }
    return visitors;
}

Park.prototype.annualVisitors = function () {
    return this.dailyVisitors() * 365;
};

Park.prototype.annualNetIncome = function() {
    return this.annualVisitors() * this.ticketPrice;
}

Park.prototype.removeSpecies = function(species) {
    let newDinos = [];
    for (dino of this.dinosaurs) {
        if (dino.species !== species) {
            newDinos.push(dino);
        };
    };
    this.dinosaurs = newDinos;
}

module.exports = Park;