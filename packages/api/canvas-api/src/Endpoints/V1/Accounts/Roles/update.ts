import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { Role } from '../../../../Resources/Roles.js';

export type updatePathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  account_id: string | number;
  /**
   * ID
   *
   * Type: string
   */
  id: string | number;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
  /**
   * The label for the role. Can only change the label of a custom role that
   * belongs directly to the account.
   */
  label: string;
  /**
   * No description
   *
   * Type: boolean
   */
  'permissions[<X>][explicit]': boolean | string;
  /**
   * These arguments are described in the documentation for the
   * {api:RoleOverridesController#add_role add_role method}.
   *
   * Type: boolean
   */
  'permissions[<X>][enabled]': boolean | string;
  /**
   * If the value is 1, permission <X> applies to the account this role is in.
   * The default value is 1. Must be true if applies_to_descendants is false.
   * This value is only returned if enabled is true.
   *
   * Type: boolean
   */
  'permissions[<X>][applies_to_self]': boolean | string;
  /**
   * If the value is 1, permission <X> cascades down to sub accounts of the
   * account this role is in. The default value is 1. Must be true if
   * applies_to_self is false.This value is only returned if enabled is true.
   *
   * Type: boolean
   */
  'permissions[<X>][applies_to_descendants]': boolean | string;
};

type Options = {
  pathParams: updatePathParameters;
} & (
  | {
      searchParams?: Partial<updateSearchParameters>;
      params?: Partial<updateFormParameters>;
      strict?: false;
    }
  | {
      searchParams: updateSearchParameters;
      params: updateFormParameters;
      strict: true;
    }
);

/**
 * Update a role
 *
 * Update permissions for an existing role.
 *
 * Recognized roles are: TeacherEnrollment StudentEnrollment TaEnrollment
 * ObserverEnrollment DesignerEnrollment AccountAdmin Any previously created
 * custom role
 *
 * Nickname: update_role
 */
export async function update(options: Options) {
  const response = await client().fetchAs<Role>(
    `/api/v1/accounts/{account_id}/roles/{id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
