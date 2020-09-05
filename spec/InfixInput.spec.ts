import { expect } from 'chai';
import InfixInput from 'app/model/InfixInput';
import NumberInput from 'app/model/NumberInput';

describe('InfixInput', () => {
    let input: InfixInput;

    beforeEach(() => {
        input = new InfixInput(new NumberInput());
    });

    it('should append operators after number inputs', () => {
        input.pushDigit('1');
        input.pushOperator('+');

        expect(input.toString()).to.equal('1 +');
    });

    it('should update the last operator if not on number input', () => {
        input.pushDigit('1');
        input.pushOperator('+');
        input.pushOperator('/')
        input.pushDigit('2');
        input.pushOperator('-');
        input.pushOperator('*');
        input.pushDigit('3');

        expect(input.toString()).to.equal('1 / 2 * 3');
    });

    it('should store numbers and operators alternatingly', () => {
        input.pushDigit('1');
        input.pushOperator('+');
        input.pushDigit('2');
        input.pushOperator('*');
        input.pushDigit('3');
        input.pushOperator('-');
        input.pushDigit('4');
        input.pushOperator('/')
        input.pushDigit('5');

        expect(input.toString()).to.equal('1 + 2 * 3 - 4 / 5');
    });

    it('should negate only the last term', () => {
        input.pushDigit('1');
        input.pushOperator('+');
        input.pushDigit('5');
        input.pushSign();

        expect(input.toString()).to.equal('1 + -5');
    });

    it('should add period only to the last term', () => {
        input.pushDigit('3')
        input.pushPeriod();
        input.pushDigit('1');
        input.pushDigit('4');

        input.pushOperator('*');

        input.pushDigit('9');
        input.pushPeriod();
        input.pushDigit('8');
        input.pushDigit('1');

        expect(input.toString()).to.equal('3.14 * 9.81');
    });

    it('should delete digits and operators one-by-one', () => {
        input.pushDigit('4');
        input.pushPeriod();
        input.pushDigit('2');

        input.pushOperator('/');
        input.pushDigit('2');
        input.pushPeriod();
        input.pushDigit('1');

        const expecteds = [
            '4.2 / 2.1',
            '4.2 / 2.',
            '4.2 / 2',
            '4.2 /',
            '4.2',
            '4.',
            '4',
            '0',
        ];

        for (const expected of expecteds) {
            expect(input.toString()).to.equal(expected);
            input.delete();
        }
    });

    it('should not change if deleting when empty', () => {
        expect(input.toString()).to.equal('0');

        input.delete();

        expect(input.toString()).to.equal('0');
    });
});
