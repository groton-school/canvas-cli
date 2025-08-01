import { Masquerade } from '@groton/canvas-cli.client.base';
import { client } from '../../../Client.js';

export type download_uuid_mapping_for_this_sandboxSearchParameters = Masquerade;

type Options =
  | {
      searchParams?: Partial<download_uuid_mapping_for_this_sandboxSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: download_uuid_mapping_for_this_sandboxSearchParameters;
      strict: true;
    };

/**
 * Download UUID Mapping for this Sandbox
 *
 * This endpoint returns a CSV file with the UUID mapping for the sandbox. The
 * CSV has three columns: `type` - The object type `original_uuid` - The UUID of
 * an object from the template `new_uuid` - The UUID of the corresponding object
 * in the sandbox
 *
 * Nickname: download_uuid_mapping_for_this_sandbox
 */
export async function download_uuid_mapping_for_this_sandbox(options: Options) {
  const response = await client().fetchAs<void>(`/api/lti/uuid_map`, {
    method: 'GET',
    ...options
  });
  return response;
}
