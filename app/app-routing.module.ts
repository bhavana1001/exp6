import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentComponent } from './student/student.component';
import { ExpComponent } from './exp/exp.component';
import { FacultyComponent } from './faculty/faculty.component';

const routes: Routes = [
  { path: 'ff', component: FacultyComponent },
  { path: 'ss', component: StudentComponent },
  { path: '', redirectTo: '/ss', pathMatch: 'full' },  // default route to StudentComponent
  { path: '**', component: ExpComponent } // wildcard route for 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }