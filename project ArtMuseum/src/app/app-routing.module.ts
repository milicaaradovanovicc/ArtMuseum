import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { ExibitionsComponent } from './exibitions/exibitions.component';
import { NewExibitionComponent } from './exibitions/new-exibition/new-exibition.component';
<<<<<<< HEAD
import { ExibitionDetailsComponent } from './exibitions/exibition-details/exibition-details.component';
=======
>>>>>>> b90a9caef9bfbe9889c0d5304999caa13201fe96

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'exibitions', component: ExibitionsComponent },
<<<<<<< HEAD
  { path: 'exibitions/:id', component: ExibitionDetailsComponent },
=======
>>>>>>> b90a9caef9bfbe9889c0d5304999caa13201fe96
  { path: 'new-exibition', component: NewExibitionComponent },
  { path: '', redirectTo: '/home', pathMatch: 'prefix' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
