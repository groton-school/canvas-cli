import { PathString, URLString } from '@battis/descriptive-types';
import { JSONObject, JSONValue } from '@battis/typescript-tricks';
import { UploadResponse } from './UploadResponse.js';

export type Init = {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  pathParams?: JSONObject;
  searchParams?: JSONObject;
  params?: JSONObject;
};

export type FileLocation = {
  filePath?: PathString;
  url?: URLString;
};

export type UploadParams = {
  response: UploadResponse;
  file: FileLocation;
};

export interface Base {
  readonly instance_url: URLString;
  fetchAs<T = JSONValue>(endpoint: string, init?: Init): Promise<T>;
  upload<T = JSONValue>(params: UploadParams): Promise<T>;
}
