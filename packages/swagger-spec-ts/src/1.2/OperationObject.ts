import { MimeTypeString } from '@battis/descriptive-types';
import { OAuth2Scope } from './AuthorizationObject.js';
import { DataTypeBase } from './DataTypeBase.js';
import { ParameterObject } from './ParameterObject.js';

export type OperationObject = DataTypeBase & {
  method: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS';
  /** Max length 120 */
  summary?: string;
  notes?: string;
  /** Pattern ^[a-zA-Z0-9_]+$ */
  nickname: string;
  authorizations?: OAuth2Scope[];
  parameters: ParameterObject[];
  responseMessages?: ResponseMessageObject[];
  produces?: MimeTypeArray;
  consumes?: MimeTypeArray;
  deprecated?: 'true' | 'false';
};

type ResponseMessageObject = {
  code: RFC2616Section10;
  message: string;
  responseModel?: string;
};

/** Integer >=100 <600 */
type RFC2616Section10 = number;

/** Format: mime-type */
type MimeTypeArray = MimeTypeString[];
