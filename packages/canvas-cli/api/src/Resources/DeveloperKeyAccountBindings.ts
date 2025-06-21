export type DeveloperKeyAccountBinding = {
  /**
   * The Canvas ID of the binding
   *
   * Type: number
   */
  id: number | string;
  /**
   * The global Canvas ID of the account in the binding
   *
   * Type: number
   */
  account_id: number | string;
  /**
   * The global Canvas ID of the developer key in the binding
   *
   * Type: number
   */
  developer_key_id: number | string;
  /**
   * The workflow state of the binding. Will be one of 'on', 'off', or 'allow.'
   *
   * Type: number
   */
  workflow_state: number | string;
  /**
   * True if the requested context owns the binding
   *
   * Type: boolean
   */
  account_owns_binding: boolean | string;
};
