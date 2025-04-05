export type DeveloperKeyAccountBinding = {
  /** The Canvas ID of the binding */
  id: number;
  /** The global Canvas ID of the account in the binding */
  account_id: number;
  /** The global Canvas ID of the developer key in the binding */
  developer_key_id: number;
  /** The workflow state of the binding. Will be one of 'on', 'off', or 'allow.' */
  workflow_state: number;
  /** True if the requested context owns the binding */
  account_owns_binding: boolean;
};
