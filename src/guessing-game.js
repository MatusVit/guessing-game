class GuessingGame {
    constructor() {

    }

      

    setRange(min, max) {
        this.min = min;
        this.max = max;

    }

    guess() {
        this.number =  Math.floor(this.min + Math.random()*(this.max-this.min));
        return this.number;
    }

    lower() {
        this.max = this.number;
    }

    greater() {
        this.min = this.number;
    }
}

module.exports = GuessingGame;
