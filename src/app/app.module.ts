import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { FormsModule }   from '@angular/forms';
//import { LocationStrategy, HashLocationStrategy } from '@angular/common'

import {ROUTES} from './app.routes'

import { AppComponent } from './app.component';
import { HeaderComponent } from './estrutura/header/header.component';
import { HomeComponent } from './estrutura/home/home.component';
import { NotFoundComponent } from './estrutura/not-found/not-found.component';
import { AboutComponent } from './estrutura/about/about.component';
import { TesteComponent } from './teste/teste.component';
import { CrudComponent } from './teste/crud.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    AboutComponent,
    TesteComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules})
  ],
  providers: [
    //{provide: LocationStrategy, useClass: HashLocationStrategy},
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
