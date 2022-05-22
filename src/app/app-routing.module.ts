import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './components/album/album.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuLeftComponent } from './components/menu-left/menu-left.component';
import { PlayMusicComponent } from './components/play-music/play-music.component';
import { HomeComponent } from './routes/user-main/home/home.component';
import { OverviewLayoutComponent } from './theme/overview-layout/overview-layout.component';
import { UserLayoutComponent } from './theme/user-layout/user-layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'premium', pathMatch: 'full' },
  {
    path: 'premium',
    component: OverviewLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./routes/over-view-main/over-view-main.module').then((m) => m.OverViewMainModule),
      },
    ],
  },
  {
    path: 'open',
    component: UserLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./routes/user-main/user-main.module').then((m) => m.UserMainModule),
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
