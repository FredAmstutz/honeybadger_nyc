class Snowman {
    constructor(name) {
        this.name = name;
        this.carrotNose = true;
        this.stickArms = true;
    }

    likesWarmHugs() {
        return this.name  === 'Olaf';
    }
}

module.exports = Snowman;