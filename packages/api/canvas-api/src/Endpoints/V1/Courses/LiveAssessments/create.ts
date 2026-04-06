import { client, Masquerade } from '#client';
import { JSONValue } from '@battis/typescript-tricks';

export type createPathParameters = {
  /**
   * ID
   *
   * Type: string
   */
  course_id: string | number;
};

export type createSearchParameters = Masquerade;

type Options = {
  pathParams: createPathParameters;
} & (
  | {
      searchParams?: Partial<createSearchParameters>;
      strict?: false;
    }
  | {
      searchParams: createSearchParameters;
      strict: true;
    }
);

/**
 * Create or find a live assessment
 *
 * Creates or finds an existing live assessment with the given key and aligns it
 * with the linked outcome
 *
 * Nickname: create_or_find_live_assessment
 */
export async function create(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/courses/{course_id}/live_assessments`,
    {
      method: 'POST',
      ...options
    }
  );
  return response;
}
