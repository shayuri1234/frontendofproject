import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Installation } from 'src/app/Model/install';
import { InstallService } from 'src/app/Model/install.service';

@Component({
  selector: 'app-installation',
  templateUrl: './installation.component.html',
  styleUrls: ['./installation.component.css']
})
export class InstallationComponent {
  submitted = false;
  install= new Installation();
  
  constructor(private service: InstallService , 
    private router: Router){}

  onSubmit() {
    this.submitted = true;

    this.save();
  }

  save()
  {
    this.service.createInstall(this.install).subscribe();  
    this.gotoList();
    this.getAll();
  }
  getAll()
  {
    this.service.getInstall().subscribe((data)=>
    {
      console.log(data);
    });
  }
  gotoList() 
  {
    this.router.navigate(['main']);

  }
}
