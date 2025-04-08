export type Account = {
  /**
   * The ID of the Account object
   *
   * Type: integer
   */
  id: number;
  /** The display name of the account */
  name: string;
  /** The UUID of the account */
  uuid: string;
  /**
   * The account's parent ID, or null if this is the root account
   *
   * Type: integer
   */
  parent_account_id: number;
  /**
   * The ID of the root account, or null if this is the root account
   *
   * Type: integer
   */
  root_account_id: number;
  /** The state of the account. Can be 'active' or 'deleted'. */
  workflow_state: string;
};
