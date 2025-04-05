import { User } from './Users.js';

export type Admin = {
  /**
   * The unique identifier for the account role/user assignment.
   *
   * Type: integer
   */
  id: number;
  /**
   * The account role assigned. This can be 'AccountAdmin' or a user-defined
   * role created by the Roles API.
   */
  role: string;
  /** The user the role is assigned to. See the Users API for details. */
  user: User;
  /** The status of the account role/user assignment. */
  workflow_state: string;
};
