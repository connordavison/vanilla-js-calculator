import { Digit } from 'app/model/Digit';
import { Operator } from 'app/model/Operator';
import Calculator from 'app/model/Calculator';
import Input from 'app/model/Input';

export default class CalculatorController {
    public constructor(
        private calculatorDisplay: HTMLSpanElement,
        private input: Input,
        private calculator: Calculator,
    ) {}

    public pushDigit(digit: Digit): void {
        this.input.pushDigit(digit);
        this.updateDisplay();
    }

    public pushPeriod(): void {
        this.input.pushPeriod();
        this.updateDisplay();
    }

    public pushSign(): void {
        this.input.pushSign();
        this.updateDisplay();
    }

    public pushOperator(operator: Operator): void {
        this.input.pushOperator(operator);
        this.updateDisplay();
    }

    public pushCompute(): void {
        const input = this.calculator.evaluate(this.input);

        if (input !== undefined) {
            this.input = input;
        }

        this.updateDisplay();
    }

    private updateDisplay(): void {
        this.calculatorDisplay.innerText = this.input.toString();
    }
}
