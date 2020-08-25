import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ServiceComponent } from './pages/service/service.component';


const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'service',
        component: ServiceComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
