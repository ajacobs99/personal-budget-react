import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { GuitarComponent } from './guitar/guitar.component';
import { DrumComponent } from './drum/drum.component';
import { BassComponent } from './bass/bass.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GuitarComponent,
    DrumComponent,
    BassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
