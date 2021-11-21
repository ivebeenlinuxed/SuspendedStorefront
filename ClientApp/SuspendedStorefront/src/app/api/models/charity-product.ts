/* tslint:disable */
/* eslint-disable */
import { Charity } from './charity';
import { Product } from './product';
export interface CharityProduct {
  charity?: Charity;
  charityID?: string;
  id?: string;
  isActive?: boolean;
  lastDelivery?: string;
  product?: Product;
  productID?: string;
  weeklyQuantity?: number;
}
