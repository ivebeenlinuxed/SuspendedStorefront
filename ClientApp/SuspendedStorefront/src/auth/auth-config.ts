import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
    redirectUri: window.location.origin + "/",

    // The SPA's id. The SPA is registerd with this id at the auth-server
    clientId: "mOZBliPWIwRGzrG7uZlnVvtNjDqQtd4W",

    // set the scope for the permissions the client should request
    // The first three are defined by OIDC. The 4th is a usecase-specific one
    scope: "openid profile",
    customQueryParams: {
      audience: "https://api.mtc.yottaops.io"
    },

    // set to true, to receive also an id_token via OpenId Connect (OIDC) in addition to the
    // OAuth2-based access_token
    oidc: true, // ID_Token

    issuer: "https://ivebeenlinuxed.eu.auth0.com/"
};