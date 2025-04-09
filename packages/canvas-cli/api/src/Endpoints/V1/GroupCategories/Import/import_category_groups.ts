import { client } from '../../../../Client.js';
import { Progress } from '../../../../Resources/CoursePace.js';

export type import_category_groupsPathParameters = {
  /** ID */
  group_category_id: string;
};

export type import_category_groupsFormParameters = {
  /**
   * There are two ways to post group category import data - either via a
   * multipart/form-data form-field-style attachment, or via a non-multipart
   * raw post request.
   *
   * 'attachment' is required for multipart/form-data style posts. Assumed to
   * be outcome data from a file upload form field named 'attachment'.
   *
   * Examples: curl -F attachment=@<filename> -H "Authorization: Bearer
   * <token>"\
   * 'https://<canvas>/api/v1/group_categories/<category_id>/import'
   *
   * If you decide to do a raw post, you can skip the 'attachment' argument,
   * but you will then be required to provide a suitable Content-Type header.
   * You are encouraged to also provide the 'extension' argument.
   *
   * Examples: curl -H 'Content-Type: text/csv' --data-binary @<filename>.csv\
   * -H "Authorization: Bearer <token>"\
   * 'https://<canvas>/api/v1/group_categories/<category_id>/import'
   */
  attachment: string;
};

type Options = {
  pathParams: import_category_groupsPathParameters;
  params?: import_category_groupsFormParameters;
};

/**
 * Import category groups
 *
 * Create Groups in a Group Category through a CSV import
 *
 * For more information on the format that's expected here, please see the
 * "Group Category CSV" section in the API docs.
 *
 * Nickname: import_category_groups
 */
export async function import_category_groups({ pathParams, params }: Options) {
  return await client().fetchAs<Progress>(
    `/v1/group_categories/{group_category_id}/import`,
    {
      method: 'POST',
      pathParams,
      params
    }
  );
}
