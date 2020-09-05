import ButtonFactory from 'app/view/ButtonFactory';
import CalculatorController from 'app/controller/CalculatorController';

export default class ComputeButtonFactory {
    constructor(private buttonFactory: ButtonFactory) {}

    public create(calculator: CalculatorController): HTMLButtonElement {
        const button = this.buttonFactory.create('=');

        button.addEventListener('click', () => {
            calculator.pushCompute();
        });

        return button;
    }
}
