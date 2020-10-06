import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuitarComponent } from './guitar/guitar.component';
import { DrumComponent } from './drum/drum.component';
import { BassComponent } from './bass/bass.component';

const routes: Routes = [
  {
    path : '',
    component : BassComponent,
    pathMatch : 'full'
  },
  {
    path : 'guitar',
    component : GuitarComponent,
    pathMatch : 'full'
  },
  {
    path : 'drum',
    component : DrumComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
