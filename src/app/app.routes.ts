import {Routes} from '@angular/router'

import {HomeComponent} from './estrutura/home/home.component'
import {TesteComponent} from './teste/teste.component'
import { CrudComponent } from './teste/crud.component';

import {NotFoundComponent} from './estrutura/not-found/not-found.component'

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},

  {path: 'teste', component: TesteComponent},
  {path: 'crud', component: CrudComponent},
  
  {path: '**', component: NotFoundComponent} //Wildcard root
]
