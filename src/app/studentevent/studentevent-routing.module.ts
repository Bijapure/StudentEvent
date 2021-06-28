import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventDetailComponent } from '../event-detail/event-detail.component';
import { StudentDetailComponent } from '../student-detail/student-detail.component';
import { StudentComponent } from '../student/student.component';

const routes: Routes = [ 
  {
  path:'displayEvent',
  component:EventDetailComponent
},
{
  path:'addStudent',
  component:StudentComponent
},
{
  path:'displayStudent',
  component:StudentDetailComponent
}
]

console.warn("Lazy Loading working !!!!!!!");


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudenteventRoutingModule { }
