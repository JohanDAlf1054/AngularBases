import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './app/counter/counter.module';
import { AppRoutingModule } from './app-routing.module';
import { HerosModule } from './app/heros/heros.module';

import { AppComponent } from './app/index/app.component';
import { DbzModule } from './app/dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HerosModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
