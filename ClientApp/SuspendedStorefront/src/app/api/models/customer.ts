/* tslint:disable */
/* eslint-disable */
import { ProductSubscription } from './product-subscription';
export interface Customer {
  address1?: null | string;
  address2?: null | string;
  city?: null | string;
  county?: null | string;
  id?: string;
  isActive?: boolean;
  name?: null | string;
  postalCode?: null | string;
  productSubscriptions?: null | Array<ProductSubscription>;
}
