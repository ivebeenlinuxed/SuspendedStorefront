import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Customer } from '../api/models';
import { CustomerService } from '../api/services';

@Injectable({
  providedIn: 'root'
})
export class CurrentCustomerService {
  private customerSubject$ = new BehaviorSubject<Customer>({});
  public Customer$ = this.customerSubject$.asObservable();
  constructor(private customerService: CustomerService) {
    this.customerService.apiCustomerMeGet$Json().subscribe(me => this.customerSubject$.next(me));
  }
}
