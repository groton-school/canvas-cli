import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../Client.js';
import { PermissionHelpText } from '../../../../Resources/Roles.js';

export type getPathParameters = {
  /** ID */
  context_type: string;
  /** ID */
  permission: string;
};

export type getSearchParameters = Masquerade;

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      searchParams?: Partial<getSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: getSearchParameters;
      strict: true;
    }
);

/**
 * Get help text for permissions
 *
 * Retrieve information about what Canvas permissions do and considerations for
 * their use.
 *
 * Nickname: get_help_text_for_permissions
 */
export async function get(options: Options) {
  const response = await client().fetchAs<PermissionHelpText>(
    `/api/v1/permissions/{context_type}/{permission}/help`,
    {
      method: 'GET',
      ...options
    }
  );
  return response;
}
