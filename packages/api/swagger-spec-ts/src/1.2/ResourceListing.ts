import { AuthorizationObject } from './AuthorizationObject.js';
import { InfoObject } from './InfoObject.js';
import { ResourceObject } from './ResourceObject.js';

export type ResourceListing = {
  swaggerVersion: '1.2';
  apis: ResourceObject[];
  apiVersion?: string;
  info?: InfoObject;
  authorizations: AuthorizationObject;
};
