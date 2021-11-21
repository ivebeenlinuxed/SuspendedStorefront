import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product, ProductSubscription } from 'src/app/api/models';
import { ProductService, SubscriptionService } from 'src/app/api/services';
import { AuthService } from 'src/app/services/auth.service';
import { CurrentCustomerService } from 'src/app/services/current-customer.service';

@Component({
  selector: 'app-subscribe-page',
  templateUrl: './subscribe-page.component.html',
  styleUrls: ['./subscribe-page.component.scss']
})
export class SubscribePageComponent implements OnInit {
  public product: Product = {}
  public productSubscription: ProductSubscription = {};
  constructor(private authSerice : AuthService, private productService: ProductService, private subscriptionService : SubscriptionService, private route : ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.loadSubscription(params['id']);
      }
    );
  }

  loadSubscription(id : string) {
    this.productService.apiProductIdGet$Json({ id: id, asMe: true }).subscribe((p) => {
      this.product = p
      if (this.product.subscriptions != null && this.product.subscriptions.length > 0) {
        this.productSubscription = this.product.subscriptions[0];
      } else {
        this.productSubscription = {
          productID: this.product.id,
          maxSuspendedQuantity: 1,
          mondayQuantity: 0,
          tuesdayQuantity: 0,
          wednesdayQuantity: 0,
          thursdayQuantity: 0,
          fridayQuantity: 0,
          saturdayQuantity: 0,
          sundayQuantity: 0
        };
      }
    });
  }

  save() {
    if (this.productSubscription.id == null) {
      this.subscriptionService.apiSubscriptionPost$Json({ body: this.productSubscription }).subscribe(ps => {
        this.productSubscription = ps;
        this.router.navigateByUrl("/subscribe/thanks");
      });
    } else {
      this.subscriptionService.apiSubscriptionIdPatch$Json({ id: this.productSubscription.id, body: this.productSubscription }).subscribe(ps => {
        this.productSubscription = ps;
        this.router.navigateByUrl("/subscribe/thanks");
      });
    }
  }

}
