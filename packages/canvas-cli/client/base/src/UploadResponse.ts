import { URLString } from '@battis/descriptive-types';

export type UploadResponse = {
  upload_url: URLString;
  upload_params: {
    key: string;
    [param: string]: string;
  };
};
