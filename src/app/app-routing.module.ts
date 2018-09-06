import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { CalendarComponent } from './calendar/calendar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ClientFormComponent } from './client-form/client-form.component';

const routes: Routes = [
  {path:'clients',component:ClientListComponent},
  {path:'clients/add',component:ClientFormComponent},
  {path:'calendar',component:CalendarComponent},
  {path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
