/* tslint:disable */
/* eslint-disable */
import { Customer } from './customer';
import { Product } from './product';
export interface ProductSubscription {
  customer?: Customer;
  customerID?: string;
  fridayQuantity?: number;
  id?: string;
  isActive?: boolean;
  maxSuspendedQuantity?: number;
  mondayQuantity?: number;
  previousSubscriptionID?: string;
  product?: Product;
  productID?: string;
  recurringBasketID?: string;
  saturdayQuantity?: number;
  sundayQuantity?: number;
  thursdayQuantity?: number;
  tuesdayQuantity?: number;
  wednesdayQuantity?: number;
}
