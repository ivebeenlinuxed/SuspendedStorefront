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

import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiProductGet
   */
  static readonly ApiProductGetPath = '/api/Product';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Product>>> {

    const rb = new RequestBuilder(this.rootUrl, ProductService.ApiProductGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Product>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProductGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductGet$Plain(params?: {
  }): Observable<Array<Product>> {

    return this.apiProductGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Product>>) => r.body as Array<Product>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Product>>> {

    const rb = new RequestBuilder(this.rootUrl, ProductService.ApiProductGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Product>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProductGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductGet$Json(params?: {
  }): Observable<Array<Product>> {

    return this.apiProductGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Product>>) => r.body as Array<Product>)
    );
  }

  /**
   * Path part for operation apiProductPost
   */
  static readonly ApiProductPostPath = '/api/Product';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductPost$Plain()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiProductPost$Plain$Response(params?: {
    body?: Product
  }): Observable<StrictHttpResponse<Product>> {

    const rb = new RequestBuilder(this.rootUrl, ProductService.ApiProductPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Product>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProductPost$Plain$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiProductPost$Plain(params?: {
    body?: Product
  }): Observable<Product> {

    return this.apiProductPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Product>) => r.body as Product)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductPost$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiProductPost$Json$Response(params?: {
    body?: Product
  }): Observable<StrictHttpResponse<Product>> {

    const rb = new RequestBuilder(this.rootUrl, ProductService.ApiProductPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Product>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProductPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiProductPost$Json(params?: {
    body?: Product
  }): Observable<Product> {

    return this.apiProductPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Product>) => r.body as Product)
    );
  }

  /**
   * Path part for operation apiProductIdGet
   */
  static readonly ApiProductIdGetPath = '/api/Product/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductIdGet$Plain$Response(params: {
    id: string;
    customerID?: string;
  }): Observable<StrictHttpResponse<Product>> {

    const rb = new RequestBuilder(this.rootUrl, ProductService.ApiProductIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.query('customerID', params.customerID, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Product>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProductIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductIdGet$Plain(params: {
    id: string;
    customerID?: string;
  }): Observable<Product> {

    return this.apiProductIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Product>) => r.body as Product)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductIdGet$Json$Response(params: {
    id: string;
    customerID?: string;
  }): Observable<StrictHttpResponse<Product>> {

    const rb = new RequestBuilder(this.rootUrl, ProductService.ApiProductIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.query('customerID', params.customerID, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Product>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProductIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductIdGet$Json(params: {
    id: string;
    customerID?: string;
  }): Observable<Product> {

    return this.apiProductIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Product>) => r.body as Product)
    );
  }

  /**
   * Path part for operation apiProductIdPatch
   */
  static readonly ApiProductIdPatchPath = '/api/Product/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductIdPatch$Plain()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiProductIdPatch$Plain$Response(params: {
    id: string;
    body?: Product
  }): Observable<StrictHttpResponse<Product>> {

    const rb = new RequestBuilder(this.rootUrl, ProductService.ApiProductIdPatchPath, 'patch');
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
        return r as StrictHttpResponse<Product>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProductIdPatch$Plain$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiProductIdPatch$Plain(params: {
    id: string;
    body?: Product
  }): Observable<Product> {

    return this.apiProductIdPatch$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Product>) => r.body as Product)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductIdPatch$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiProductIdPatch$Json$Response(params: {
    id: string;
    body?: Product
  }): Observable<StrictHttpResponse<Product>> {

    const rb = new RequestBuilder(this.rootUrl, ProductService.ApiProductIdPatchPath, 'patch');
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
        return r as StrictHttpResponse<Product>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProductIdPatch$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiProductIdPatch$Json(params: {
    id: string;
    body?: Product
  }): Observable<Product> {

    return this.apiProductIdPatch$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Product>) => r.body as Product)
    );
  }

}
