import CalculatorController from 'app/controller/CalculatorController';
import { Digit } from 'app/model/Digit';
import ButtonFactory from 'app/view/ButtonFactory';

const digits: Digit[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

export default class DigitButtonFactory {
    public constructor(private buttonFactory: ButtonFactory) {}

    public createAll(calculator: CalculatorController): HTMLButtonElement[] {
        return digits.map((digit) => this.create(digit, calculator));
    }

    public create(digit: Digit, calculator: CalculatorController): HTMLButtonElement {
        const button = this.buttonFactory.create(digit);

        button.addEventListener('click', () => {
            calculator.pushDigit(digit);
        });

        return button;
    }
}
