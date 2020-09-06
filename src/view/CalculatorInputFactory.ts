import DigitButtonFactory from 'app/view/DigitButtonFactory';
import CalculatorController from 'app/controller/CalculatorController';
import OperatorButtonFactory from 'app/view/OperatorButtonFactory';
import ButtonFactory from 'app/view/ButtonFactory';

export default class CalculatorInputFactory {
    public constructor(
        private digitButtonFactory: DigitButtonFactory,
        private operatorButtonFactory: OperatorButtonFactory,
        private buttonFactory: ButtonFactory,
    ) {}

    public create(controller: CalculatorController): HTMLElement {
        const container = document.createElement('section');

        container.classList.add('calculator-input');
        container.appendChild(this.createDigitPanel(controller));
        container.appendChild(this.createOperatorPanel(controller));
        container.appendChild(this.createComputePanel(controller));

        return container;
    }

    private createDigitPanel(controller: CalculatorController) {
        const negateButton = this.buttonFactory.create(
            '+/-',
            'button-negate',
            () => controller.pushSign(),
        );
        const periodButton = this.buttonFactory.create(
            '.',
            'button-period',
            () => controller.pushPeriod()
        );

        return this.createPanel(
            [
                ...this.digitButtonFactory.createAll(controller),
                periodButton,
                negateButton,
            ],
            'digit-panel',
        );
    }

    private createOperatorPanel(controller: CalculatorController): HTMLElement {

        return this.createPanel(
            this.operatorButtonFactory.createAll(controller),
            'operator-panel',
        );
    }

    private createComputePanel(controller: CalculatorController): HTMLElement {
        const allClearButton = this.buttonFactory.create(
            'AC',
            'button-all-clear',
            () => controller.pushAllClear(),
        );
        const clearButton = this.buttonFactory.create(
            'C',
            'button-clear',
            () => controller.pushClear(),
        );
        const computeButton = this.buttonFactory.create(
            '=',
            'button-compute',
            () => controller.pushCompute(),
        );

        return this.createPanel([
            allClearButton,
            clearButton,
            computeButton,
        ], 'compute-panel');
    }

    private createPanel(buttons: HTMLButtonElement[], className: string): HTMLElement {
        const panel = document.createElement('section');

        panel.classList.add('panel');
        panel.classList.add(className);

        buttons.forEach((button) => panel.appendChild(button));

        return panel;
    }
}
