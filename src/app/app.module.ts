import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Components
/* import { ContadorComponent } from './contador/contador/contador.component'; */
/* import { HeroesComponent } from './heroes/heroes/heroes.component';
import { HeroeComponent } from './heroes/heroe/heroe.component'; */
import { HeroesModule } from './heroes/heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';


@NgModule({
  declarations: [
    AppComponent,
    /*     ContadorComponent, */
    /*   HeroesComponent,
      HeroeComponent */
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
