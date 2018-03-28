const app = require('../app');
const sinon = require('sinon');

describe('app', () => {
    let sandbox;

    beforeEach('app', () => {
        sandbox = sinon.sandbox.create();
    })

    describe('sortArray', () => {
        it('returns a sorted array', () => {
            const result = app.sortArray([3, 2, 1]);
            expect(result).toEqual([1, 2, 3]);
        });
    });
    
    describe('methodToTesty', () => {
        it('returns the sum', ()=> {
            const result = app.methodToTest(1, 2, 3);
            expect(result).toEqual(6);
        })
    })

    describe('sinonSpy()', () => {
        it('uses spy to show external function was called', () => {
            const spy = sandbox.spy(Date, 'now');
            app.sinonSpy();
            expect(spy).toHaveBeenCalledOnce();
        });
    });

    afterEach(() => {
        sandbox.restore();
    })

});