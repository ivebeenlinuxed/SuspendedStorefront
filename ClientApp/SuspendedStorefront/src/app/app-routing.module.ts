import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { ProductAdminComponent } from './pages/admin/product-admin/product-admin.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MeCharityPageComponent } from './pages/me-charity-page/me-charity-page.component';
import { MeSubscriptionPageComponent } from './pages/me-subscription-page/me-subscription-page.component';
import { SubscribePageComponent } from './pages/subscribe-page/subscribe-page.component';
import { SubscribeThanksPageComponent } from './pages/subscribe-thanks-page/subscribe-thanks-page.component';

const routes: Routes = [
    { path: 'home', component: HomePageComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'subscribe', canActivate: [AuthGuard], children: [
      {path: "thanks", component: SubscribeThanksPageComponent},
      {path: ":id", component: SubscribePageComponent},
    ]
  },
  {
    path: 'me', canActivate: [AuthGuard], children: [
      { path: "profile", component: MeSubscriptionPageComponent },
      { path: "charities", component: MeCharityPageComponent }
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
