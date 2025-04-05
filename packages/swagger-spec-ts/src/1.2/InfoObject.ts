import { EmailString, URLString } from '@battis/descriptive-types';

export type InfoObject = {
  title: string;
  description: string;
  termsOfServiceUrl?: URLString;
  contact?: EmailString;
  license?: string;
  licenseUrl?: string;
};
