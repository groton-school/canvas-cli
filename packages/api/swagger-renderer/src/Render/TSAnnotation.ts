import { PathString } from '@battis/descriptive-types';

export type TSDeprecation = string | undefined;

export type TSExport = 'export' | '' | undefined;

export type TSName = string;

export type TSType = {
  type: string;
  tsReferences?: TSReference[];
  optional?: '?';
  description?: string;
};

export type TSReference = {
  type: string;
} & (
  | { filePath?: PathString; packagePath?: never }
  | { packagePath: string; filePath?: never }
);
