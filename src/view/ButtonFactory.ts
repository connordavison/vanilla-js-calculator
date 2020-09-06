export default class ButtonFactory {
    public create(
        value: string,
        className: string,
        onClick: () => void,
    ): HTMLButtonElement {
        const button = document.createElement('button');

        button.innerText = value;
        button.classList.add('button');
        button.classList.add(className);
        button.addEventListener('click', onClick);

        return button;
    }
}
