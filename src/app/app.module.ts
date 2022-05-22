import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { OverviewLayoutComponent } from './theme/overview-layout/overview-layout.component';
import { UserLayoutComponent } from './theme/user-layout/user-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuLeftComponent } from './components/menu-left/menu-left.component';
import { AlbumComponent } from './components/album/album.component';
import { UserMainModule } from './routes/user-main/user-main.module';
import { PlayMusicComponent } from './components/play-music/play-music.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewLayoutComponent,
    UserLayoutComponent,
    HeaderComponent,
    MenuLeftComponent,
    AlbumComponent,
    PlayMusicComponent,
  ],
  imports: [
    BrowserModule,
    UserMainModule,
    AppRoutingModule,
      // ngx-translate and the loader module
      HttpClientModule,
      TranslateModule.forRoot({
          loader: {
              provide: TranslateLoader,
              useFactory: HttpLoaderFactory,
              deps: [HttpClient]
          }
      })
  ],
  exports: [
    AlbumComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
