import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductAdminComponent } from './pages/admin/product-admin/product-admin.component';
import { ProductAddComponent } from './components/admin/product-add/product-add.component';
import { ApiModule } from './api/api.module';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductAdminComponent,
    ProductAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ApiModule.forRoot({ rootUrl: environment.API_LOCATION }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
