import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AlbumComponent } from './album/album.component';
import { MyCoolBindingsComponent } from './my-cool-bindings/my-cool-bindings.component';
import { InputThangComponent } from './input-thang/input-thang.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AlbumComponent,
    MyCoolBindingsComponent,
    InputThangComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
