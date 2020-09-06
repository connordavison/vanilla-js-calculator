import { Operator } from 'app/model/Operator';
import ButtonFactory from 'app/view/ButtonFactory';
import CalculatorController from 'app/controller/CalculatorController';

const operations: Operator[] = ['/', '*', '-', '+'];

export default class OperatorButtonFactory {
    public constructor(private buttonFactory: ButtonFactory) {}

    public createAll(controller: CalculatorController): HTMLButtonElement[] {
        return operations.map((operation) => this.create(operation, controller));
    }

    public create(operator: Operator, controller: CalculatorController): HTMLButtonElement {
        return this.buttonFactory.create(
            operator,
            'button-operator',
            () => controller.pushOperator(operator),
        )
    }
}
