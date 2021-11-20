import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { ProductAdminComponent } from './pages/admin/product-admin/product-admin.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SubscribePageComponent } from './pages/subscribe-page/subscribe-page.component';

const routes: Routes = [
    { path: 'home', component: HomePageComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'subscribe', canActivate: [AuthGuard], children: [
      {path: ":id", component: SubscribePageComponent}
    ]
  },
  {
    path: 'admin', children: [
      { path: 'product', component: ProductAdminComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
