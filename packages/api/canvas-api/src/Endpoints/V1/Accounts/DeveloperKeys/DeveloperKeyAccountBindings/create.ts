import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';
import { DeveloperKeyAccountBinding } from '../../../../../Resources/DeveloperKeyAccountBindings.js';

export type createPathParameters = {
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
  developer_key_id: string | number;
};

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
  /**
   * The workflow state for the binding. Must be one of "on", "off", or
   * "allow". Defaults to "off".
   */
  workflow_state: string;
};

type Options = {
  pathParams: createPathParameters;
} & (
  | {
      searchParams?: Partial<createSearchParameters>;
      params?: Partial<createFormParameters>;
      strict?: false;
    }
  | {
      searchParams: createSearchParameters;
      params: createFormParameters;
      strict: true;
    }
);

/**
 * Create a Developer Key Account Binding
 *
 * Create a new Developer Key Account Binding. The developer key specified in
 * the request URL must be available in the requested account or the requested
 * account's account chain. If the binding already exists for the specified
 * account/key combination it will be updated.
 *
 * Nickname: create_developer_key_account_binding
 */
export async function create(options: Options) {
  const response = await client().fetchAs<DeveloperKeyAccountBinding>(
    `/api/v1/accounts/{account_id}/developer_keys/{developer_key_id}/developer_key_account_bindings`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
