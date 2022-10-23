import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GiftsComponent } from './gifts/gifts.component';
import { HomeComponent } from './home/home.component';
import { StickersComponent } from './stickers/stickers.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "about", component:AboutComponent
  },
  {
    path: "gifts", component:GiftsComponent
  },
  {
    path: "stickers", component:StickersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
