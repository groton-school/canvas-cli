import { client } from '../../../../../../../Client.js';

export type getPathParameters = {
  /** ID */
  section_id: string;
  /** ID */
  assignment_id: string;
  /** ID */
  user_id: string;
};

type Options = {
  pathParams: getPathParameters;
} & (
  | {
      strict?: false;
    }
  | {
      strict: true;
    }
);

/**
 * Get document annotations read state
 *
 * Return whether annotations made on a submitted document have been read by the
 * student
 *
 * Nickname: get_document_annotations_read_state_sections
 */
export async function get(options: Options) {
  return await client().fetchAs<void>(
    `/api/v1/sections/{section_id}/assignments/{assignment_id}/submissions/{user_id}/document_annotations/read`,
    {
      method: 'GET',
      ...options
    }
  );
}
