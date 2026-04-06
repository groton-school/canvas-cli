import { stringify } from '#utilities';
import { JSONObject } from '@battis/typescript-tricks';

type EndpointParameters = {
  path?: JSONObject;
  /** @deprecated Use {@link EndpointParameters.path} */
  pathParams?: JSONObject;

  query?: JSONObject;
  /** @deprecated Use {@link EndpointParameters.query} */
  searchParams?: JSONObject;
};

type RequestParameters = {
  body?: JSONObject;
  /** @deprecated Use {@link RequestParameters.body} */
  params?: JSONObject;
  access_token?: string;
};

const headers = {
  'Content-Type': 'application/x-www-form-urlencoded',
  Accept: 'application/json+canvas-string-ids'
};

export function flattenEndpoint(
  endpoint: string,
  { path, query, pathParams, searchParams }: EndpointParameters
) {
  path = path || pathParams;
  query = query || searchParams;
  if (path) {
    endpoint = Object.keys(path || {}).reduce(
      (populatedEndpoint, paramName) => {
        if (path[paramName]) {
          return populatedEndpoint.replaceAll(
            `{${paramName}}`,
            path[paramName].toString()
          );
        }
        return populatedEndpoint;
      },
      endpoint
    );
  }
  if (query) {
    endpoint = `${endpoint}${endpoint.includes('?') ? '&' : '?'}${stringify(query)}`;
  }
  return endpoint;
}

export function constructInit(
  init: RequestInit = {},
  { body, params, access_token }: RequestParameters = {}
) {
  body = body || params;
  if (body) {
    init.body = stringify(body);
  }
  if (!init.headers) {
    init.headers = {};
  }
  init.headers = {
    ...init.headers,
    ...headers,
    Authorization: access_token ? `Bearer ${access_token}` : undefined
  };
  return init;
}
