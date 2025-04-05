import { DataTypeBase } from './DataTypeBase.js';

export type ParameterObject = DataTypeBase & {
  paramType: 'path' | 'query' | 'body' | 'header' | 'form';
  name: string;
  description?: string;
  required?: boolean;
  allowMultiple?: boolean;
} & (
    | {
        type: 'File';
        paramType: 'form';
        consumes: 'multipart/form-data';
      }
    | {
        /** Any type other than File */
        type: string;
      }
  );
