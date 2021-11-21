/* tslint:disable */
/* eslint-disable */
import { CharityProduct } from './charity-product';
import { Customer } from './customer';
export interface Charity {
  address1?: null | string;
  address2?: null | string;
  administrator?: Customer;
  administratorID?: string;
  charityProducts?: null | Array<CharityProduct>;
  city?: null | string;
  county?: null | string;
  id?: string;
  isActive?: boolean;
  name?: null | string;
  pictureURL?: null | string;
  postalCode?: null | string;
  status?: number;
}
