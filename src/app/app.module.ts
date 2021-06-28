import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { StudentComponent } from './student/student.component';
import {ReactiveFormsModule} from '@angular/forms';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { AuthenticationService } from './authentication.service';
import { LoginComponent } from './login/login.component';
import { AddEventComponent } from './add-event/add-event.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [
    AuthenticationService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
