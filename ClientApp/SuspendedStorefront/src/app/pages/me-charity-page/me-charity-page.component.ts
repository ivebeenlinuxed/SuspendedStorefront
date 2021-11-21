import { Component, OnInit } from '@angular/core';
import { Charity, Product } from 'src/app/api/models';
import { CharityProduct } from 'src/app/api/models/charity-product';
import { CharityService, ProductService } from 'src/app/api/services';

@Component({
  selector: 'app-me-charity-page',
  templateUrl: './me-charity-page.component.html',
  styleUrls: ['./me-charity-page.component.scss']
})
export class MeCharityPageComponent implements OnInit {
  public charities: Charity[] = [];
  public products: Product[] = [];
  public newCharityProduct: CharityProduct = {};

  constructor(private charityService : CharityService, private productService : ProductService) { }

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    this.charityService.apiCharityGet$Json().subscribe(c => this.charities = c);
    this.productService.apiProductGet$Json().subscribe(p => this.products = p);
  }

  saveCharityProduct(charityID : any) {
    this.newCharityProduct.charityID = charityID;
    this.charityService.apiCharityIdCharityProductPost$Json({id: <string>this.newCharityProduct.charityID, body: this.newCharityProduct }).subscribe(cp => {
      this.refresh();
      this.newCharityProduct = {};
    })
  }

  removeCharityProduct(charityID: any, charityProductID: any) {
    this.charityService.apiCharityCharityIdCharityProductCharityProductIdDelete({charityID: charityID, charityProductID: charityProductID}).subscribe(cp => {
      this.refresh();
    })
  }

}
