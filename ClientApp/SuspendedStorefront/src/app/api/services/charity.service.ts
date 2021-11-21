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

import { Charity } from '../models/charity';
import { CharityProduct } from '../models/charity-product';

@Injectable({
  providedIn: 'root',
})
export class CharityService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiCharityGet
   */
  static readonly ApiCharityGetPath = '/api/Charity';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCharityGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCharityGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Charity>>> {

    const rb = new RequestBuilder(this.rootUrl, CharityService.ApiCharityGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Charity>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCharityGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCharityGet$Plain(params?: {
  }): Observable<Array<Charity>> {

    return this.apiCharityGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Charity>>) => r.body as Array<Charity>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCharityGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCharityGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Charity>>> {

    const rb = new RequestBuilder(this.rootUrl, CharityService.ApiCharityGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Charity>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCharityGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCharityGet$Json(params?: {
  }): Observable<Array<Charity>> {

    return this.apiCharityGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Charity>>) => r.body as Array<Charity>)
    );
  }

  /**
   * Path part for operation apiCharityPost
   */
  static readonly ApiCharityPostPath = '/api/Charity';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCharityPost$Plain()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiCharityPost$Plain$Response(params?: {
    body?: Charity
  }): Observable<StrictHttpResponse<Charity>> {

    const rb = new RequestBuilder(this.rootUrl, CharityService.ApiCharityPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Charity>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCharityPost$Plain$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiCharityPost$Plain(params?: {
    body?: Charity
  }): Observable<Charity> {

    return this.apiCharityPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Charity>) => r.body as Charity)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCharityPost$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiCharityPost$Json$Response(params?: {
    body?: Charity
  }): Observable<StrictHttpResponse<Charity>> {

    const rb = new RequestBuilder(this.rootUrl, CharityService.ApiCharityPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Charity>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCharityPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiCharityPost$Json(params?: {
    body?: Charity
  }): Observable<Charity> {

    return this.apiCharityPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Charity>) => r.body as Charity)
    );
  }

  /**
   * Path part for operation apiCharityIdCharityProductPost
   */
  static readonly ApiCharityIdCharityProductPostPath = '/api/Charity/{id}/charity_product';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCharityIdCharityProductPost$Plain()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiCharityIdCharityProductPost$Plain$Response(params: {
    id: string;
    body?: CharityProduct
  }): Observable<StrictHttpResponse<CharityProduct>> {

    const rb = new RequestBuilder(this.rootUrl, CharityService.ApiCharityIdCharityProductPostPath, 'post');
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
        return r as StrictHttpResponse<CharityProduct>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCharityIdCharityProductPost$Plain$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiCharityIdCharityProductPost$Plain(params: {
    id: string;
    body?: CharityProduct
  }): Observable<CharityProduct> {

    return this.apiCharityIdCharityProductPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CharityProduct>) => r.body as CharityProduct)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCharityIdCharityProductPost$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiCharityIdCharityProductPost$Json$Response(params: {
    id: string;
    body?: CharityProduct
  }): Observable<StrictHttpResponse<CharityProduct>> {

    const rb = new RequestBuilder(this.rootUrl, CharityService.ApiCharityIdCharityProductPostPath, 'post');
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
        return r as StrictHttpResponse<CharityProduct>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCharityIdCharityProductPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiCharityIdCharityProductPost$Json(params: {
    id: string;
    body?: CharityProduct
  }): Observable<CharityProduct> {

    return this.apiCharityIdCharityProductPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CharityProduct>) => r.body as CharityProduct)
    );
  }

  /**
   * Path part for operation apiCharityCharityIdCharityProductCharityProductIdDelete
   */
  static readonly ApiCharityCharityIdCharityProductCharityProductIdDeletePath = '/api/Charity/{charityID}/charity_product/{charityProductID}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCharityCharityIdCharityProductCharityProductIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCharityCharityIdCharityProductCharityProductIdDelete$Response(params: {
    charityID: string;
    charityProductID: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CharityService.ApiCharityCharityIdCharityProductCharityProductIdDeletePath, 'delete');
    if (params) {
      rb.path('charityID', params.charityID, {});
      rb.path('charityProductID', params.charityProductID, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCharityCharityIdCharityProductCharityProductIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCharityCharityIdCharityProductCharityProductIdDelete(params: {
    charityID: string;
    charityProductID: string;
  }): Observable<void> {

    return this.apiCharityCharityIdCharityProductCharityProductIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiCharityIdGet
   */
  static readonly ApiCharityIdGetPath = '/api/Charity/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCharityIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCharityIdGet$Plain$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<Charity>> {

    const rb = new RequestBuilder(this.rootUrl, CharityService.ApiCharityIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Charity>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCharityIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCharityIdGet$Plain(params: {
    id: string;
  }): Observable<Charity> {

    return this.apiCharityIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Charity>) => r.body as Charity)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCharityIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCharityIdGet$Json$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<Charity>> {

    const rb = new RequestBuilder(this.rootUrl, CharityService.ApiCharityIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Charity>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCharityIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCharityIdGet$Json(params: {
    id: string;
  }): Observable<Charity> {

    return this.apiCharityIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Charity>) => r.body as Charity)
    );
  }

  /**
   * Path part for operation apiCharityIdPatch
   */
  static readonly ApiCharityIdPatchPath = '/api/Charity/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCharityIdPatch$Plain()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiCharityIdPatch$Plain$Response(params: {
    id: string;
    body?: Charity
  }): Observable<StrictHttpResponse<Charity>> {

    const rb = new RequestBuilder(this.rootUrl, CharityService.ApiCharityIdPatchPath, 'patch');
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
        return r as StrictHttpResponse<Charity>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCharityIdPatch$Plain$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiCharityIdPatch$Plain(params: {
    id: string;
    body?: Charity
  }): Observable<Charity> {

    return this.apiCharityIdPatch$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Charity>) => r.body as Charity)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCharityIdPatch$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiCharityIdPatch$Json$Response(params: {
    id: string;
    body?: Charity
  }): Observable<StrictHttpResponse<Charity>> {

    const rb = new RequestBuilder(this.rootUrl, CharityService.ApiCharityIdPatchPath, 'patch');
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
        return r as StrictHttpResponse<Charity>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCharityIdPatch$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiCharityIdPatch$Json(params: {
    id: string;
    body?: Charity
  }): Observable<Charity> {

    return this.apiCharityIdPatch$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Charity>) => r.body as Charity)
    );
  }

}
