import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserSignUp } from 'src/app/Model/user-signin';
import { UserSigninService } from 'src/app/Model/user-signin.service';

@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.css']
})
export class UserSigninComponent {

  submitted = false;
  usersignin= new UserSignUp();

  constructor(private service: UserSigninService , 
    private router: Router) { }

  onSubmit() {
    this.submitted = true;

    this.save();
  }

  save()
  {
    this.service.createUserSignIn(this.usersignin).subscribe();  
    this.gotoList();
  }
  gotoList() 
  {
    this.router.navigate(['list']);

  }
}
