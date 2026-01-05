export type DataType =
  | RefType
  | VoidType
  | PrimitiveType
  | ModelType
  | ArrayType;

export type RefType = {
  $ref: string;
};

export function isRefType(obj: DataType): obj is RefType {
  return typeof obj === 'object' && '$ref' in obj;
}

export type VoidType = {
  type: 'void';
};

export function isVoidType(obj: DataType): obj is VoidType {
  return 'type' in obj && obj.type === 'void';
}

export type ModelType = {
  /** Not: boolean, integer, number, string, array */
  type: string;
};

export function isModelType(obj: DataType): obj is ModelType {
  return 'type' in obj && !isPrimitiveType(obj) && !isArrayType(obj);
}

export type PrimitiveType =
  | {
      type: 'boolean';
      defaultValue?: boolean;
    }
  | ((
      | {
          type: 'integer';
          format?: 'int32' | 'int64';
        }
      | {
          type: 'number';
          format?: 'float' | 'double';
        }
    ) & {
      defaultValue?: number;
      minimum?: number;
      maximum?: number;
    })
  | {
      type: 'string';
      format?: 'byte' | 'date' | 'date-time';
      /** Unique items, min items 1 */
      enum?: string[];
      default?: string;
    };

export function isPrimitiveType(obj: DataType): obj is PrimitiveType {
  return (
    'type' in obj &&
    ['boolean', 'integer', 'number', 'string'].includes(obj.type)
  );
}

export type ArrayType = {
  type: 'array';
  items: ItemsObject;
  uniqueItems?: boolean;
};

export function isArrayType(obj: DataType): obj is ArrayType {
  return 'type' in obj && obj.type === 'array';
}

type ItemsObject = RefType | PrimitiveType;
