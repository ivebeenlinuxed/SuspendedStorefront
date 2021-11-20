import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SuspendedStorefront';

  constructor(private oauthService: AuthService, private router : Router) {
    
   

  }

  logout() {
    this.oauthService.logout();
  }
}
