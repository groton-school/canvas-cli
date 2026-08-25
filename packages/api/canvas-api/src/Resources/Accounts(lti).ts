import { JSONValue } from '@battis/typescript-tricks';

/**
 *
 */
export type Account = {
  /**
   * the ID of the Account object
   *
   * type: integer
   */
  id: number | string;
  /**
   * The display name of the account
   *
   *
   */
  name: string;
  /**
   * The UUID of the account
   *
   *
   */
  uuid: string;
  /**
   * The account's parent ID, or null if this is the root account
   *
   * type: integer
   */
  parent_account_id: number | string;
  /**
   * The ID of the root account, or null if this is the root account
   *
   * type: integer
   */
  root_account_id: number | string;
  /**
   * The state of the account. Can be 'active' or 'deleted'.
   *
   *
   */
  workflow_state: string;
};
