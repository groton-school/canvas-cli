import { PathString } from '@battis/descriptive-types';

export type Deprecation = string | undefined;

export type Export = 'export' | '' | undefined;

export type Name = string;

export type Type = {
  type: string;
  tsReferences?: Reference[];
  optional?: '?';
  description?: string;
};

export type Reference = {
  type: string;
} & (
  | { filePath?: PathString; packagePath?: never }
  | { packagePath: string; filePath?: never }
);
