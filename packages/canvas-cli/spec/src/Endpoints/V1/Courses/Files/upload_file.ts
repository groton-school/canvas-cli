type Parameters = {};

type Options = {
  parameters: Parameters;
};

/**
 * Upload a file
 *
 * Upload a file to the course.
 *
 * This API endpoint is the first step in uploading a file to a course. See the
 * {file:file_uploads.html File Upload Documentation} for details on the file
 * upload workflow.
 *
 * Only those with the "Manage Files" permission on a course can upload files to
 * the course. By default, this is Teachers, TAs and Designers.
 *
 * Nickname: upload_file
 */
export async function upload_file({ parameters }: Options): Promise<void> {
  return await (
    await fetch(`/v1/courses/{course_id}/files`, {
      method: 'POST',
      body: parameters
    })
  ).json();
}
