import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    template: `
        <button (click)="increaseBy(+1)" >Sumar + 1</button>
            <h3>Counter: {{counter}}</h3>
            <button (click)="increaseBy(-1)" >Restar - 1</button>
            <br>
            <br>
        <button (click)="reset()" >Reset</button>
    `
})
export class CounterComponent {

    public counter:number = 10;

    increaseBy( value:number ): void {
        this.counter += value;
    }

    reset() {
        this.counter = 10;
    }
}