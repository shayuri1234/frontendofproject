import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { InstallationComponent } from './components/installation/installation.component';
import { AdminComponent } from './components/admin/admin.component';
import { PaymentComponent } from './components/payment/payment.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserSigninComponent } from './components/user-signin/user-signin.component';

const routes: Routes = [  
  {
    path : '',
    component:HomeComponent,
    pathMatch:"full"
    },
  {
    path : 'main',
    component:HomeComponent,
    pathMatch:"full"
    },
  {
  path : 'userlogin',
  component:UserLoginComponent
  },
  
  {
    path : 'usersignin',
    component:UserSigninComponent
    },
  {
    path : 'services',
    component:ServicesComponent
    },
    {
      path : 'installation',
      component:InstallationComponent
      },

      {
        path : 'admin',
        component:AdminComponent
        },

        {
          path : 'payment',
          component:PaymentComponent
          },
          {
            path: "list",
            component: ServicesComponent
          }
      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
