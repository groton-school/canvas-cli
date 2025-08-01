import { JSONObject } from '@battis/typescript-tricks';
import { isError } from '@groton/canvas-cli.utilities';
import { Base } from './Base.js';
import { FetchEndpoint, FetchFunction, FetchInit } from './Fetch.js';
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

type AllPagesOptions<F extends FetchFunction = FetchFunction> = {
  instance_url: Base['instance_url'];
  endpoint: FetchEndpoint<F>;
  pathParams?: JSONObject;
  searchParams?: JSONObject;
  params?: JSONObject;
  accessToken?: () => string | undefined | Promise<string | undefined>;
  init?: FetchInit<F>;
  fetch: FetchFunction;
};

/** Fetch all pages of paginated results at once */
export async function fetchAllPages<
  T,
  F extends FetchFunction = FetchFunction
>({
  endpoint,
  pathParams,
  searchParams,
  params,
  accessToken,
  init,
  fetch
}: AllPagesOptions<F>) {
  let nextEndpoint: string | undefined = flattenEndpoint(endpoint.toString(), {
    pathParams,
    searchParams
  });
  init = constructInit<F>(init, {
    params,
    access_token: accessToken ? await accessToken() : undefined
  });
  let result: T | undefined = undefined;
  do {
    const response = await fetch(
      nextEndpoint,
      // @ts-expect-error 2345 fix Fetch.ts typing
      result
        ? constructInit(init, {
            access_token: accessToken ? await accessToken() : undefined
          })
        : init
    );
    if (response.ok) {
      const page = (await response.json()) as T;
      if (isError(page)) {
        throw new Error(
          `Error: ${JSON.stringify({ endpoint, init, response, error: page })}`
        );
      }
      if (Array.isArray(page)) {
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
      const details = {
        url: response.url,
        request_headers: result ? undefined : init?.headers,
        body: result ? undefined : init?.body,
        status: response.status,
        statusText: response.statusText,
        response_headers: response.headers,
        response: response.text(),
        result
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
