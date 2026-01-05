import { JSONValue } from '@battis/typescript-tricks';
import { Masquerade } from '@groton/canvas-api.client.base';
import { client } from '../../../../../Client.js';
import { Progress } from '../../../../../Resources/CoursePace.js';

export type import_differentiation_tagsPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
};

export type import_differentiation_tagsSearchParameters = Masquerade;

export type import_differentiation_tagsFormParameters = Masquerade & {
  /**
   * There are two ways to post differentiation tag import data - either via a
   * multipart/form-data form-field-style attachment, or via a non-multipart
   * raw post request.
   *
   * 'attachment' is required for multipart/form-data style posts. Assumed to
   * be tag data from a file upload form field named 'attachment'.
   *
   * Examples: curl -F attachment=@<filename> -H "Authorization: Bearer
   * <token>"\
   * 'https://<canvas>/api/v1/group_categories/import_tags'
   *
   * If you decide to do a raw post, you can skip the 'attachment' argument,
   * but you will then be required to provide a suitable Content-Type header.
   * You are encouraged to also provide the 'extension' argument.
   *
   * Examples: curl -H 'Content-Type: text/csv' --data-binary @<filename>.csv\
   * -H "Authorization: Bearer <token>"\
   * 'https://<canvas>/api/v1/group_categories_tags'
   */
  attachment: string;
};

type Options = {
  pathParams: import_differentiation_tagsPathParameters;
} & (
  | {
      searchParams?: Partial<import_differentiation_tagsSearchParameters>;
      params?: Partial<import_differentiation_tagsFormParameters>;
      strict?: false;
    }
  | {
      searchParams: import_differentiation_tagsSearchParameters;
      params: import_differentiation_tagsFormParameters;
      strict: true;
    }
);

/**
 * Import differentiation tags
 *
 * Create Differentiation Tags through a CSV import
 *
 * For more information on the format that's expected here, please see the
 * "Differentiation Tag CSV" section in the API docs.
 *
 * Nickname: import_differentiation_tags
 */
export async function import_differentiation_tags(options: Options) {
  const response = await client().fetchAs<Progress>(
    `/api/v1/courses/{course_id}/group_categories/import_tags`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
