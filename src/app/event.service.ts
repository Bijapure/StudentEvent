import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http:HttpClient) { }


  API="http://localhost:8080/api/studentEvent";

  addEvent(eventDetail)
  {
    return this.http.post(this.API+'/event',eventDetail);
  }

  getEventDeails()
  {
    return this.http.get(this.API+'/event');
  }

  updateEvent(updateEventDetails)
  {
    return this.http.put(this.API+'/event',updateEventDetails);
  }

  deleteEvent(deleteEventDetail)
  {
    return this.http.delete(this.API+'/event?eventId='+deleteEventDetail);
  }

  addStudentWithEvent(studWithEvent)
  {
    return this.http.post(this.API+'/student',studWithEvent);
  }

  deleteStudentDetail(studId)
  {
    return this.http.delete(this.API+'/student?studentId='+studId);
  }
  getAllStudentDetail()
  {
    return this.http.get(this.API+'/student');
  }
}
