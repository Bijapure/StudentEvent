import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  allEventRecord=null;
  updateEvent={
    eventId:1,
    eventName:""
  };
  constructor(private service:EventService) { }

  ngOnInit(): void {
    this.getAllEventDetails();
  }

  getAllEventDetails()
  {
    this.service.getEventDeails().subscribe(
      resp=>{this.allEventRecord=resp;},
      er=>{
        console.log(er);
      }
    );

  }

  update(eventupdateDetail)
  {
  this.updateEvent=eventupdateDetail;
  }

  updateEventRecord(){
    this.service.updateEvent(this.updateEvent).subscribe(
      res=>{
      console.log(res);
      },
      er=>{
      console.log(er);
      this.getAllEventDetails();
      }

    );
  }



  deleteEvent(event:Event)
  {
    this.service.deleteEvent(event.eventId).subscribe(
      resp=>{console.log(resp)
      this.getAllEventDetails();
      },
      error=>{console.log(error)
        this.getAllEventDetails();
        
      }
    )
  }
}
