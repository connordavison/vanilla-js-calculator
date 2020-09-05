import ButtonHotkeyBinder from 'app/view/ButtonHotkeyBinder';

export default class ButtonFactory {
    public constructor(private hotkeyBinder: ButtonHotkeyBinder) {}

    public create(value: string): HTMLButtonElement {
        const button = document.createElement('button');

        button.innerText = value;

        this.hotkeyBinder.bind(value, button);

        return button;
    }
}
