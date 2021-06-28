import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEventComponent } from './add-event/add-event.component';
import { AuthenticationGuard } from './authentication.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
//for lazy loading 
{
  path:'StudentEvent',
  loadChildren:()=>import  ('./studentevent/studentevent.module').then
  (mod=>mod.StudenteventModule)
},
{
  path:'addEvent',component:AddEventComponent
}

  // {
  //   path:"eventDetail",
  //   component:EventDetailComponent
  // },
  // {
  //   path:"student",
  //   component:StudentComponent
  // },
  // {
  //   path:"student-detail",
  //   component:StudentDetailComponent
  // }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
