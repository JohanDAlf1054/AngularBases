import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-character-list',
  templateUrl: './list.component.html',
})
export class ListComponent {

  @Input() 
  public charctersLists: Character[] = [{
    id: uuid(),
    name: 'Trunks',
    power: 10
  }];

  @Output()
  onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id:string) {
    this.onDelete.emit( id );
  }

}
