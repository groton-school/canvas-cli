import { URLString } from '@battis/descriptive-types';

export type OAuth2GrantType =
  | {
      implicit?: Implicit;
      authorization_code: AuthorizationCode;
    }
  | {
      implicit: Implicit;
      authorization_code?: AuthorizationCode;
    };

type Implicit = {
  loginEndpoint: LoginEndpoint;
  tokenName?: string;
};

type LoginEndpoint = {
  url?: URLString;
};

type TokenEndpoint = {
  url: URLString;
  tokenName?: string;
};

type TokenRequestEndpoint = {
  url: URLString;
  clientIdName?: string;
  clientSecretName?: string;
};

type AuthorizationCode = {
  tokenEndpoint: TokenEndpoint;
  tokenRequestEndpoint: TokenRequestEndpoint;
};
