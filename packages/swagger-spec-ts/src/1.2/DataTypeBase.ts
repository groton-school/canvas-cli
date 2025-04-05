export type DataTypeBase = (
  | { type: string; $ref?: string }
  | { type?: string; $ref: string }
) &
  (
    | {
        type?: 'integer';
        format?: 'int32' | 'int64';
      }
    | {
        type?: 'number';
        format?: 'float' | 'double';
      }
    | {
        type?: 'string';
        format?: 'byte' | 'date' | 'date-time';
      }
  ) & {
    /** Not array, object, null */
    defaultValue?: unknown;
    /** Unique items, min items 1 */
    enum?: string[];
    minimum?: string;
    maximum?: string;
    items?: ItemsObject;
    uniqueItems?: boolean;
  };

type ItemsObject =
  | { $ref: string }
  | (DataTypeBase & { type: string; format?: string });
