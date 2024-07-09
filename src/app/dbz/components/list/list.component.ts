import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 2000
  }]

  @Output()
  private onDelete: EventEmitter<string> = new EventEmitter();

  public onDeleteCharacter(id?: string):void{
    //TODO: Emitir el ID del personaje
    console.log(id)
    this.onDelete.emit(id)
  }
}
