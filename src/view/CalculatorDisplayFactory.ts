export default class CalculatorDisplayFactory {
    create(): HTMLElement {
        const display = document.createElement('div');

        display.className = 'calculator-display';
        display.innerText = '0';

        return display;
    }
}
