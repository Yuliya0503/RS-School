export class Inputs {
    input: HTMLInputElement;

    constructor(parentNode: HTMLElement, classes: string[], type: string, placegolder: string) {
        this.input = document.createElement('input');
        this.input.classList.add(...classes);
        this.input.setAttribute('type', type);
        this.input.placeholder = placegolder;
        if (parentNode) {
            parentNode.append(this.input);
        }
    }

    getValue(): string {
        return this.input.value;
    }

    showElementActive(): void {
        this.input.removeAttribute('disabled');
    }

    hideElementActive(value: string): void {
        this.input.setAttribute('disabled', value);
    }
}
