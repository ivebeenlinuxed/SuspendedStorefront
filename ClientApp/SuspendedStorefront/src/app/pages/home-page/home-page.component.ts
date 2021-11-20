import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/api/models';
import { ProductService } from 'src/app/api/services';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public productList: Product[] = [];
  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.productService.apiProductGet$Json().subscribe(pl => this.productList = pl);
  }

}
