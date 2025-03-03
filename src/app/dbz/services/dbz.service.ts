import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9000
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  public addNewCharacter(character:Character):void{
    console.log(character);
    const newCharacter: Character = {
      id: uuid(),
      ...character
    }
    this.characters.push(newCharacter)
  }

  public deleteCharacterById(id: string){
    this.characters = this.characters.filter((character:Character) => character.id !== id)
  }

  constructor() { }

}
