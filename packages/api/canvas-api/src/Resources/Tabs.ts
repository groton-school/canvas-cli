import { JSONValue } from '@battis/typescript-tricks';

/**
 *
 */
export type Tab = {
  /**
   *
   *
   *
   */
  html_url: string;
  /**
   *
   *
   *
   */
  id: string;
  /**
   *
   *
   *
   */
  label: string;
  /**
   *
   *
   *
   */
  type: string;
  /**
   * only included if true
   *
   * type: boolean
   */
  hidden: boolean | string;
  /**
   * possible values are: public, members, admins, and none
   *
   *
   */
  visibility: string;
  /**
   * 1 based
   *
   * type: integer
   */
  position: number | string;
};
