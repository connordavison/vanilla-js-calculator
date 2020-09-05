import { Digit } from 'app/model/Digit';
import DigitButtonFactory from 'app/view/DigitButtonFactory';
import { Operator } from 'app/model/Operator';
import CalculatorController from 'app/controller/CalculatorController';
import OperatorButtonFactory from 'app/view/OperatorButtonFactory';
import ComputeButtonFactory from 'app/view/ComputeButtonFactory';

export default class CalculatorInputFactory {
    public constructor(
        private digitButtonFactory: DigitButtonFactory,
        private operatorButtonFactory: OperatorButtonFactory,
        private computeButtonFactory: ComputeButtonFactory,
    ) {}

    public create(calculatorController: CalculatorController): HTMLElement {
        const digitPanel = this.createPanel(
            this.digitButtonFactory.createAll(calculatorController),
            'digit-panel',
        );
        const operatorPanel = this.createPanel(
            this.operatorButtonFactory.createAll(calculatorController),
            'operator-panel',
        );

        const container = document.createElement('section');

        container.classList.add('calculator-input');
        container.appendChild(digitPanel);
        container.appendChild(operatorPanel);
        container.appendChild(this.computeButtonFactory.create(calculatorController));

        return container;
    }

    private createPanel(buttons: HTMLButtonElement[], className: string) {
        const panel = document.createElement('section');

        panel.classList.add(className);

        buttons.forEach((button) => panel.appendChild(button));

        return panel;
    }
}
