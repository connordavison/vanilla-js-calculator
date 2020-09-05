import { expect } from 'chai';
import NumberInput from 'app/model/NumberInput';

describe('NumberInput', () => {
    let input: NumberInput;

    beforeEach(() => {
        input = new NumberInput();
    });

    it('should start empty', () => {
        expect(input.toString()).to.equal('0');
    });

    it('should ignore multiple zeroes at the beginning of input', () => {
        input.pushDigit('0')
        input.pushDigit('0')
        input.pushDigit('0');

        expect(input.toString()).to.equal('0');

        input.pushDigit('2')
        input.pushDigit('0')
        input.pushDigit('0');

        expect(input.toString()).to.equal('200');
    });

    it('should combine sequential number presses', () => {
        input.pushDigit('3')
        input.pushDigit('5');
        expect(input.toString()).to.equal('35');
    });

    it('should allow decimal input', () => {
        input.pushDigit('3')
        input.pushPeriod()
        input.pushDigit('1')
        input.pushDigit('4');

        expect(input.toString()).to.equal('3.14');
    });

    it('should ignore multiple decimal points', () => {
        input.pushDigit('9')
        input.pushPeriod()
        input.pushPeriod()
        input.pushDigit('8');

        expect(input.toString()).to.equal('9.8');
    });

    it('should allow negation of number', () => {
        input.pushSign();

        expect(input.toString()).to.equal('0');

        input.pushDigit('1');
        input.pushDigit('2');

        expect(input.toString()).to.equal('-12');

        input.pushSign();

        expect(input.toString()).to.equal('12');
    });

    it('should delete one digit at a time', () => {
        input.pushDigit('3')
        input.pushPeriod()
        input.pushDigit('1')
        input.pushDigit('4')
        input.toString();

        for (const expected of ['3.14', '3.1', '3.', '3', '0']) {
            expect(input.toString()).to.equal(expected);
            input.delete();
        }
    });

    it('should ignore operators', () => {
        input.pushDigit('3');
        input.pushOperator('+');
        input.pushDigit('4');

        expect(input.toString()).to.equal('34');
    });
});
