import {Routes} from '@angular/router'

import {HomeComponent} from './home/home.component'

import {NotFoundComponent} from './not-found/not-found.component'

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  
  {path: '**', component: NotFoundComponent} //Wildcard root
]
