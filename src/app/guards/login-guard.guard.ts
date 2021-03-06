import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserLoginService } from '../services/user-login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {

  constructor(private userLogin: UserLoginService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(this.userLogin.userLoggedIn){
        return true
      } else {
        window.alert("please login at first .")
        this.router.navigate(['/login'] , {
          queryParams: {
            userDirectionURL: state.url
          }
        })

      }
  }
  
}
