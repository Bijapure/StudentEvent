import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudenteventRoutingModule } from './studentevent-routing.module';
import { EventDetailComponent } from '../event-detail/event-detail.component';
import { StudentDetailComponent } from '../student-detail/student-detail.component';
import { StudentComponent } from '../student/student.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    
    EventDetailComponent,
    StudentComponent,
    StudentDetailComponent

  ],
  imports: [
    CommonModule,
    StudenteventRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class StudenteventModule { }
