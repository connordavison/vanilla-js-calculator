import CalculatorController from 'app/controller/CalculatorController';
import CalculatorDisplayFactory from 'app/view/CalculatorDisplayFactory';
import Calculator from 'app/model/Calculator';
import * as expressionEvaluator from 'mathjs';
import CalculatorInputFactory from 'app/view/CalculatorInputFactory';
import DigitButtonFactory from 'app/view/DigitButtonFactory';
import OperatorButtonFactory from 'app/view/OperatorButtonFactory';
import ButtonFactory from 'app/view/ButtonFactory';
import ComputeButtonFactory from 'app/view/ComputeButtonFactory';
import ButtonHotkeyBinder from 'app/view/ButtonHotkeyBinder';

export default class App {
    public mount(root: HTMLElement): void {
        const buttonHotkeyBinder = new ButtonHotkeyBinder(root);
        const buttonFactory = new ButtonFactory(buttonHotkeyBinder);
        const calculatorDisplayFactory = new CalculatorDisplayFactory();
        const calculatorDisplay = calculatorDisplayFactory.create();
        const calculator = new Calculator(expressionEvaluator);

        const calculatorController = new CalculatorController(
            calculatorDisplay,
            calculator.createInput(),
            calculator,
        );

        const calculatorInputFactory = new CalculatorInputFactory(
            new DigitButtonFactory(buttonFactory),
            new OperatorButtonFactory(buttonFactory),
            new ComputeButtonFactory(buttonFactory),
        );
        const calculatorInput = calculatorInputFactory.create(calculatorController);

        root.appendChild(calculatorDisplay);
        root.appendChild(calculatorInput);
    }
}
