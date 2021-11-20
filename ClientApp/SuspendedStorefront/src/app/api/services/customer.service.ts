/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiCustomerGet
   */
  static readonly ApiCustomerGetPath = '/api/Customer';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Customer>>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerService.ApiCustomerGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Customer>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCustomerGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerGet$Plain(params?: {
  }): Observable<Array<Customer>> {

    return this.apiCustomerGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Customer>>) => r.body as Array<Customer>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Customer>>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerService.ApiCustomerGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Customer>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCustomerGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerGet$Json(params?: {
  }): Observable<Array<Customer>> {

    return this.apiCustomerGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Customer>>) => r.body as Array<Customer>)
    );
  }

  /**
   * Path part for operation apiCustomerPost
   */
  static readonly ApiCustomerPostPath = '/api/Customer';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerPost$Plain()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiCustomerPost$Plain$Response(params?: {
    body?: Customer
  }): Observable<StrictHttpResponse<Customer>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerService.ApiCustomerPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Customer>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCustomerPost$Plain$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiCustomerPost$Plain(params?: {
    body?: Customer
  }): Observable<Customer> {

    return this.apiCustomerPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Customer>) => r.body as Customer)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerPost$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiCustomerPost$Json$Response(params?: {
    body?: Customer
  }): Observable<StrictHttpResponse<Customer>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerService.ApiCustomerPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Customer>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCustomerPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiCustomerPost$Json(params?: {
    body?: Customer
  }): Observable<Customer> {

    return this.apiCustomerPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Customer>) => r.body as Customer)
    );
  }

  /**
   * Path part for operation apiCustomerIdGet
   */
  static readonly ApiCustomerIdGetPath = '/api/Customer/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerIdGet$Plain$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<Customer>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerService.ApiCustomerIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Customer>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCustomerIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerIdGet$Plain(params: {
    id: string;
  }): Observable<Customer> {

    return this.apiCustomerIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Customer>) => r.body as Customer)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerIdGet$Json$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<Customer>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerService.ApiCustomerIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Customer>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCustomerIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerIdGet$Json(params: {
    id: string;
  }): Observable<Customer> {

    return this.apiCustomerIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Customer>) => r.body as Customer)
    );
  }

  /**
   * Path part for operation apiCustomerIdPatch
   */
  static readonly ApiCustomerIdPatchPath = '/api/Customer/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerIdPatch$Plain()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiCustomerIdPatch$Plain$Response(params: {
    id: string;
    body?: Customer
  }): Observable<StrictHttpResponse<Customer>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerService.ApiCustomerIdPatchPath, 'patch');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Customer>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCustomerIdPatch$Plain$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiCustomerIdPatch$Plain(params: {
    id: string;
    body?: Customer
  }): Observable<Customer> {

    return this.apiCustomerIdPatch$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Customer>) => r.body as Customer)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerIdPatch$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiCustomerIdPatch$Json$Response(params: {
    id: string;
    body?: Customer
  }): Observable<StrictHttpResponse<Customer>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerService.ApiCustomerIdPatchPath, 'patch');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Customer>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCustomerIdPatch$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiCustomerIdPatch$Json(params: {
    id: string;
    body?: Customer
  }): Observable<Customer> {

    return this.apiCustomerIdPatch$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Customer>) => r.body as Customer)
    );
  }

}
