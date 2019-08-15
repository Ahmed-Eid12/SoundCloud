import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { SengersPalyListComponent } from './pages/sengers-paly-list/sengers-paly-list.component';
import { SongsPlayListComponent } from './pages/songs-play-list/songs-play-list.component';
import { FirstHomeComponent } from './pages/first-home/first-home.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { LoginComponent } from './logs/login/login.component';
import { RegisterComponent } from './logs/register/register.component';
import { UserProfileComponent } from './profiles/user-profile/user-profile.component';
import { LoginGuardGuard } from './guards/login-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: FirstHomeComponent
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'music',
        component: HomeComponent
      },
      {
        path:'singersPlayList',
        component:SengersPalyListComponent
      },
      {
        path: 'songPlayList/:name',
        component: SongsPlayListComponent
      },
      {
        path: 'profile',
        component: UserProfileComponent,
        canActivate: [LoginGuardGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
