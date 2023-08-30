import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-add',
  templateUrl: './button-add.component.html',
  styleUrls: ['./button-add.component.css']
})
export class ButtonAddComponent {

  @Output() onAdd = new EventEmitter<number>(); //de hijo a padre

  @Input() contador:number = 0; //de padre a hijo

  add() {
    this.onAdd.emit(this.contador + 1);
  }

}
