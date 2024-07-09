import { Component, EventEmitter, Output } from "@angular/core";
import { Character } from "../../interfaces/character.interface";

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
})
export class AddCharacterComponent {

  @Output()
  public newCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character= {
    name :'',
    power : 0
  };


  emitcharacter(): void{
    console.log(this.character);
    if(!this.character.name) return;
    this.newCharacter.emit({...this.character});

    this.character.name = '';
    this.character.power = 0;
  }
}
