type Parameters = {};

type Options = {
  parameters: Parameters;
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
export async function download_uuid_mapping_for_this_sandbox({
  parameters
}: Options): Promise<void> {
  return await (
    await fetch(`/lti/uuid_map`, { method: 'GET', body: parameters })
  ).json();
}
