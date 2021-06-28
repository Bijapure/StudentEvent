import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Student } from '../student';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  studentList=null;
  constructor(private service:EventService) { }

  ngOnInit(): void {
    this.getAllStudentRecord();
  }

  
 getAllStudentRecord() {
  this.service.getAllStudentDetail().subscribe(
    resp=>{this.studentList=resp},
    er=>{console.log(er)}
  )
}

deleteStudent(studentDetail:Student)
{
  this.service.deleteStudentDetail(studentDetail.studentId).subscribe(
    resp=>{console.log(resp)
    alert('Deleted Successfully !!!!!!');
    this.getAllStudentRecord();
    },
    errr=>{console.log(errr);
    }
  )
}
}

