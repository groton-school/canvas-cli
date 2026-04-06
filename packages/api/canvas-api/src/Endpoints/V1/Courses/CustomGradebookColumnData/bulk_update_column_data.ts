import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';
import { Progress } from '../../../../Resources/CoursePace.js';

export type bulk_update_column_dataPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
};

export type bulk_update_column_dataSearchParameters = Masquerade;

export type bulk_update_column_dataFormParameters = Masquerade & {
  /**
   * Column content. Setting this to an empty string will delete the data
   * object.
   */
  column_data: string[];
};

type Options = (
  | {
      path: bulk_update_column_dataPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: bulk_update_column_dataPathParameters;
    }
) &
  (
    | {
        query?: Partial<bulk_update_column_dataSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams?: Partial<bulk_update_column_dataSearchParameters>;
        body?: Partial<bulk_update_column_dataFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<bulk_update_column_dataFormParameters>;
        strict?: false;
      }
    | {
        query?: Partial<bulk_update_column_dataSearchParameters>;
        /** @deprecated Use {Options.query} */
        searchParams: bulk_update_column_dataSearchParameters;
        body?: Partial<bulk_update_column_dataFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params: bulk_update_column_dataFormParameters;
        strict: true;
      }
  );

/**
 * Bulk update column data
 *
 * Set the content of custom columns
 *
 * { "column_data": [ { "column_id": example_column_id, "user_id":
 * example_student_id, "content": example_content }, { "column_id":
 * example_column_id, "user_id": example_student_id, "content: example_content }
 * ] }
 *
 * Nickname: bulk_update_column_data
 */
export async function bulk_update_column_data(options: Options) {
  const response = await client().fetchAs<Progress>(
    `/api/v1/courses/{course_id}/custom_gradebook_column_data`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
