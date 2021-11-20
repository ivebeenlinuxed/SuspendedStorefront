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
import { ProductSubscription } from '../models/product-subscription';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiSubscriptionGet
   */
  static readonly ApiSubscriptionGetPath = '/api/Subscription';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSubscriptionGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSubscriptionGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<ProductSubscription>>> {

    const rb = new RequestBuilder(this.rootUrl, SubscriptionService.ApiSubscriptionGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ProductSubscription>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSubscriptionGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSubscriptionGet$Plain(params?: {
  }): Observable<Array<ProductSubscription>> {

    return this.apiSubscriptionGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ProductSubscription>>) => r.body as Array<ProductSubscription>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSubscriptionGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSubscriptionGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<ProductSubscription>>> {

    const rb = new RequestBuilder(this.rootUrl, SubscriptionService.ApiSubscriptionGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ProductSubscription>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSubscriptionGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSubscriptionGet$Json(params?: {
  }): Observable<Array<ProductSubscription>> {

    return this.apiSubscriptionGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ProductSubscription>>) => r.body as Array<ProductSubscription>)
    );
  }

  /**
   * Path part for operation apiSubscriptionPost
   */
  static readonly ApiSubscriptionPostPath = '/api/Subscription';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSubscriptionPost$Plain()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiSubscriptionPost$Plain$Response(params?: {
    body?: ProductSubscription
  }): Observable<StrictHttpResponse<ProductSubscription>> {

    const rb = new RequestBuilder(this.rootUrl, SubscriptionService.ApiSubscriptionPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProductSubscription>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSubscriptionPost$Plain$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiSubscriptionPost$Plain(params?: {
    body?: ProductSubscription
  }): Observable<ProductSubscription> {

    return this.apiSubscriptionPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ProductSubscription>) => r.body as ProductSubscription)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSubscriptionPost$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiSubscriptionPost$Json$Response(params?: {
    body?: ProductSubscription
  }): Observable<StrictHttpResponse<ProductSubscription>> {

    const rb = new RequestBuilder(this.rootUrl, SubscriptionService.ApiSubscriptionPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProductSubscription>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSubscriptionPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiSubscriptionPost$Json(params?: {
    body?: ProductSubscription
  }): Observable<ProductSubscription> {

    return this.apiSubscriptionPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ProductSubscription>) => r.body as ProductSubscription)
    );
  }

  /**
   * Path part for operation apiSubscriptionIdGet
   */
  static readonly ApiSubscriptionIdGetPath = '/api/Subscription/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSubscriptionIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSubscriptionIdGet$Plain$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<ProductSubscription>> {

    const rb = new RequestBuilder(this.rootUrl, SubscriptionService.ApiSubscriptionIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProductSubscription>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSubscriptionIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSubscriptionIdGet$Plain(params: {
    id: string;
  }): Observable<ProductSubscription> {

    return this.apiSubscriptionIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ProductSubscription>) => r.body as ProductSubscription)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSubscriptionIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSubscriptionIdGet$Json$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<ProductSubscription>> {

    const rb = new RequestBuilder(this.rootUrl, SubscriptionService.ApiSubscriptionIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProductSubscription>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSubscriptionIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSubscriptionIdGet$Json(params: {
    id: string;
  }): Observable<ProductSubscription> {

    return this.apiSubscriptionIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ProductSubscription>) => r.body as ProductSubscription)
    );
  }

  /**
   * Path part for operation apiSubscriptionIdPatch
   */
  static readonly ApiSubscriptionIdPatchPath = '/api/Subscription/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSubscriptionIdPatch$Plain()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiSubscriptionIdPatch$Plain$Response(params: {
    id: string;
    body?: ProductSubscription
  }): Observable<StrictHttpResponse<Product>> {

    const rb = new RequestBuilder(this.rootUrl, SubscriptionService.ApiSubscriptionIdPatchPath, 'patch');
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
   * To access the full response (for headers, for example), `apiSubscriptionIdPatch$Plain$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiSubscriptionIdPatch$Plain(params: {
    id: string;
    body?: ProductSubscription
  }): Observable<Product> {

    return this.apiSubscriptionIdPatch$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Product>) => r.body as Product)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSubscriptionIdPatch$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiSubscriptionIdPatch$Json$Response(params: {
    id: string;
    body?: ProductSubscription
  }): Observable<StrictHttpResponse<Product>> {

    const rb = new RequestBuilder(this.rootUrl, SubscriptionService.ApiSubscriptionIdPatchPath, 'patch');
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
   * To access the full response (for headers, for example), `apiSubscriptionIdPatch$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiSubscriptionIdPatch$Json(params: {
    id: string;
    body?: ProductSubscription
  }): Observable<Product> {

    return this.apiSubscriptionIdPatch$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Product>) => r.body as Product)
    );
  }

}
