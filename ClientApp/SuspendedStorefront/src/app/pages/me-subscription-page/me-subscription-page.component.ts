import { Component, OnInit } from '@angular/core';
import { ProductSubscription } from 'src/app/api/models';
import { SubscriptionService } from 'src/app/api/services';

@Component({
  selector: 'app-me-subscription-page',
  templateUrl: './me-subscription-page.component.html',
  styleUrls: ['./me-subscription-page.component.scss']
})
export class MeSubscriptionPageComponent implements OnInit {
  public subscriptions: ProductSubscription[] = [];
  public isLoaded: boolean = false;

  constructor(private subscriptionService : SubscriptionService) { }

  ngOnInit(): void {
    this.subscriptionService.apiSubscriptionGet$Json().subscribe(ps => {
      this.subscriptions = ps
      this.isLoaded = true;
    });
  }

}
