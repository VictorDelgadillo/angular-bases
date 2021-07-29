import { NgModule } from '@angular/core';
import { HeroesComponent } from './heroes.component';
import { HeroeComponent } from '../heroe/heroe.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        HeroesComponent,
        HeroeComponent
    ],
    exports: [
        HeroesComponent
    ],
    imports: [
        CommonModule
    ]

})
export class HeroesModule {

}