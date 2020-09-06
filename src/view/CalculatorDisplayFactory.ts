export default class CalculatorDisplayFactory {
    public create(): HTMLElement {
        const display = document.createElement('div');

        display.className = 'calculator-display';

        return display;
    }
}
