import { JSONValue } from '@battis/typescript-tricks';

export type Tab = {
  html_url: string;
  id: string;
  label: string;
  type: string;
  /**
   * Only included if true
   *
   * Type: boolean
   */
  hidden: boolean | string;
  /** Possible values are: public, members, admins, and none */
  visibility: string;
  /**
   * 1 based
   *
   * Type: integer
   */
  position: number | string;
};
