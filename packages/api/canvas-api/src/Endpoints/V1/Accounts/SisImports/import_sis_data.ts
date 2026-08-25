import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { SisImport } from '../../../../Resources/SisImports.js';

export type import_sis_dataPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  account_id: string | number;
};

export type import_sis_dataSearchParameters = Masquerade;

export type import_sis_dataFormParameters = Masquerade & {
  /**
     * Choose the data format for reading SIS data. With a standard Canvas
install, this option can only be &#x27;instructure_csv&#x27;, and if unprovided,
will be assumed to be so. Can be part of the query string.
     *
     * 
     *
     * 
     */
  import_type: string;
  /**
     * There are two ways to post SIS import data - either via a
multipart/form-data form-field-style attachment, or via a non-multipart
raw post request.

&#x27;attachment&#x27; is required for multipart/form-data style posts. Assumed to
be SIS data from a file upload form field named &#x27;attachment&#x27;.

Examples:
  curl -F attachment&#x3D;@&lt;filename&gt; -H &quot;Authorization: Bearer &lt;token&gt;&quot; \
      https://&lt;canvas&gt;/api/v1/accounts/&lt;account_id&gt;/sis_imports.json?import_type&#x3D;instructure_csv

If you decide to do a raw post, you can skip the &#x27;attachment&#x27; argument,
but you will then be required to provide a suitable Content-Type header.
You are encouraged to also provide the &#x27;extension&#x27; argument.

Examples:
  curl -H &#x27;Content-Type: application/octet-stream&#x27; --data-binary @&lt;filename&gt;.zip \
      -H &quot;Authorization: Bearer &lt;token&gt;&quot; \
      https://&lt;canvas&gt;/api/v1/accounts/&lt;account_id&gt;/sis_imports.json?import_type&#x3D;instructure_csv&amp;extension&#x3D;zip

  curl -H &#x27;Content-Type: application/zip&#x27; --data-binary @&lt;filename&gt;.zip \
      -H &quot;Authorization: Bearer &lt;token&gt;&quot; \
      https://&lt;canvas&gt;/api/v1/accounts/&lt;account_id&gt;/sis_imports.json?import_type&#x3D;instructure_csv

  curl -H &#x27;Content-Type: text/csv&#x27; --data-binary @&lt;filename&gt;.csv \
      -H &quot;Authorization: Bearer &lt;token&gt;&quot; \
      https://&lt;canvas&gt;/api/v1/accounts/&lt;account_id&gt;/sis_imports.json?import_type&#x3D;instructure_csv

  curl -H &#x27;Content-Type: text/csv&#x27; --data-binary @&lt;filename&gt;.csv \
      -H &quot;Authorization: Bearer &lt;token&gt;&quot; \
      https://&lt;canvas&gt;/api/v1/accounts/&lt;account_id&gt;/sis_imports.json?import_type&#x3D;instructure_csv&amp;batch_mode&#x3D;1&amp;batch_mode_term_id&#x3D;15

If the attachment is a zip file, the uncompressed file(s) cannot be 100x larger than the zip, or the import will fail.
For example, if the zip file is 1KB but the total size of the uncompressed file(s) is 100KB or greater the import will
fail. There is a hard cap of 50 GB.
     *
     * 
     *
     * 
     */
  attachment: string;
  /**
     * Recommended for raw post request style imports. This field will be used to
distinguish between zip, xml, csv, and other file format extensions that
would usually be provided with the filename in the multipart post request
scenario. If not provided, this value will be inferred from the
Content-Type, falling back to zip-file format if all else fails.
     *
     * 
     *
     * 
     */
  extension: string;
  /**
     * If set, this SIS import will be run in batch mode, deleting any data
previously imported via SIS that is not present in this latest import.
See the SIS CSV Format page for details.
Batch mode cannot be used with diffing.
     *
     * type: boolean
     *
     * 
     */
  batch_mode: boolean | string;
  /**
   * Limit deletions to only this term. Required if batch mode is enabled.
   *
   *
   *
   *
   */
  batch_mode_term_id: string;
  /**
   * Runs batch mode against all terms in terms file. Requires change_threshold.
   *
   * type: boolean
   *
   *
   */
  multi_term_batch_mode: boolean | string;
  /**
     * When set the import will skip any deletes. This does not account for
objects that are deleted during the batch mode cleanup process.
     *
     * type: boolean
     *
     * 
     */
  skip_deletes: boolean | string;
  /**
     * Default is false. If true, any fields containing “sticky” or UI changes will be overridden.
See SIS CSV Format documentation for information on which fields can have SIS stickiness
     *
     * type: boolean
     *
     * 
     */
  override_sis_stickiness: boolean | string;
  /**
     * This option, if present, will process all changes as if they were UI
changes. This means that &quot;stickiness&quot; will be added to changed fields.
This option is only processed if &#x27;override_sis_stickiness&#x27; is also provided.
     *
     * type: boolean
     *
     * 
     */
  add_sis_stickiness: boolean | string;
  /**
     * This option, if present, will clear &quot;stickiness&quot; from all fields processed
by this import. Requires that &#x27;override_sis_stickiness&#x27; is also provided.
If &#x27;add_sis_stickiness&#x27; is also provided, &#x27;clear_sis_stickiness&#x27; will
overrule the behavior of &#x27;add_sis_stickiness&#x27;
     *
     * type: boolean
     *
     * 
     */
  clear_sis_stickiness: boolean | string;
  /**
     * This option, if present, will override the old (or non-existent)
non-matching SIS ID with the new SIS ID in the upload,
if a pseudonym is found from the login field and the SIS ID doesn&#x27;t match.
     *
     * type: boolean
     *
     * 
     */
  update_sis_id_if_login_claimed: boolean | string;
  /**
     * If set on a CSV import, Canvas will attempt to optimize the SIS import by
comparing this set of CSVs to the previous set that has the same data set
identifier, and only applying the difference between the two. See the
SIS CSV Format documentation for more details.
Diffing cannot be used with batch_mode
     *
     * 
     *
     * 
     */
  diffing_data_set_identifier: string;
  /**
     * If true, and diffing_data_set_identifier is sent, this SIS import will be
part of the data set, but diffing will not be performed. See the SIS CSV
Format documentation for details.
     *
     * type: boolean
     *
     * 
     */
  diffing_remaster_data_set: boolean | string;
  /**
     * If diffing_drop_status is passed, this SIS import will use this status for
enrollments that are not included in the sis_batch. Defaults to &#x27;deleted&#x27;
     *
     * 
     *
     * 
     */
  diffing_drop_status: string;
  /**
     * For users removed from one batch to the next one using the same
diffing_data_set_identifier, set their status to the value of this argument.
Defaults to &#x27;deleted&#x27;.
     *
     * 
     *
     * 
     */
  diffing_user_remove_status: string;
  /**
     * If batch_mode_enrollment_drop_status is passed, this SIS import will use
this status for enrollments that are not included in the sis_batch. This
will have an effect if multi_term_batch_mode is set. Defaults to &#x27;deleted&#x27;
This will still mark courses and sections that are not included in the
sis_batch as deleted, and subsequently enrollments in the deleted courses
and sections as deleted.
     *
     * 
     *
     * 
     */
  batch_mode_enrollment_drop_status: string;
  /**
     * If set with batch_mode, the batch cleanup process will not run if the
number of items deleted is higher than the percentage set. If set to 10
and a term has 200 enrollments, and batch would delete more than 20 of
the enrollments the batch will abort before the enrollments are deleted.
The change_threshold will be evaluated for course, sections, and
enrollments independently.
If set with diffing, diffing will not be performed if the files are
greater than the threshold as a percent. If set to 5 and the file is more
than 5% smaller or more than 5% larger than the file that is being
compared to, diffing will not be performed. If the files are less than 5%,
diffing will be performed. The way the percent is calculated is by taking
the size of the current import and dividing it by the size of the previous
import. The formula used is:
|(1 - current_file_size / previous_file_size)| * 100
See the SIS CSV Format documentation for more details.
Required for multi_term_batch_mode.
     *
     * type: integer

format: 'int64'
     *
     * 
     */
  change_threshold: number | string;
  /**
     * If set with diffing, diffing will not be performed if the number of rows
to be run in the fully calculated diff import exceeds the threshold.
     *
     * type: integer

format: 'int64'
     *
     * 
     */
  diff_row_count_threshold: number | string;
};

type Options = (
  | {
      path: import_sis_dataPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: import_sis_dataPathParameters;
    }
) &
  (
    | {
        query?: Partial<import_sis_dataSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<import_sis_dataSearchParameters>;
        body?: Partial<import_sis_dataFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<import_sis_dataFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: import_sis_dataSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: import_sis_dataSearchParameters;
          }
      ) &
        (
          | {
              body: import_sis_dataFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: import_sis_dataFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Import SIS data
 *
 * Import SIS data into Canvas. Must be on a root account with SIS imports
enabled.

For more information on the format that's expected here, please see the
"SIS CSV" section in the API docs.
 *
 * nickname: import_sis_data
 *
 * 
 *
 * 
 */
export async function import_sis_data(options: Options) {
  const response = await client().fetchAs<SisImport>(
    `/api/v1/accounts/{account_id}/sis_imports`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
