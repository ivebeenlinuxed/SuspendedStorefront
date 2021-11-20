import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAdminComponent } from './pages/admin/product-admin/product-admin.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
    { path: 'home', component: HomePageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
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
