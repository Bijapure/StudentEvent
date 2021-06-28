import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user={
    username: "bijapuremun@gmail.com",
     password: "1234"
    };
  constructor(private Authguardservice: AuthenticationService, private router: Router) {}  
 

  isUserAuthenticated(){

  }


ngOnInit(): void {
    localStorage.setItem('SeesionUser',this.user.username);  
  }

  loginUser(userDetails){
    console.log(userDetails);
      if(this.user.username===userDetails.username &&
        this.user.password===userDetails.password)
        {
          this.router.navigateByUrl("/addEvent");
        }
  }

  
}
