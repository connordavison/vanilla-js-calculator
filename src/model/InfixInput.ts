import { Digit } from 'app/model/Digit';
import Input from 'app/model/Input';
import { Operator } from 'app/model/Operator';
import NumberInput from 'app/model/NumberInput';

export default class InfixInput implements Input {
    private inputs: Input[] = [];
    private operators: Operator[] = [];

    public constructor(input: Input) {
        this.inputs.push(input);
    }

    public pushDigit(digit: Digit): void {
        if (this.isAwaitingTerm()) {
            this.inputs.push(new NumberInput());
        }

        this.getCurrentInput().pushDigit(digit);
    }

    public pushOperator(operator: Operator): void {
        if (this.isAwaitingTerm()) {
            this.operators[this.operators.length - 1] = operator;
        } else {
            this.operators.push(operator);
        }
    }

    public pushSign(): void {
        this.getCurrentInput().pushSign();
    }

    public pushPeriod(): void {
        this.getCurrentInput().pushPeriod();
    }

    public delete(): void {
        if (this.isAwaitingTerm()) {
            this.operators.pop();
        } else {
            const currentInput = this.getCurrentInput();

            currentInput.delete();

            if (currentInput.isEmpty() && !this.isEmpty()) {
                this.inputs.pop();
            }
        }
    }

    public isEmpty(): boolean {
        return this.inputs.length === 1
            && this.getCurrentInput().isEmpty();
    }

    private isAwaitingTerm(): boolean {
        return this.inputs.length === this.operators.length;
    }

    private getCurrentInput(): Input {
        return this.inputs[this.inputs.length - 1];
    }

    public toString(): string {
        let string = '';

        for (
            let i = 0;
            i < Math.max(this.inputs.length, this.operators.length);
            i++
        ) {
            string += this.inputs[i].toString();

            if (this.operators[i]) {
                string += ' ' + this.operators[i] + ' ';
            }
        }

        return string.trim();
    }
}
