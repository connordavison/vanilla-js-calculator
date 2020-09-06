import CalculatorController from 'app/controller/CalculatorController';
import { Digit } from 'app/model/Digit';
import { Operator } from 'app/model/Operator';

const digits: Digit[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const operators: Operator[] = ['*', '/', '-', '+'];

export default class HotkeyBinder {
    public bind(root: HTMLElement, controller: CalculatorController) {
        const bindings: Record<string, () => void> = {};

        for (const digit of digits) {
            bindings[digit] = () => controller.pushDigit(digit);
        }

        for (const operator of operators) {
            bindings[operator] = () => controller.pushOperator(operator);
        }

        bindings['Enter'] = () => controller.pushCompute();
        bindings['Escape'] = () => controller.pushAllClear();
        bindings['.'] = () => controller.pushPeriod();

        root.addEventListener('keydown', (event: KeyboardEvent) => {
            const action = bindings[event.key];

            if (action) {
                action();
            }
        })
    }
}
