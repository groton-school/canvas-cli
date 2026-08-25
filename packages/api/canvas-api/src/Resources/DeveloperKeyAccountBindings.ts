import { JSONValue } from '@battis/typescript-tricks';

/**
 *
 */
export type DeveloperKeyAccountBinding = {
  /**
   * The Canvas ID of the binding
   *
   * type: number
   */
  id: number | string;
  /**
   * The global Canvas ID of the account in the binding
   *
   * type: number
   */
  account_id: number | string;
  /**
   * The global Canvas ID of the developer key in the binding
   *
   * type: number
   */
  developer_key_id: number | string;
  /**
   * The workflow state of the binding. Will be one of 'on', 'off', or 'allow.'
   *
   * type: number
   */
  workflow_state: number | string;
  /**
   * True if the requested context owns the binding
   *
   * type: boolean
   */
  account_owns_binding: boolean | string;
};
