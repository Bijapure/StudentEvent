import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

 
  constructor(private eventService:EventService,private router:Router) { }

  ngOnInit(): void {
  }

  
  register(eventDetail)
  {
    this.eventService.addEvent(eventDetail).subscribe(

      resp=>{console.log(resp)
      this.router.navigate(['StudentEvent/displayEvent']);
      },
      err=>{console.log(err)
      alert('Event already exists !!! Try to add different Event');
      }
    );
  }
}
