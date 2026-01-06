import { PathString, URLString } from '@battis/descriptive-types';
import { JSONObject, JSONValue } from '@battis/typescript-tricks';
import { UploadResponse } from './UploadResponse.js';

export type Init = {
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
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
  /** Base instance URL for API requests */
  readonly instance_url: URLString;

  /**
   * For optimal compatibility, requests to the Canvas API should include the
   * following headers:
   *
   * ```txt
   *   Content-Type: application/x-www-form-urlencoded
   *   Accept: application/json+canvas-string-ids
   * ```
   *
   * @param endpoint Endpoint path, relative to `instance_url`
   * @param init Request method and parameters
   * @see https://developerdocs.instructure.com/services/canvas#schema
   */
  fetchAs<T extends JSONValue = JSONValue>(
    endpoint: string,
    init?: Init
  ): Promise<T>;

  /**
   * Steps 2 and 3 of the file upload process
   *
   * @param params Opaque upload response and file location information
   * @see https://developerdocs.instructure.com/services/canvas/basics/file.file_uploads
   */
  upload<T extends JSONValue = JSONValue>(params: UploadParams): Promise<T>;
}
