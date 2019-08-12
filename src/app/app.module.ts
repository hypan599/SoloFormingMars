import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './utils/header/header.component';
import { FooterComponent } from './utils/footer/footer.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { DeckComponent } from './utils/deck/deck.component';
import { GlobalParametersComponent } from './utils/global-parameters/global-parameters.component';
import { MapComponent } from './utils/map/map.component';
import {MatButtonModule, MatDividerModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DeckComponent,
    GlobalParametersComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatButtonModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
