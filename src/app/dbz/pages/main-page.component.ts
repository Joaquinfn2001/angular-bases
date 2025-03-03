import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor( private dbzService: DbzService) {

  }

  public get characters(): Character[]{
    return [...this.dbzService.characters];
  }

  public onNewCharacter(character: Character){
    this.dbzService.addNewCharacter(character)
  }

  public onDeleteCharacter(id: string){
    this.dbzService.deleteCharacterById(id);
  }
}
