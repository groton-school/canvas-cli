import { URLString } from '@battis/descriptive-types';

/** @see https://developerdocs.instructure.com/services/canvas/basics/file.file_uploads#step-2-upload-the-file-data-to-the-url-given-in-the-previous-response */
export type UploadResponse = {
  /**
   * Using the data in the JSON response from Step 1, the application can now
   * upload the actual file data, by POSTing a specially formulated request to
   * the URL given in the upload_url field of the response.
   */
  upload_url: URLString;
  /**
   * The parameters POSTed with this request come directly from the
   * upload_params part of the JSON response in Step 1.
   */
  upload_params: {
    key: string;
    [param: string]: string;
  };
};
