import { CardButtonCancelComponent } from './../card-button-cancel/card-button-cancel.component';
import { CardRoxoButtonComponent } from './../card-roxo-button/card-roxo-button.component';
import { CardButtonComponent } from './../card-button/card-button.component';
import { CardRoxoComponent } from './../card-roxo/card-roxo.component';
import { CardComponent } from './../card/card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';


@NgModule({
  declarations: [
    CardComponent,
    CardRoxoComponent,
    CardButtonComponent,
    CardRoxoButtonComponent,
    CardButtonCancelComponent
  ],
  imports: [
    CommonModule,
    MatSliderModule
  ],
  exports: [
    CardComponent,
    CardRoxoComponent,
    CardButtonComponent,
    CardRoxoButtonComponent
  ]
})
export class CardsModule { }
