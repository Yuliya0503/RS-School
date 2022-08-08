export class Button {
    readonly button: HTMLButtonElement;

    onClick: () => void;

    constructor(parentNode: HTMLElement, styles: string[], title: string) {
        this.button = document.createElement('button');
        this.button.classList.add(...styles);
        this.button.textContent = title;
        if (parentNode) parentNode.append(this.button);

        this.button.onclick = () => {
            this.onClick();
        };
    }

    addDisable(): void {
        this.button.setAttribute('disabled', 'true');
    }

    removeDisable(): void {
        this.button.removeAttribute('disabled');
    }
}
