import { JSONValue } from '@battis/typescript-tricks';
import { client, Masquerade } from '#client';

export type updatePathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  media_object_id: string | number;
};

export type updateSearchParameters = Masquerade;

export type updateFormParameters = Masquerade & {
  /**
   * The new title.
   *
   *
   *
   *
   */
  user_entered_title: string;
};

type Options = (
  | {
      path: updatePathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: updatePathParameters;
    }
) &
  (
    | {
        query?: Partial<updateSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<updateSearchParameters>;
        body?: Partial<updateFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<updateFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: updateSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: updateSearchParameters;
          }
      ) &
        (
          | {
              body: updateFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: updateFormParameters;
            }
        ) & {
          strict: true;
        })
  );

/**
 * Update Media Object
 *
 * Updates the title of a media object.
 *
 * nickname: update_media_object_media_objects
 *
 *
 *
 *
 */
export async function update(options: Options) {
  const response = await client().fetchAs<JSONValue>(
    `/api/v1/media_objects/{media_object_id}`,
    {
      method: 'PUT',
      ...options
    }
  );
  return response;
}
