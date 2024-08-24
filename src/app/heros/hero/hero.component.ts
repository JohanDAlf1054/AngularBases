import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name:string = "Ironman";
  public age:number = 45;
  public estadoBtn: boolean = true;
  public btnReset: boolean = false;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescriptin ():string {
    return `${this.name} tine ${this.age} años`;
  }

  changeNameHero():void {
    if(this.name === 'Ironman'){
      this.name = 'Spiderman';
    }else if (this.name === 'Spiderman') {
      this.name = 'Ironman';
    }
  }

  changeAgeHero():void {
    if(this.age === 45) {
      this.age = 30;
    }else if (this.age === 30) {
      this.age = 45
    }
  }

  cambioDeNombre ():boolean {
    if(this.name === 'Spiderman'){
      this.estadoBtn = false;
      this.btnReset = true;
    }
    return this.estadoBtn;
  }

  resetInfo():void {
    if(this.estadoBtn === false){
      this.btnReset = true;
    }
    this.name = "Ironman";
    this.age = 45;
    this.estadoBtn = true;    
    
  }

}
