import { JSONObject, JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';
import { LtiResourceLink } from '../../../../Resources/LtiResourceLinks.js';

export type updatePathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  course_id: string | number;
  /**
   * ID
   *
   * type: string
   *
   *
   */
  id: string | number;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
  /**
     * The launch URL for this resource link.
&lt;b&gt;Caution!&lt;/b&gt; URL must match the URL or domain of the tool associated with this resource link
     *
     * 
     *
     * 
     */
  url: string;
  /**
     * Custom parameters to be sent to the tool when launching this link.
&lt;b&gt;Caution!&lt;/b&gt; Changing these from what the tool provided could result in errors if the tool doesn&#x27;t see what it&#x27;s expecting.
     *
     * Hash
     *
     * 
     */
  custom: JSONObject;
  /**
   * Update link even if it is deleted. Default is false.
   *
   * type: boolean
   *
   *
   */
  include_deleted: boolean | string;
  /**
     * The Canvas identifier for the LTI 1.3 External Tool that the LTI Resource Link was originally installed from.
&lt;b&gt;Caution!&lt;/b&gt; The resource link url must match the tool&#x27;s domain or url.
     *
     * type: integer

format: 'int64'
     *
     * 
     */
  context_external_tool_id: number | string;
};

type Options = (
  | {
      path: updatePathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: updatePathParameters;
    }
) &
  (
    | {
        query?: Partial<updateSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<updateSearchParameters>;
        body?: Partial<updateFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<updateFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: updateSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: updateSearchParameters;
          }
      ) &
        (
          | {
              body: updateFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: updateFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Update an LTI Resource Link
 *
 * Update the specified resource link with the provided parameters.

<b>Caution!</b> Changing existing links may result in launch errors.
 *
 * nickname: update_lti_resource_link
 *
 * 
 *
 * 
 */
export async function update(options: Options) {
  const response = await client().fetchAs<LtiResourceLink>(
    `/api/v1/courses/{course_id}/lti_resource_links/{id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
