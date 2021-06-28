import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentRegistration:FormGroup;
  selectValues=null;
  eventList= [] as any;

  event={
    eventId:1,
    eventName:""
  }
  
  student={
    studentId:1,
    studentName:"",
    studentGender:"",
    studentSubject:[],
    event:[]
  }
  
  subjectList:Array<any>=[
    {name:'Spring boot',value:"Spring boot"},
    {name:'Angular',value:"Angular"},
    {name:'Android',value:"Android"}

  ]
  constructor(private fb:FormBuilder,private service:EventService,private router:Router) { }

  ngOnInit(): void {
    this.getAllEventDetails();

    this.studentRegistration=this.fb.group({
      studentId:['',[Validators.required,Validators.minLength(1)]],
      studentName:['',[Validators.required,Validators.minLength(3)]],
      studentGender:['',Validators.required],
      studentSubject:this.fb.array([]),
      event:['',[Validators.required]]

    });


  }

  onSubmit(){

  }

  submitForm(){
    console.log(this.studentRegistration.value);
    this.student=this.studentRegistration.value
    // this.eventList.push(this.studentRegistration.get('event').value)
    // console.log(this.eventList);
    // this.student.event=this.eventList;
   // this.student.studentSubject=this.studentRegistration.get('studentSubject').value;
    console.log(this.student.studentSubject);
    this.service.addStudentWithEvent(this.student).subscribe(
      res=>{
        console.log(res);
        alert('Registeration Successfully Done !!!!!');
        this.router.navigate(['StudentEvent/displayStudent']);
        
      },
      er=>{console.log(er)
      alert('Student with this ID already Exists Try with Different ID')
      }

    );
   // this.eventList.splice(0,this.eventList.length);
  }

  onCheckboxChange(e)
  {
      const studentSubject: FormArray = this.studentRegistration.get('studentSubject') as FormArray;
    
      if (e.target.checked) {
        studentSubject.push(new FormControl(e.target.value));
      } else {
        let i: number = 0;
        studentSubject.controls.forEach((item: FormControl) => {
          if (item.value == e.target.value) {
            studentSubject.removeAt(i);
            return;
          }
          i++;
        });
      }
  }

  getAllEventDetails()
  {
    this.service.getEventDeails().subscribe(
      resp=>{
      this.selectValues=resp;
      },
      er=>{
        console.log(er);
      }
    );

  }

  changeGender(e) {
    console.log(e.target.value);
  }

}
