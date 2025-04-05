import { OAuth2GrantType } from './OAuth2GrantType.js';

export type AuthorizationObject = BasicAuth | ApiKey | OAuth2;

type BasicAuth = {
  type: 'basicAuth';
};

type ApiKey = {
  type: 'apiKey';
  passAs: 'header' | 'query';
  keyname: string;
};

type OAuth2 = {
  type: 'oauth2';
  scopes?: OAuth2Scope[];
  grantTypes: OAuth2GrantType;
};

export type OAuth2Scope = {
  scope: string;
  description?: string;
};
