import { Operator } from 'app/model/Operator';
import ButtonFactory from 'app/view/ButtonFactory';
import CalculatorController from 'app/controller/CalculatorController';

const operations: Operator[] = ['+', '/', '*', '-'];

export default class OperatorButtonFactory {
    public constructor(private buttonFactory: ButtonFactory) {}

    public createAll(calculator: CalculatorController): HTMLButtonElement[] {
        return operations.map((operation) => this.create(operation, calculator));
    }

    public create(operator: Operator, calculator: CalculatorController): HTMLButtonElement {
        const value = operator.toString();
        const button = this.buttonFactory.create(value);

        button.addEventListener('click', () => {
            calculator.pushOperator(operator);
        });

        return button;
    }
}
