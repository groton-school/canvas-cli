import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { OriginalityReport } from '../../../../../Resources/OriginalityReports.js';

export type createPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  assignment_id: string | number;
  /**
   * ID
   *
   * type: string
   *
   *
   */
  submission_id: string | number;
};

export type createSearchParameters = Masquerade;

export type createFormParameters = Masquerade & {
  /**
     * The id of the file being given an originality score. Required
if creating a report associated with a file.
     *
     * type: integer

format: 'int64'
     *
     * 
     */
  'originality_report[file_id]': number | string;
  /**
     * A number between 0 and 100 representing the measure of the
specified file&#x27;s originality.
     *
     * type: number

format: 'float'
     *
     * 
     */
  'originality_report[originality_score]': number | string;
  /**
     * The URL where the originality report for the specified
file may be found.
     *
     * 
     *
     * 
     */
  'originality_report[originality_report_url]': string;
  /**
     * The ID of the file within Canvas that contains the originality
report for the submitted file provided in the request URL.
     *
     * type: integer

format: 'int64'
     *
     * 
     */
  'originality_report[originality_report_file_id]': number | string;
  /**
     * The resource type code of the resource handler Canvas should use for the
LTI launch for viewing originality reports. If set Canvas will launch
to the message with type &#x27;basic-lti-launch-request&#x27; in the specified
resource handler rather than using the originality_report_url.
     *
     * 
     *
     * 
     */
  'originality_report[tool_setting][resource_type_code]': string;
  /**
     * The URL Canvas should launch to when showing an LTI originality report.
Note that this value is inferred from the specified resource handler&#x27;s
message &quot;path&quot; value (See &#x60;resource_type_code&#x60;) unless
it is specified. If this parameter is used a &#x60;resource_type_code&#x60;
must also be specified.
     *
     * 
     *
     * 
     */
  'originality_report[tool_setting][resource_url]': string;
  /**
     * May be set to &quot;pending&quot;, &quot;error&quot;, or &quot;scored&quot;. If an originality score
is provided a workflow state of &quot;scored&quot; will be inferred.
     *
     * 
     *
     * 
     */
  'originality_report[workflow_state]': string;
  /**
     * A message describing the error. If set, the &quot;workflow_state&quot;
will be set to &quot;error.&quot;
     *
     * 
     *
     * 
     */
  'originality_report[error_message]': string;
  /**
     * If no &#x60;file_id&#x60; is given, and no file is required for the assignment
(that is, the assignment allows an online text entry), this parameter
may be given to clarify which attempt number the report is for (in the
case of resubmissions). If this field is omitted and no &#x60;file_id&#x60; is
given, the report will be created (or updated, if it exists) for the
first submission attempt with no associated file.
     *
     * type: integer

format: 'int64'
     *
     * 
     */
  'originality_report[attempt]': number | string;
};

type Options = (
  | {
      path: createPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: createPathParameters;
    }
) &
  (
    | {
        query?: Partial<createSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<createSearchParameters>;
        body?: Partial<createFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<createFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: createSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: createSearchParameters;
          }
      ) &
        (
          | {
              body: createFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: createFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Create an Originality Report
 *
 * Create a new OriginalityReport for the specified file
 *
 * nickname: create_originality_report
 *
 *
 *
 *
 */
export async function create(options: Options) {
  const response = await client().fetchAs<OriginalityReport>(
    `/api/lti/assignments/{assignment_id}/submissions/{submission_id}/originality_report`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
