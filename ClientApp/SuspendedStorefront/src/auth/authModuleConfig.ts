import { OAuthModuleConfig } from 'angular-oauth2-oidc';

export const authModuleConfig: OAuthModuleConfig = {
  resourceServer: {
    allowedUrls: ['https://api.mtc.yottaops.io/'],
    sendAccessToken: true,
  }
};