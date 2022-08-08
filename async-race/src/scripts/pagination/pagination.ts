import { BaseComponents } from "../Base/BaseComponents";
import { Button } from "../Base/Button";
import './pagination.css';

export class Pagination extends BaseComponents {
  prev: Button;
  next: Button;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['pagination']);
    this.next = new Button(this.HTMLnode, ['next-page', 'button'], 'next');
    this.prev = new Button(this.HTMLnode, ['prev-page', 'button'], 'prev');
  }

  checkPuginationButtons(limit: number, count: number, page: number): void {
    if(count <= limit) {
      this.prev.addDisable();
      this.next.addDisable();
    } else if((count > limit) && (page === 1)) {
      this.prev.addDisable();
      this.next.removeDisable();
    } else if((count > limit) && (page > 1)) {
      if(Math.ceil(count / limit) === page){
        this.prev.removeDisable();
        this.next.addDisable()
      } else {
        this.prev.removeDisable();
        this.next.removeDisable();
      }
    }
  }
}
