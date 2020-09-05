import ButtonFactory from 'app/view/ButtonFactory';
import CalculatorController from 'app/controller/CalculatorController';

export default class SignButtonFactory {
    public constructor(private buttonFactory: ButtonFactory) {}

    public create(calculator: CalculatorController): HTMLButtonElement {
        const button = this.buttonFactory.create('±');

        button.addEventListener('click', () => {
            calculator.pushSign();
        });

        return button;
    }
}
