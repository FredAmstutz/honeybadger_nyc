let Snowman = require('../snowman');

describe('Snowman', () => {
    let snowman;
    let name;

    beforeEach(() => {
        name = 'Olaf';
        snowman = new Snowman(name);
    });

    describe('', function() {
        it('has a name', function() {
            expect(snowman.name).toBe(name);
        });

        it('has a carrot nose', function() {
            expect(snowman.carrotNose).toBe(true);
        });

        it('has stick arms', function() {
            expect(snowman.stickArms).toBe(true);
        });

        describe('likesWarmHugs()', function() {
            it('returns true if the snowman name is Olaf', function() {
                const result = likesWarmHugs();
                expect(result).toBe(true);
            });

            it('returns false if snowman is not named Olaf', function() {
                expect(snowman.name === 'Olaf').toBe(false);
            });
        });
    });

});