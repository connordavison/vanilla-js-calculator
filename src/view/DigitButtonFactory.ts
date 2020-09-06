import CalculatorController from 'app/controller/CalculatorController';
import { Digit } from 'app/model/Digit';
import ButtonFactory from 'app/view/ButtonFactory';

const digits: Digit[] = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'];

export default class DigitButtonFactory {
    public constructor(private buttonFactory: ButtonFactory) {}

    public createAll(controller: CalculatorController): HTMLButtonElement[] {
        return digits.map((digit) => this.create(digit, controller));
    }

    public create(digit: Digit, calculator: CalculatorController): HTMLButtonElement {
        return this.buttonFactory.create(
            digit,
            'button-digit',
            () => calculator.pushDigit(digit),
        );
    }
}
