import { DataTypeBase } from './DataTypeBase.js';

export type ModelsObject = {
  id: string;
  description?: string;
  properties: Record<string, PropertyObject>;
} & (
  | {
      subTypes: string[];
      discriminator?: string;
    }
  | {
      subTypes: never;
      discriminator: never;
    }
);

/** May not refer to itself */
type PropertyObject = DataTypeBase;
