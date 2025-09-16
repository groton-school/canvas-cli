import { DateTimeString, PathString } from '@battis/descriptive-types';
import { JSONObject, JSONValue } from '@battis/typescript-tricks';
import * as Archive from '@msar/types.archive';
import probe from 'probe-image-size';

export type CanvasData = {
  id?: string;
  blackbaud_id?: number;
  course_id?: string;
  args: JSONObject;
  created_at?: DateTimeString;
  modified_at?: DateTimeString;
  [key: string]: JSONValue | undefined;
};

export type Annotation = Archive.Annotation & {
  canvas: CanvasData;
  dimensions?: probe.ProbeResult;
  original_localPath?: PathString;
  sha1_file_hash?: string;
};

export function isCanvasData(obj: object): obj is CanvasData {
  return obj && 'args' in obj && typeof obj.args === 'object';
}

export function isAnnotated(obj: object): obj is Annotation {
  return Archive.isAnnotated(obj) && 'canvas' in obj;
}

export function willBeAnnotated(obj: object): obj is Annotation {
  return Archive.isAnnotated(obj) && 'localPath' in obj;
}

function isWeakEqual(a?: JSONValue, b?: JSONValue) {
  if (a && b) {
    return a == b;
  }
  return true;
}

export function isEqual(a?: CanvasData, b?: CanvasData): boolean;
export function isEqual(a?: JSONObject, b?: JSONObject): boolean;
export function isEqual(
  a?: CanvasData | JSONObject,
  b?: CanvasData | JSONObject
): boolean {
  if (a === undefined) {
    if (b === undefined) {
      throw new Error(`Cannot compare two undefined values`);
    }
    return false;
  } else if (b === undefined) {
    return false;
  }
  if (isCanvasData(a)) {
    if (isCanvasData(b)) {
      return (
        isWeakEqual(a.id, b.id) &&
        isWeakEqual(a.blackbaud_id, b.blackbaud_id) &&
        isEqual(a.args, b.args)
      );
    } else {
      throw new Error(`Cannot compare CanvasData and args`);
    }
  } else {
    if (isCanvasData(b)) {
      throw new Error(`Cannot compare args and CanvasData`);
    } else {
      const aKeys = Object.keys(a);
      const bKeys = Object.keys(b);
      return (
        aKeys.length == bKeys.length &&
        aKeys.reduce(
          (eq, key) =>
            eq &&
            key in b &&
            (a[key] == b[key] ||
              // FIXME this is an exceptionally dumb way of comparing empty arrays
              JSON.stringify(a[key]) == JSON.stringify(b[key])),
          true
        )
      );
    }
  }
}

export type PotentialAnnotation = PathString | Archive.Annotation | Annotation;
