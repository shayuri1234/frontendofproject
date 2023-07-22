import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/Model/admin';
import { AdminService } from 'src/app/Model/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  
  submitted = false;
  admin = new Admin();

  constructor(private service:AdminService , private router:Router)
  {

  }
  onSubmit() {
    this.submitted = true;

    this.save();
  }
  save()
  {
    this.service.createAdmin(this.admin).subscribe();  
    this.gotoList();
  }
  gotoList() 
  {
    this.router.navigate(['list']);

  }
}
