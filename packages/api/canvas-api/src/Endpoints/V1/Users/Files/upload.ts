import { JSONValue } from '@battis/typescript-tricks';
import { client, FileLocation, Masquerade, UploadResponse } from '#client';
import { File } from '../../../../Resources/Files.js';

export type uploadPathParameters = {
  /**
   * ID
   *
   * type: string
   *
   *
   */
  user_id: string | number;
};

export type uploadSearchParameters = Masquerade;

export type uploadFormParameters = Masquerade & {
  /**
   * The filename of the file. Any UTF-8 name is allowed. Path components such as &#x60;/&#x60; and &#x60;\&#x60; will be treated as part of the filename, not a path to a sub-folder.
   *
   *
   *
   *
   */
  name: string;
  /**
   * The size of the file, in bytes. This field is recommended, as it will let you find out if there&#x27;s a quota issue before uploading the raw file.
   *
   * format: integer
   *
   *
   */
  size?: number;
  /**
   * The content type of the file. If not given, it will be guessed based on the file extension.
   *
   * format: mime-type
   *
   *
   */
  content_type?: string;
  /**
   * The id of the folder to store the file in. An error will be returned if this does not correspond to an existing folder. If this and parent_folder_path are sent an error will be returned. If neither is given, a default folder will be used.
   *
   * format: int64
   *
   *
   */
  parent_folder_id?: number;
  /**
   * The path of the folder to store the file in. The path separator is the forward slash &#x60;/&#x60;, never a back slash. The folder will be created if it does not already exist. This parameter only applies to file uploads in a context that has folders, such as a user, a course, or a group. If this and parent_folder_id are sent an error will be returned. If neither is given, a default folder will be used.
   *
   *
   *
   *
   */
  parent_folder_path?: string;
  /**
   * The path of the folder to store the file in. The path separator is the forward slash &#x60;/&#x60;, never a back slash. The folder will be created if it does not already exist. This parameter only applies to file uploads in a context that has folders, such as a user, a course, or a group. If this and parent_folder_id are sent an error will be returned. If neither is given, a default folder will be used.
   *
   *
   *
   * @deprecated Use parent_folder_path instead.
   */
  folder?: string;
  /**
   * How to handle duplicate filenames. If &#x60;overwrite&#x60;, then this file upload will overwrite any other file in the folder with the same name. If &#x60;rename&#x60;, then this file will be renamed if another file in the folder exists with the given name. If no parameter is given, the default is &#x60;overwrite&#x60;. This doesn&#x27;t apply to file uploads in a context that doesn&#x27;t have folders.
   *
   *
   *
   *
   */
  on_duplicate?: 'overwrite' | 'rename';
  /**
   * An array of additional information to include in the upload success response. See Files API for more information.
   *
   *
   *
   *
   */
  success_include?: string[];
};

type Options = (
  | {
      path: uploadPathParameters;
    }
  | {
      /** @deprecated Use {@link Options.path} */
      pathParams: uploadPathParameters;
    }
) &
  (
    | {
        query?: Partial<uploadSearchParameters>;
        /** @deprecated Use {@link Options.query} */
        searchParams?: Partial<uploadSearchParameters>;
        body?: Partial<uploadFormParameters>;
        /** @deprecated Use {@link Options.body} */
        params?: Partial<uploadFormParameters>;
        strict?: false;
      }
    | ((
        | {
            query: uploadSearchParameters;
          }
        | {
            /** @deprecated Use {@link Options.query} */
            searchParams: uploadSearchParameters;
          }
      ) &
        (
          | {
              body: uploadFormParameters;
            }
          | {
              /** @deprecated Use {@link Options.body} */
              params: uploadFormParameters;
            }
        ) & {
          strict: true;
        })
  ) & {
    file: FileLocation;
  };

/**
 * Upload a file
 *
 * Upload a file to the user's personal files section.

This API endpoint is the first step in uploading a file to a user's files.
See the {file:file.file_uploads.html File Upload Documentation} for details on
the file upload workflow.

Note that typically users will only be able to upload files to their
own files section. Passing a user_id of +self+ is an easy shortcut
to specify the current user.
 *
 * nickname: upload_file
 *
 * 
 *
 * 
 */
export async function upload({ file, ...options }: Options) {
  const response = await client().fetchAs<UploadResponse>(
    `/api/v1/users/{user_id}/files`,
    {
      method: 'POST',
      ...options
    }
  );
  return await client().upload<File>({ response, file });
}
