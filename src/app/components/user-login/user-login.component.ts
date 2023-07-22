import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/Model/user-login';
import { UserLoginService } from 'src/app/Model/user-login.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  submitted = false;
  userlogin= new UserLogin();
  
  constructor(private service: UserLoginService , 
    private router: Router){}

    onSubmit() {
      this.submitted = true;
  
      this.save();
    }
  
    save()
    {
      console.log(this.userlogin);
      this.service.createUser(this.userlogin).subscribe();  
      //this.gotoList();
    }
    gotoList() 
    {
      this.router.navigate(['installation']);
  
    }
}
