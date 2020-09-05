export default class ButtonHotkeyBinder {
    constructor(private root: HTMLElement) {}

    public bind(hotkey: string, button: HTMLButtonElement): void {
        this.root.addEventListener('keydown', (event: KeyboardEvent) => {
            if (event.key === hotkey) {
                button.click();
            }
        });
    }
}
