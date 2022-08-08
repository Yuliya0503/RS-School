export class BaseComponents {
  HTMLnode: HTMLElement;

  constructor(parentNode: HTMLElement, tag = 'div', classes:string[] = [], content = ''){
    this.HTMLnode = document.createElement(tag);
    this.HTMLnode.classList.add(...classes);
    this.HTMLnode.innerHTML = content;
    if(parentNode) {
      parentNode.appendChild(this.HTMLnode);
    }
  }

  showElement():void {
    this.HTMLnode.classList.remove('hide');
  }

  hideElement(): void {
    this.HTMLnode.classList.add('hide');
  }

  addAttribute(attribute: string, value: string): void {
    this.HTMLnode.setAttribute(attribute, value);
  }
}
