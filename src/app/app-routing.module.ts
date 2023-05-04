import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LetterartComponent } from './letterart/letterart.component';
import { WordCutoutComponent } from './word-cutout/word-cutout.component';


const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'letterart', component: LetterartComponent },
  { path: 'wordcutout' , component : WordCutoutComponent},
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
