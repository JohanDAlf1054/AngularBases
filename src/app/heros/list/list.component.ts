import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public herosName: string[] = ['Spiderman','Ironma','Hulk','Thor'];
  public deleteHero?: string;

  deleteHeroArr():void {
    this.deleteHero = this.herosName.pop();

  }
}
