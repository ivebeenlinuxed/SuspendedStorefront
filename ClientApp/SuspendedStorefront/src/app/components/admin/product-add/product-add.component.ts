import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/api/models';
import { ProductService } from 'src/app/api/services';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  public model: Product = {};

  @Output() productCreated = new EventEmitter<Product>();

  constructor(private productService : ProductService) { }

  ngOnInit(): void {
  }

  Save() {
    this.productService.apiProductPost$Json({ body: this.model }).subscribe(
      {
        next: (p) => {
          this.model.name = "";
          this.model.price = 0;
          this.productCreated.emit(p);
          console.log("Saved product");
        }, error: (error) => {
          console.log("Could not save the product");
        }
      }
    );
  }

}
