import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
=======

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
>>>>>>> b90a9caef9bfbe9889c0d5304999caa13201fe96
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { ExibitionsComponent } from './exibitions/exibitions.component';
import { NewExibitionComponent } from './exibitions/new-exibition/new-exibition.component';
<<<<<<< HEAD
import { ExibitionItemComponent } from './exibitions/exibition-item/exibition-item.component';
import { ExibitionDetailsComponent } from './exibitions/exibition-details/exibition-details.component';
import { ArtworkItemComponent } from './exibitions/exibition-details/artwork-item/artwork-item.component';
import { ExibitionEditComponent } from './exibitions/exibition-details/exibition-edit/exibition-edit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OffcanvasComponent } from './exibitions/exibition-details/offcanvas/offcanvas.component';
=======
>>>>>>> b90a9caef9bfbe9889c0d5304999caa13201fe96

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    ExibitionsComponent,
<<<<<<< HEAD
    NewExibitionComponent,
    ExibitionItemComponent,
    ExibitionDetailsComponent,
    ArtworkItemComponent,
    ExibitionEditComponent,
=======
    NewExibitionComponent
>>>>>>> b90a9caef9bfbe9889c0d5304999caa13201fe96
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
=======
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
>>>>>>> b90a9caef9bfbe9889c0d5304999caa13201fe96
