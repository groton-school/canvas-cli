import { JSONObject } from '@battis/typescript-tricks';
import { stringify } from '@groton/canvas-api.utilities';
import { FetchFunction, FetchInit } from './Fetch.js';

type EndpointParameters = {
  pathParams?: JSONObject;
  searchParams?: JSONObject;
};

type RequestParameters = {
  params?: JSONObject;
  access_token?: string;
};

const headers = {
  'Content-Type': 'application/x-www-form-urlencoded',
  Accept: 'application/json+canvas-string-ids'
};

export function flattenEndpoint(
  endpoint: string,
  { pathParams, searchParams }: EndpointParameters
) {
  if (pathParams) {
    endpoint = Object.keys(pathParams || {}).reduce(
      (populatedEndpoint, paramName) => {
        if (pathParams[paramName]) {
          return populatedEndpoint.replaceAll(
            `{${paramName}}`,
            pathParams[paramName].toString()
          );
        }
        return populatedEndpoint;
      },
      endpoint
    );
  }
  if (searchParams) {
    endpoint = `${endpoint}${endpoint.includes('?') ? '&' : '?'}${stringify(searchParams)}`;
  }
  return endpoint;
}

export function constructInit<F extends FetchFunction>(
  init: FetchInit<F> = {},
  { params, access_token }: RequestParameters = {}
) {
  if (params) {
    init.body = stringify(params);
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
