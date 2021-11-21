import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductAdminComponent } from './pages/admin/product-admin/product-admin.component';
import { ProductAddComponent } from './components/admin/product-add/product-add.component';
import { ApiModule } from './api/api.module';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SubscribePageComponent } from './pages/subscribe-page/subscribe-page.component';
import { AuthConfig, OAuthModule, OAuthModuleConfig, OAuthStorage } from 'angular-oauth2-oidc';
import { authConfig } from 'src/auth/auth-config';
import { AuthService } from './services/auth.service';
import { authAppInitializerFactory } from 'src/auth/authAppInitializerFactory';
import { authModuleConfig } from 'src/auth/authModuleConfig';
import { CurrentCustomerService } from './services/current-customer.service';
import { SubscribeThanksPageComponent } from './pages/subscribe-thanks-page/subscribe-thanks-page.component';
import { MeSubscriptionPageComponent } from './pages/me-subscription-page/me-subscription-page.component';
import { MeCharityPageComponent } from './pages/me-charity-page/me-charity-page.component';
export function storageFactory(): OAuthStorage {
  return localStorage;
}

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductAdminComponent,
    ProductAddComponent,
    SubscribePageComponent,
    SubscribeThanksPageComponent,
    MeSubscriptionPageComponent,
    MeCharityPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ApiModule.forRoot({ rootUrl: environment.API_LOCATION }),
    OAuthModule.forRoot()
  ],
  providers: [
  { provide: APP_INITIALIZER, useFactory: authAppInitializerFactory, deps: [AuthService], multi: true },
  { provide: AuthConfig, useValue: authConfig },
  { provide: OAuthModuleConfig, useValue: authModuleConfig },
    { provide: OAuthStorage, useFactory: storageFactory },
    {provide: CurrentCustomerService}],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
