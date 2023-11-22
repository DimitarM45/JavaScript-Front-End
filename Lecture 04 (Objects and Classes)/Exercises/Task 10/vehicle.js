class Vehicle {
    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.parts = parts;
        this.fuel = fuel;
        this.parts.quality = this.parts.engine * this.parts.power; 
    }

    type;
    model;
    fuel;
    parts = {
        engine: 1,
        power: 1,
    };

    drive = (fuelLoss) => {
       this.fuel -= fuelLoss;
    }
}