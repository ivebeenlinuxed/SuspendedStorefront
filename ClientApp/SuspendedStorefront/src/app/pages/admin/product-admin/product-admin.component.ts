import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/api/models';
import { ProductService } from 'src/app/api/services';

@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.scss']
})
export class ProductAdminComponent implements OnInit {
  public productList : Product[] = [];
  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.productService.apiProductGet$Json({}).subscribe(pl => this.productList = pl);
  }

}
