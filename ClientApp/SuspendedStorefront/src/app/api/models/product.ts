/* tslint:disable */
/* eslint-disable */
import { ProductSubscription } from './product-subscription';
export interface Product {
  id?: string;
  isActive?: boolean;
  name?: null | string;
  price?: number;
  subscriptions?: null | Array<ProductSubscription>;
}
