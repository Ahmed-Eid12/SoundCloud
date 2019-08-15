import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { SengersPalyListComponent } from './pages/sengers-paly-list/sengers-paly-list.component';
import { SongsPlayListComponent } from './pages/songs-play-list/songs-play-list.component';
import { NavbarComponent } from './bars/navbar/navbar.component';
import { AudioPalyerComponent } from './bars/audio-palyer/audio-palyer.component';
import { SingersService } from './services/singers.service';
import { SongsService } from './services/songs.service';
import { FirstHomeComponent } from './pages/first-home/first-home.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { LoginComponent } from './logs/login/login.component';
import { RegisterComponent } from './logs/register/register.component';
import { UserProfileComponent } from './profiles/user-profile/user-profile.component';
import { UsersProfileService } from './services/users-profile.service';
import { LoginGuardGuard } from './guards/login-guard.guard';
import { UserLoginService } from './services/user-login.service';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomeComponent,
    SengersPalyListComponent,
    SongsPlayListComponent,
    NavbarComponent,
    AudioPalyerComponent,
    FirstHomeComponent,
    LoginLayoutComponent,
    LoginComponent,
    RegisterComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    SingersService,
    SongsService,
    UsersProfileService,
    LoginGuardGuard,
    UserLoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
