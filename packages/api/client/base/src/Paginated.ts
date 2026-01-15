import { JSONObject } from '@battis/typescript-tricks';
import { isError } from '@groton/canvas-api.utilities';
import { Base } from './Base.js';
import { constructInit, flattenEndpoint } from './Request.js';

export type Paginated = {
  /**
   * Requests that return multiple items will be paginated to 10 items by
   * default. You can set a custom per-page amount with the ?per_page parameter.
   * There is an unspecified limit to how big you can set per_page to, so be
   * sure to always check for the Link header.
   *
   * @see https://developerdocs.instructure.com/services/canvas/basics/file.pagination
   */
  per_page?: number;
};

type AllPagesOptions<ReturnType> = {
  instance_url: Base['instance_url'];
  endpoint: string | URL | Request;
  pathParams?: JSONObject;
  searchParams?: JSONObject;
  params?: JSONObject;
  accessToken?: () => string | undefined | Promise<string | undefined>;
  init?: RequestInit;
  fetch: (
    endpoint: string | URL | Request,
    init?: RequestInit
  ) => Promise<Response>;
  pageCallback?: (page: ReturnType) => void;
};

/** Fetch all pages of paginated results at once */
export async function fetchAllPages<ReturnType>({
  instance_url,
  endpoint,
  pathParams,
  searchParams,
  params,
  accessToken,
  init,
  fetch,
  pageCallback
}: AllPagesOptions<ReturnType>) {
  let nextEndpoint: string | undefined = flattenEndpoint(endpoint.toString(), {
    pathParams,
    searchParams
  });
  init = constructInit(init, {
    params,
    access_token: accessToken ? await accessToken() : undefined
  });
  let result: ReturnType | undefined = undefined;
  do {
    const response = await fetch(
      new URL(nextEndpoint, instance_url),
      result
        ? constructInit(init, {
            access_token: accessToken ? await accessToken() : undefined
          })
        : init
    );
    if (response.ok) {
      const page = (await response.json()) as ReturnType;
      if (isError(page)) {
        throw new Error(
          `Error: ${JSON.stringify({ endpoint, init, response, error: page })}`
        );
      }
      if (Array.isArray(page)) {
        if (pageCallback) {
          pageCallback(page);
        }
        if (!result) {
          result = page;
        } else {
          result.push(...page);
        }
        const matches = /<([^>]+)>;\s*rel="next"/gm.exec(
          response!.headers.get('link') || ''
        );
        nextEndpoint = matches && matches.length >= 2 ? matches[1] : undefined;
      } else {
        result = page;
      }
    } else {
      let body = await response.text();
      try {
        body = JSON.parse(body);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (_) {
        // ignore failure to parse
      }
      const details = {
        request: {
          url: response.url,
          method: init?.method,
          headers: result ? undefined : init?.headers,
          body: result ? undefined : init?.body
        },
        response: {
          status: response.status,
          statusText: response.statusText,
          headers: response.headers,
          body
        },
        previous_accumulated_pages: result
      };
      throw new Error(JSON.stringify(details, null, 2));
    }
  } while (Array.isArray(result) && nextEndpoint);

  if (result === undefined) {
    throw new Error(
      `Unexpected undefined result: ${JSON.stringify({ endpoint, init: result ? undefined : init })}`
    );
  }

  return result;
}
