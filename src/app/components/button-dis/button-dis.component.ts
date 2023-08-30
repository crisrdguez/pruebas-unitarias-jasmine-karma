import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-dis',
  templateUrl: './button-dis.component.html',
  styleUrls: ['./button-dis.component.css']
})
export class ButtonDisComponent {

  @Output() onDis = new EventEmitter<number>();

  @Input() contador:number = 0;

  dis() {
    this.onDis.emit(this.contador - 1);
  }

}
