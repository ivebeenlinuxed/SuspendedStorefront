import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product, ProductSubscription } from 'src/app/api/models';
import { ProductService, SubscriptionService } from 'src/app/api/services';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-subscribe-page',
  templateUrl: './subscribe-page.component.html',
  styleUrls: ['./subscribe-page.component.scss']
})
export class SubscribePageComponent implements OnInit {
  public product: Product = {}
  constructor(private authSerice : AuthService, private productService: ProductService, private subscriptionService : SubscriptionService, private route : ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.loadSubscription(params['id']);
      }
    );
  }

  loadSubscription(id : string) {
    this.productService.apiProductIdGet$Json({ id: id, customerID: this.authSerice.identityClaims["sub"] }).subscribe((p) => this.product = p);
  }

}
