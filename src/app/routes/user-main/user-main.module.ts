import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from 'src/app/components/album/album.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent }
];

@NgModule({
  declarations: [
    HomeComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
  ],
  entryComponents: [ 
    AlbumComponent
  ]
})
export class UserMainModule { }
