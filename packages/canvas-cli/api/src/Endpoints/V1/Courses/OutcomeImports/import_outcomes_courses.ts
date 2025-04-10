import { client } from '../../../../Client.js';
import { OutcomeImport } from '../../../../Resources/OutcomeImports.js';

export type import_outcomes_coursesPathParameters = {
  /** ID */
  course_id: string;
};

export type import_outcomes_coursesFormParameters = {
  /**
   * Choose the data format for reading outcome data. With a standard Canvas
   * install, this option can only be 'instructure_csv', and if unprovided,
   * will be assumed to be so. Can be part of the query string.
   */
  import_type: string;
  /**
   * There are two ways to post outcome import data - either via a
   * multipart/form-data form-field-style attachment, or via a non-multipart
   * raw post request.
   *
   * 'attachment' is required for multipart/form-data style posts. Assumed to
   * be outcome data from a file upload form field named 'attachment'.
   *
   * Examples: curl -F attachment=@<filename> -H "Authorization: Bearer
   * <token>"\
   * 'https://<canvas>/api/v1/accounts/<account_id>/outcome_imports?import_type=instructure_csv'
   * curl -F attachment=@<filename> -H "Authorization: Bearer <token>"\
   * 'https://<canvas>/api/v1/courses/<course_id>/outcome_imports?import_type=instructure_csv'
   *
   * If you decide to do a raw post, you can skip the 'attachment' argument,
   * but you will then be required to provide a suitable Content-Type header.
   * You are encouraged to also provide the 'extension' argument.
   *
   * Examples: curl -H 'Content-Type: text/csv' --data-binary @<filename>.csv\
   * -H "Authorization: Bearer <token>"\
   * 'https://<canvas>/api/v1/accounts/<account_id>/outcome_imports?import_type=instructure_csv'
   *
   * Curl -H 'Content-Type: text/csv' --data-binary @<filename>.csv\
   * -H "Authorization: Bearer <token>"\
   * 'https://<canvas>/api/v1/courses/<course_id>/outcome_imports?import_type=instructure_csv'
   */
  attachment: string;
  /**
   * Recommended for raw post request style imports. This field will be used
   * to distinguish between csv and other file format extensions that would
   * usually be provided with the filename in the multipart post request
   * scenario. If not provided, this value will be inferred from the
   * Content-Type, falling back to csv-file format if all else fails.
   */
  extension: string;
};

type Options = {
  pathParams: import_outcomes_coursesPathParameters;
} & (
  | {
      params?: Partial<import_outcomes_coursesFormParameters>;
      strict?: false;
    }
  | {
      params?: import_outcomes_coursesFormParameters;
      strict: true;
    }
);

/**
 * Import Outcomes
 *
 * Import outcomes into Canvas.
 *
 * For more information on the format that's expected here, please see the
 * "Outcomes CSV" section in the API docs.
 *
 * Nickname: import_outcomes_courses
 */
export async function import_outcomes_courses({ pathParams, params }: Options) {
  return await client().fetchAs<OutcomeImport>(
    `/v1/courses/{course_id}/outcome_imports`,
    {
      method: 'POST',
      pathParams,
      params
    }
  );
}
