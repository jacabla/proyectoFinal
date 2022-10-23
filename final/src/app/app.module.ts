import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GiftsComponent } from './gifts/gifts.component';
import { StickersComponent } from './stickers/stickers.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    GiftsComponent,
    StickersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
