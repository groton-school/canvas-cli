import { JSONValue } from '@battis/typescript-tricks';

export type InstAccessToken = {
  /** The InstAccess token itself -- a signed, encrypted JWT */
  token: string;
};
