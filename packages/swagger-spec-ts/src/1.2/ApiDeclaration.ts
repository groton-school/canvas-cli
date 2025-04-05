import {
  MimeTypeString,
  PathString,
  URLString
} from '@battis/descriptive-types';
import { AuthorizationObject } from './AuthorizationObject';
import { ModelsObject } from './ModelsObject';
import { OperationObject } from './OperationObject';

export type ApiDeclaration = {
  swaggerVersion: '1.2';
  apiVersion?: string;
  /** Format: uri; pattern: ^https?:// */
  basePath: URLString;
  /** Format: uri, pattern ^/ */
  resourcePath?: PathString;
  apis: ApiObject[];
  models?: Record<string, ModelsObject>;
  produces?: MimeTypeArray;
  consumes?: MimeTypeArray;
  authorizations?: AuthorizationObject;
};

export type ApiObject = {
  /** Format: uri-template, pattern ^/ */
  path: string;
  description?: string;
  operations: OperationObject[];
};

/** Format: mime-type, unique items */
export type MimeTypeArray = MimeTypeString[];
