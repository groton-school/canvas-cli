import nodeFetch from 'node-fetch';

export type FetchFunction = typeof fetch | typeof nodeFetch;

export type FetchEndpoint<Fetch extends FetchFunction> = Parameters<Fetch>[0];

export type FetchInit<Fetch extends FetchFunction> = Parameters<Fetch>[1];
