import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type download_uuid_mapping_for_this_sandboxSearchParameters = Masquerade;

type Options =
  | {
      query?: Partial<download_uuid_mapping_for_this_sandboxSearchParameters>;
      /** @deprecated Use {Options.query} */
      searchParams?: Partial<download_uuid_mapping_for_this_sandboxSearchParameters>;
      strict?: false;
    }
  | {
      query?: Partial<download_uuid_mapping_for_this_sandboxSearchParameters>;
      /** @deprecated Use {Options.query} */
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
  const response = await client().fetchAs<JSONValue>(`/api/lti/uuid_map`, {
    method: 'GET',
    ...options
  });
  return response;
}
