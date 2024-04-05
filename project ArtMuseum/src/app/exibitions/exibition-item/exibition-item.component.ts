import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Exibition } from 'src/app/model/exibition.model';

@Component({
  selector: 'app-exibition-item',
  templateUrl: './exibition-item.component.html',
  styleUrls: ['./exibition-item.component.css'],
})
export class ExibitionItemComponent {
  @Input()
  exibition: Exibition = new Exibition();

  @Output()
  editClicked: EventEmitter<any> = new EventEmitter();

  @Input()
  showEdit: boolean = false;
  //preko inputa kupimo showEdit i potvrdjujemmo
  //da je u itemu uvek false

  onEditClicked() {
    this.editClicked.emit();
  }
}
